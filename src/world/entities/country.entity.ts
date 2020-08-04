import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('country')
export class Country {
    @PrimaryColumn({
        length: 3
    })
    code: string;
    @Column({
        length: 52
    })
    name: string;
    @Column()
    continent: string;
    @Column({
        length: 26
    })
    region: string;
    @Column()
    surfacearea: number;
    @Column()
    indepyear: number;
    @Column()
    population: number;
    @Column()
    lifeexpectancy: number;
    @Column()
    gnp: number;
    @Column()
    gnpold: number;
    @Column({
        length: 45
    })
    governmentform: string;
    @Column({
        length: 60
    })
    headofstate: string;
    @Column()
    capital: number;
    @Column({
        length: 2
    })
    code2: string; 
}
