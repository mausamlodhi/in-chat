const { Server } = require("socket.io");
import redisAdapter from "socket.io-redis";

module.exports = (server)=>{
    const io = new Server(server);
        io.adapter(redisAdapter({
          host:'localhost',
          port:6379
        }));
    io.on('connection',(socket)=>{
        console.log('Client connected on worker : ',process.pid);
        socket.on('message',(message)=>{
            console.log('Message recieved : ',message);
            io.emit('message',message) // Broadcast message to all users
        });
        socket.on('disconnect',()=>{
            console.log('Client is disconnected from : ',process.pid);
        })
    })
}