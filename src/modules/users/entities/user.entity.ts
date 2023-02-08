import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Profile } from '../../profile/entities/profile.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'The unique id (index)' })
  id: number;

  @Field()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string | null;

  @Field(() => Profile, { nullable: true })
  profile?: Profile | null;
}
