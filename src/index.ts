import "reflect-metadata";
import {
  Resolver,
  Query,
  buildSchema,
  FieldResolver,
  Ctx,
  Root,
} from "type-graphql";
import { ApolloServer } from "apollo-server";
import path from "path";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";

import { PrismaClient } from "./generated/client";

import {
  User,
  UserRelationsResolver,
  UserCrudResolver,
  Profile,
  ProfileRelationsResolver,
  ProfileCrudResolver,
} from "./generated/type-graphql";

interface Context {
  prisma: PrismaClient;
}

// custom resolver for custom business logic using Prisma Client
@Resolver((of) => User)
class CustomUserResolver {
  @Query((returns) => User, { nullable: true })
  async bestUser(@Ctx() { prisma }: Context): Promise<User | null> {
    return await prisma.user.findFirst({
      where: { email: "bob@prisma.io" },
    });
  }
}

async function main() {
  const schema = await buildSchema({
    resolvers: [
      CustomUserResolver,
      UserRelationsResolver,
      UserCrudResolver,
      ProfileRelationsResolver,
      ProfileCrudResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "./generated/schema.graphql"),
    validate: false,
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
