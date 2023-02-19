import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export default class TagController {
  @Get('/')
  findAll() {
    return ['A', 'B'];
  }
}
