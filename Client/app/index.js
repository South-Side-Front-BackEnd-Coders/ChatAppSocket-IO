import { io } from "socket.io-client";

const socket = io("http://localhost:4000/server");
socket.on('connect', () => {
    console.log(socket.id);
})