import * as TypeGraphQL from "type-graphql";

export enum ProfileScalarFieldEnum {
  metadata = "metadata",
  version = "version",
  id = "id",
  firstname = "firstname",
  lastname = "lastname",
  fullname = "fullname",
  birthday = "birthday",
  gender = "gender",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});
