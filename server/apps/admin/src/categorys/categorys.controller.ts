import { Category } from '@libs/db/models/category.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
  model: Category,
})
@ApiTags('目录')
@Controller('categorys')
export class CategorysController {
  constructor(
    @InjectModel(Category)
    private readonly model: ReturnModelType<typeof Category>,
  ) {}
}
