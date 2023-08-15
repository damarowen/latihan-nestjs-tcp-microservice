import { NestFactory } from '@nestjs/core';
import { HelloWorldModule } from './hello-world.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(HelloWorldModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001,
    },
  });

  app.listen();
  
  console.log('Microservice is listening');
}

bootstrap();
