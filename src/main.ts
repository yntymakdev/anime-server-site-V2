import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Устанавливаем глобальный префикс для API
	app.setGlobalPrefix('api')

	// Включаем CORS
	app.enableCors()

	// Обслуживание статических файлов из папки 'public'
	app.useStaticAssets(join(__dirname, '..', 'public'))

	await app.listen(4200)
}

bootstrap()
