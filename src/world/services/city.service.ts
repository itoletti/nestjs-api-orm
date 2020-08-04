import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../entities/city.entity';
import { Repository } from 'typeorm';
import { CityDTO } from '../dto/City.DTO';
import { CountryService } from './country.service';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    private readonly countryService: CountryService
  ) {}
  
  async getCities(): Promise<City[]> {
    return await this.cityRepository.find();
  }

  async getCity(cityID :number): Promise<City> {
    // const id = Number(cityID);
    const city = await this.cityRepository.findOne(cityID);
    if (!city) {
      throw new HttpException('La ciudad no existe!', 404);
    }
    return city;
  }

  async addCity(cityDto: CityDTO): Promise<City[]> {
    const country = await this.countryService.getCountry(cityDto.countryCode);
    if (!country){
      throw new HttpException('El pais no existe', 404);
    }
    
    const city = new City();
    city.name = cityDto.name;
    city.countryCode = cityDto.countryCode;
    city.district = cityDto.district;
    city.population = cityDto.population;

    await this.cityRepository.save(city);
    const cities = await this.cityRepository.find();
    return cities;
  }

  async deleteCity(cityID: number): Promise<City[]> {
    await this.cityRepository.delete(cityID);
    return this.cityRepository.find();
  }

  async updateCity (cityID: number, cityDTO: CityDTO): Promise<City> {
    const city = await this.cityRepository.findOne(cityID);
    if (!city) {
      throw new HttpException('La ciudad no existe', 404);
    }

    city.name = cityDTO.name;
    city.district = cityDTO.district;
    city.population = cityDTO.population

    await this.cityRepository.save(city);
    return await this.cityRepository.findOne(cityID);
  }
}