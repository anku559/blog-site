import { Injectable } from '@nestjs/common';

@Injectable()
export default class TagService {
  findAll(): string[] {
    return ['A', 'B', 'C', 'D', 'E'];
  }
}
