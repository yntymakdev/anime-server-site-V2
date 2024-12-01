import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { RefreshTokenDto } from './dto/refresh-token.dto'

@ApiTags('Auth') // Категория в Swagger UI
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	@ApiOperation({ summary: 'Register a new user' }) // Описание метода
	@ApiBody({ type: AuthDto }) // Указание DTO
	async register(@Body() dto: AuthDto) {
		return this.authService.register(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	@ApiOperation({ summary: 'Log in a user' }) // Описание метода
	@ApiBody({ type: AuthDto }) // Указание DTO
	async login(@Body() dto: AuthDto) {
		return this.authService.login(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login/access-token')
	@ApiOperation({ summary: 'Get new access tokens using refresh token' }) // Описание метода
	@ApiBody({
		type: RefreshTokenDto,
		description: 'Provide a valid refresh token'
	}) // Указание DTO
	async getNewTokens(@Body() dto: RefreshTokenDto) {
		return this.authService.getNewTokens(dto.refreshToken)
	}
}
