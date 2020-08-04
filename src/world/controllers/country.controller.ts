import { Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common';
import { CountryService } from '../services/country.service';
import { CountryDTO } from '../dto/country.DTO';

@Controller('country')
export class CountryController {
    constructor (
        private countryService: CountryService
    ) {}

    @Get()
    async getCountries() {
        return await this.countryService.getCountries();
    }

    @Get(':code')
    async getCountry(@Param('code') code: string) {
        return await this.countryService.getCountry(code);
    }

    @Post()
    async addCountry(@Body() country: CountryDTO) {
        return await this.countryService.addCountry (country);
    }

    @Delete(':code')
    async deleteCountry(@Param('code') code: string) {
        return await this.countryService.deleteCountry(code);
    }

    @Put(':code')
    async updateCountry(@Param('code') code: string, @Body() countryDTO: CountryDTO) {
        return await this.countryService.updateCountry(code, countryDTO);
    }
}