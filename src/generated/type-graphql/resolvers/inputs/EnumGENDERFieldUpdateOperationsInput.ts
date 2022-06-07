import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { GENDER } from "../../enums/GENDER";

@TypeGraphQL.InputType("EnumGENDERFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumGENDERFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => GENDER, {
    nullable: true
  })
  set?: "male" | "female" | "other" | undefined;
}
