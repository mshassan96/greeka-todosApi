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
      host: 'aws-0-ap-southeast-1.pooler.supabase.com',
      port: 6543, // Transaction Pooler port
      username: 'postgres.uphbojgzjssemvkggawv',
      password: '7BakRb*5@zQhHQ6',
      database: 'postgres',
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false }, // Ensure SSL is configured
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
