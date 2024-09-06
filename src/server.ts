import http from "http";
import app from "./app";
import { Server } from "socket.io";
import { handleSocketConnection } from "./controllers/socketController"; // Импортируем контроллер для работы с Socket.IO

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

handleSocketConnection(io);

server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
