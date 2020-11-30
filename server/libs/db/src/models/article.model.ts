import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Article {
  @ApiProperty({ description: '文章标题', example: '文章标题' })
  @prop()
  title: string;

  @ApiProperty({ description: '作者', example: '作者名称' })
  @prop()
  author: string;

  @ApiProperty({ description: '封面图', example: '封面图片地' })
  @prop()
  cover: string;

  @ApiProperty({ description: '文章内容', example: '文章内容富文本' })
  @prop()
  content: string;
}
