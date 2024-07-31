import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LinkModule } from './link/link.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [LinkModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
})
export class AppModule {}
