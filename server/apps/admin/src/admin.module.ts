import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { CategorysModule } from './categorys/categorys.module';

@Module({
  imports: [DbModule, UsersModule, ArticlesModule, CategorysModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
