import { Controller, Get , Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {

    // Get /api/auth/login
    // this is the route the user will visite to authentificate    
    @Get('login')
    login() {}

    @Get('redirect')
    redirect(@Res() res: Response) {
        res.send(200);
    }

    @Get('logout')
    logout() {}
}
