import { CITY_DATA } from '../../../test/city.data';
// import { Component } from '@nestjs/common';
import { City } from '../entities/city.entity';
 
// @Component()
export class CityServiceFake {
    constructor() {}
 
    async getCities(): Promise<City[]> {
        return await CITY_DATA;
    }
}