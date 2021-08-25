import { Module } from '@nestjs/common';
import connectionOptions from '../ormconfig';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
