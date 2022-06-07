import * as TypeGraphQL from "type-graphql";

export enum GENDER {
  male = "male",
  female = "female",
  other = "other"
}
TypeGraphQL.registerEnumType(GENDER, {
  name: "GENDER",
  description: undefined,
});
