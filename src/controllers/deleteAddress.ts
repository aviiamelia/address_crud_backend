import { Address, PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";

const prisma = new PrismaClient();

async function deleteAddress(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: string };

  try {
    await prisma.address.delete({ where: { id: parseInt(id) } });
    reply.code(204).send();
  } catch (error) {
    console.error("Error creating address:", error);
    reply.code(500).send({ error: "Failed to create address" });
  }
}

export { deleteAddress };
