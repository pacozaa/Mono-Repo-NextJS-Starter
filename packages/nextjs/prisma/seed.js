const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.memories.createMany({
    data: [
      {
        content: "Buy groceries",
        priority: 2,
        category: "Personal",
      },
      {
        content: "Finish Prisma setup",
        priority: 1,
        category: "Work",
      },
      {
        content: "Book a flight for vacation",
        priority: 3,
        category: "Travel",
      },
    ],
  });

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
