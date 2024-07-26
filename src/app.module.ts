import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TaskModule } from './card/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      database: 'tasks',
      username: 'root',
      password: 'root',
      entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
