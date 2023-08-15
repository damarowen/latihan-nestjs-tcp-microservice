// hello.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly helloService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id: number) {
    return this.helloService.getHello(id);
  }
}
