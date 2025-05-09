import { Prisma } from 'generated/prisma';

export interface PrismaUpdate {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
}
