import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LinkModule } from './link/link.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './link/link.entity';

@Module({
  imports: [
    LinkModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/one-time-links.db',
      entities: [Link],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
