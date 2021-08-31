import { Module } from '@nestjs/common';
import connectionOptions from '../ormconfig';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './modules';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
