if (process.argv[2] === 'WIN') {
  console.log(process.argv[2]);
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
