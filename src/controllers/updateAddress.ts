import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import { Address, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateAddress(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = req.params as { id: string };
    const updatedAddressData = req.body as Address;

    const updatedAddress = await prisma.address.update({
      where: { id: parseInt(id) },
      data: updatedAddressData,
    });

    reply.code(200).send(updatedAddress);
  } catch (error) {
    console.error("Error updating address:", error);
    reply.code(500).send({ error: "Failed to update address" });
  }
}

export { updateAddress };
