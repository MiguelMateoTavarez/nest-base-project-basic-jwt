import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('123456', 10);

  await prisma.user.createMany({
    data: [
      {
        name: 'Miguel Mateo',
        email: 'miguel@example.com',
        password: passwordHash,
      },
      {
        name: 'Ana Castillo',
        email: 'ana@example.com',
        password: passwordHash,
      },
      {
        name: 'Luis Peña',
        email: 'luis@example.com',
        password: passwordHash,
      },
    ],
    skipDuplicates: true, // Evita errores si ya existen usuarios con el mismo email
  });

  console.log('Usuarios creados exitosamente.');
}

main()
  .catch((e) => {
    console.error('Error en el seeder:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
