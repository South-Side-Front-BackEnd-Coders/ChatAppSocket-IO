const io = require("socket.io")(4000, {
    cors: {
        origin: ["http://localhost:5500/Client/dist"]
    }
});

io.on("connection", socket => {
    console.log(socket.id);
})