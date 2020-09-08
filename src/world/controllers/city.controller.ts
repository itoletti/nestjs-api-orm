import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes } from '@nestjs/common';
import { CityService } from '../services/city.service';
import { CityDTO } from '../dto/City.DTO';

@Controller('city')
export class CityController {
    constructor(
        private cityService: CityService,
    ) { }
  
    @Get()
    async getCities() {
        return await this.cityService.getCities();
    }
  
    @Get(':cityID')
    async getCity(@Param('cityID') cityID: number) {
        return await this.cityService.getCity(cityID);
    }

    @Post()
    async addCity(@Body() city: CityDTO) {
        return await this.cityService.addCity(city);
    }

    @Delete(':cityID')
    async deleteCity(@Param('cityID') cityID: number) {
       return await this.cityService.deleteCity(cityID);
    }

    @Put(':cityID')
    async updateCity(@Param('cityID') cityID: number, @Body() city: CityDTO){
        return await this.cityService.updateCity(cityID, city);
    }
  }