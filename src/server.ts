import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app =  fastify();

//Cors
app.register(cors);

app.register(appRoutes);

//routes



//listen-start
app.listen({
    port: 3304
}).then(() => console.log("HTTP Server Running!!"))