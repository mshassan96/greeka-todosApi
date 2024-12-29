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
      host: 'dpg-ctorkgd2ng1s73bledog-a',  
      port: 5432,                          
      username: 'greekatodos_user',        
      password: 'kiMoK2WLSyi57gPpjuRioHw3T0P3lnCP',
      database: 'greekatodos',
      autoLoadEntities: true,
      synchronize: false, // Set to false in production
      ssl: { 
        rejectUnauthorized: false,  // Allow SSL connections
      },
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
