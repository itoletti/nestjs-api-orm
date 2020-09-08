import { COUNTRY_DATA } from '../../../test/country.data';
// import { Component } from '@nestjs/common';
import { Country } from '../entities/country.entity';
 
// @Component()
export class CountryServiceFake {
    constructor() {}
 
    async getCountries(): Promise<Country[]> {
        return await COUNTRY_DATA;
    }
}