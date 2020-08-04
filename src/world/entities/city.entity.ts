import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('city')
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 35
    })
    name: string;
   
    @Column({
        length: 3
    })
    countryCode: string;
    
    @Column({
        length: 20
    })
    district: string;
   
    @Column()
    population: number;
}