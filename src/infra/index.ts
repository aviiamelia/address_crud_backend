import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  const newUser = await prisma.address.create({
    data: {
      city: "curitiba",
      complement: "fundos",
      number: "123",
      state: "paraná",
      street: "rua das flores",
      cep: "1231231",
    },
  });
  console.log("Created user:", newUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
