import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // include: [], // This is for scanning specific modules only, instead of the whole app.
      driver: ApolloDriver,
      // debug: true,
      // playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    UsersModule,
    ProductsModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
