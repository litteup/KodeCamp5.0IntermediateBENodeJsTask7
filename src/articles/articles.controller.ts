import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all articles' })
  @ApiResponse({ status: 200, description: 'Return all articles.' })
  async findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get article by id' })
  @ApiParam({ name: 'id', required: true })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully created.',
  })
  async create(@Body() createDto: CreateArticleDto) {
    return this.articlesService.create(createDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an article' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateArticleDto,
  ) {
    return this.articlesService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an article' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.remove(id);
  }
}
