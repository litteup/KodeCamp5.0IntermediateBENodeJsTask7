import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';

import { CreateArticleDto } from './create-article.dto';

// Allow PartialType so clients can send only changed fields.
export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiPropertyOptional({
    example: 'Updated blog title',
    description: 'Optional updated title',
  })
  title?: string;

  @ApiPropertyOptional({
    example: 'Updated blog content',
    description: 'Optional updated content',
  })
  content?: string;
}
