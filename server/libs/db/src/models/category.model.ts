import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Article } from './article.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Category {
  @prop()
  name: string;

  @prop({ itemsRef: 'Article' })
  articles: Ref<Article>[];
}
