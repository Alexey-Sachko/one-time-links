import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('SERVER_PORT') || 3000;
  await app.listen(port);
  // TODO: use nest logger
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();