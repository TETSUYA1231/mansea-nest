import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('满蹊网站后台管理API')
    .setDescription('后台管理界面调用服务端API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log(`http://localhost:3000/api-docs`);
}
bootstrap();
