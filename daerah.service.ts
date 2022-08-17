import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationInterface } from 'src/utils/pagination-type';

@Injectable()
export class DaerahService {
  constructor(private prisma: PrismaService) {}

  findAllDaerah(paginate: PaginationInterface) {
    return this.prisma.daerah.findMany({
      skip: (paginate.page - 1) * paginate.size,
      take: paginate.size,
    });
  }

  findAll() {
    return this.prisma.daerah.findMany();
  }

  count() {
    return this.prisma.daerah.count();
  }

  findOne(daerahWhere: Prisma.DaerahWhereInput) {
    return this.prisma.daerah.findFirst({
      where: daerahWhere,
    });
  }

  create(daerah: Prisma.DaerahCreateInput) {
    return this.prisma.daerah.create({
      data: daerah,
    });
  }

  update(id: number, daerah: Prisma.DaerahUpdateInput) {
    return this.prisma.daerah.update({
      where: {
        id,
      },
      data: daerah,
    });
  }

  delete(id: number) {
    return this.prisma.daerah.delete({
      where: {
        id,
      },
    });
  }
}
