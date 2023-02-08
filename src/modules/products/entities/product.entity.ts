import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  details?: string | null;

  @Field(() => [String], { nullable: true })
  images: string[];

  @Field()
  price: number;

  @Field(() => [String])
  categories: string[];

  @Field(() => Boolean, { defaultValue: false })
  published?: boolean;

  // @Field(() => Int)
  // viewCount: number;

  @Field(() => User)
  seller: User;
}
