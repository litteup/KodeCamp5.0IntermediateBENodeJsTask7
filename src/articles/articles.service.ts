import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateArticleDto) {
    return this.prisma.article.create({ data });
  }

  async findAll() {
    return this.prisma.article.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({ where: { id } });
    if (!article)
      throw new NotFoundException(`Article with id ${id} not found`);
    return article;
  }

  async update(id: number, data: UpdateArticleDto) {
    // check existence
    await this.findOne(id);
    return this.prisma.article.update({ where: { id }, data });
  }

  async remove(id: number) {
    // check existence
    await this.findOne(id);
    await this.prisma.article.delete({ where: { id } });
    return { success: true };
  }
}
