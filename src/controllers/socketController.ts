import { Server, Socket } from "socket.io";

interface User {
  id: string;
  role: "client" | "manager";
  userName: string;
}

const users: User[] = [];

export const handleSocketConnection = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    const role = socket.handshake.auth.role;

    if (!role) {
      console.log(`Роль не указана для пользователя: ${socket.id}`);
      return;
    }

    users.push({ id: socket.id, role, userName: "Имя Фамилия" });
    console.log(`${socket.id} присоединился как ${role}`);

    socket.join("support");

    socket.on(
      "message",
      (data: { message: string; sender: string; userName: string }) => {
        io.to("support").emit("message", {
          message: data.message,
          sender: data.sender,
          userName: "Имя Фамилия",
        });
      }
    );

    // Обработка отключения
    socket.on("disconnect", () => {
      console.log(`Пользователь отключился: ${socket.id}`);
      const index = users.findIndex((user) => user.id === socket.id);
      if (index !== -1) {
        users.splice(index, 1);
      }
    });
  });
};
