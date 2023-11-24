import { Controller, Get } from '@nestjs/common';

@Controller('sample')
export class SampleController {
  @Get()
  getSample(): string {
    return 'This is a sample NestJS API!';
  }
}
