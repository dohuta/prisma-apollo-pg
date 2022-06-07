import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  metadata = "metadata",
  version = "version",
  id = "id",
  title = "title",
  content = "content",
  published = "published",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
