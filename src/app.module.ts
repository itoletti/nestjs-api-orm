import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorldModule } from './world/world.module';
import { CityController } from './world/controllers/city.controller';
import { CountryController } from './world/controllers/country.controller';
import { CityService } from './world/services/city.service';
import { CountryService } from './world/services/country.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    WorldModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
