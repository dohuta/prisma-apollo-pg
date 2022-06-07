import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  metadata = "metadata",
  version = "version",
  id = "id",
  username = "username",
  email = "email",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
