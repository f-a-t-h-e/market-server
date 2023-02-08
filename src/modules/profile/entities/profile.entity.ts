import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Profile {
  @Field(() => Int)
  id: number;

  @Field(() => String, { defaultValue: 'customer' })
  type: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => User)
  user: User;

  @Field(() => [Product])
  products: Product[];
}
