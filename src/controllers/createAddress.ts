import { Address, PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";

const prisma = new PrismaClient();

async function createAddress(req: FastifyRequest, reply: FastifyReply) {
  const { street, state, city, complement, number, cep } = req.body as Address;

  try {
    const address = await prisma.address.create({
      data: {
        street,
        state,
        city,
        complement,
        number,
        cep,
      },
    });
    reply.code(201).send(address);
  } catch (error) {
    console.error("Error creating address:", error);
    reply.code(500).send({ error: "Failed to create address" });
  }
}

export { createAddress };
