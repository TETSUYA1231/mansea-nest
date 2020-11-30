import { Article } from '@libs/db/models/article.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Article,
})
@Controller('articles')
@ApiTags('文章')
export class ArticlesController {
  constructor(
    @InjectModel(Article)
    private readonly model: ReturnModelType<typeof Article>,
  ) {}
}
