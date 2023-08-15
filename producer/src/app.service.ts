// hello.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('HELLO_SERVICE') private readonly client: ClientProxy,
  ) {}

  getHello(id: number) {
    return this.client.send({ cmd: 'getHello' }, { id });
  }

}
