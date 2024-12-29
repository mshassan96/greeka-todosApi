import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from '@task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "db.uphbojgzjssemvkggawv.supabase.co",
      port: 5432,
      username: "postgres",
      password: "7BakRb*5@zQhHQ6",
      database: "postgres",
      autoLoadEntities: true,
      // synchronize: true, // TODO: Remove in production
      ssl: { rejectUnauthorized: false }
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
