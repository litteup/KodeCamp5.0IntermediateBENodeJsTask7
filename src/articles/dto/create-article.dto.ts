import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({
    example: 'My first blog post',
    description: 'Title of the blog article',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Hello world! This is the content of my first blog post',
    description: 'The full content of the article is contained here.',
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}
