import fastify from "fastify";
import cors from "@fastify/cors";
import { main } from "../infra/index";

import { createAddress } from "../controllers/createAddress";
import { updateAddress } from "../controllers/updateAddress";
import { deleteAddress } from "../controllers/deleteAddress";
import { getAddress } from "../controllers/getAddress";
const app = fastify();
const port = 3333;
app.register(cors, {
  origin: "*",
});
app.get("/address", getAddress);
app.post("/address", createAddress);
app.put("/address/:id", updateAddress);
app.delete("/address/:id", deleteAddress);
app
  .listen({
    port: port,
    host: "0.0.0.0",
  })
  .then(async () => {
    console.log(`server running on port ${port}`);
  });
