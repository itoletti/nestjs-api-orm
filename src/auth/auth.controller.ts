import { Controller, Request, UseGuards, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        console.log('estoy ingresando a login en auth.controller');
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        console.log('estoy ingresando a profile en auth.controller ');
        return req.user;
    }    
}
