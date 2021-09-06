import { Module } from '@nestjs/common';
import connectionOptions from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
