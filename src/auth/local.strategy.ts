import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { UnauthorizedException, Injectable } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy (Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
        console.log('ejecutando contructor de LocalStrategy');
        
    }

    async validate(username: string, password: string): Promise<any> {       
        console.log('estoy ingresando al validate de localStrategy con ' + username + '/' + password);
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}