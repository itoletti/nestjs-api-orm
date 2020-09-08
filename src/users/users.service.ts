import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'Iván',
                password: 'ito959'
            },
            {
                userId: 2,
                username: 'Ines',
                password: 'secret'
            },
            {
                userId: 3,
                username: 'Juan',
                password: 'guess'
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        console.log('estoy ingresando a userService con ', username);
        return this.users.find(user => user.username === username);
    }
}
