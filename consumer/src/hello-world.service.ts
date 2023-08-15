import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  getHello(id: number): any {
    const data = { id, message: 'Hello, World!' };  // Example data generation
    return data;
  }
}