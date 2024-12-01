import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')

	const config = new DocumentBuilder()
		.setTitle('Movie Website(Anime)')
		.setDescription('The movie website desription')
		.setVersion('1.0')
		.addTag('movie')
		.build()
	const documentFactory = () => SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('docs', app, documentFactory)
	app.enableCors()

	await app.listen(4200)
}
bootstrap()
