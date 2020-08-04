import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity'
import { Country } from './entities/country.entity'
import { CityController } from './controllers/city.controller';
import { CountryController } from './controllers/country.controller';
import { CityService } from './services/city.service';
import { CountryService } from './services/country.service';

@Module({
    imports: [TypeOrmModule.forFeature([City, Country])],
    controllers: [CityController, CountryController],
    providers: [CityService, CountryService]
})

export class WorldModule {}

