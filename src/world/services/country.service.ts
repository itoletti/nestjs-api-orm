import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '../entities/country.entity';
import { Repository } from 'typeorm';
import { CountryDTO } from '../dto/country.DTO';

@Injectable()
export class CountryService {

    constructor(
        @InjectRepository(Country)
        private readonly countryRepository: Repository<Country>
    ) {}

    async getCountries(): Promise<Country[]> {
        return await this.countryRepository.find();       
    }

    async getCountry(code: string): Promise<Country> {
        return await this.countryRepository.findOne(code);
    }

    async addCountry(countryDTO : CountryDTO): Promise<Country> {
        const country = await this.countryRepository.findOne(countryDTO.code);
        if (country) {  //si no lo encontro -> undefined
            throw new HttpException('El pais ya existe', 200);
        }
        return await this.countryRepository.save(countryDTO);
    }

    async deleteCountry(code: string): Promise<any> {
        const resulatado = await this.countryRepository.delete(code);
        return resulatado
    }

    async updateCountry(code: string, countryDTO: CountryDTO): Promise<Country> {
        let country = await this.countryRepository.findOne(code);
        if (!country) {
            throw new HttpException('El pais no existe', 404);
        }
        country = this.countryRepository.merge(country, countryDTO);
        return await this.countryRepository.save(country);
    }
}