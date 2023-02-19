import { Controller, Get } from '@nestjs/common';
// import TagEntity from './tag.entity';
import TagService from './tag.service';

@Controller('tags')
export default class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/')
  async findAll(): Promise<{ tags: string[] }> {
    const response = await this.tagService.findAll();
    return {
      tags: response.map((tag) => tag.name),
    };
  }
}
