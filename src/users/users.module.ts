import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/common/services/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
