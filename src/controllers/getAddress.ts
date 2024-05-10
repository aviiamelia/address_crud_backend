import { PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";

const prisma = new PrismaClient();

async function getAddress(req: FastifyRequest, reply: FastifyReply) {
  try {
    const address = await prisma.address.findMany();
    reply.code(201).send(address);
  } catch (error) {
    console.error("Error creating address:", error);
    reply.code(500).send({ error: "Failed to create address" });
  }
}

export { getAddress };
