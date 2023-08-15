import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { HelloWorldService } from './hello-world.service';

@Controller()
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @MessagePattern({ cmd: 'getHello' })
  getHello(data: any) {
    return this.helloWorldService.getHello(data.id);
  }
}