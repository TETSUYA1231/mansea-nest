import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Article } from './models/article.model';
import { Category } from './models/category.model';

const models = TypegooseModule.forFeature([User, Article, Category]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/mansea-data', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
