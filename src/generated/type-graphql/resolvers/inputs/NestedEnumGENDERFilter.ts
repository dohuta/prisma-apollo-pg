import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { GENDER } from "../../enums/GENDER";

@TypeGraphQL.InputType("NestedEnumGENDERFilter", {
  isAbstract: true
})
export class NestedEnumGENDERFilter {
  @TypeGraphQL.Field(_type => GENDER, {
    nullable: true
  })
  equals?: "male" | "female" | "other" | undefined;

  @TypeGraphQL.Field(_type => [GENDER], {
    nullable: true
  })
  in?: Array<"male" | "female" | "other"> | undefined;

  @TypeGraphQL.Field(_type => [GENDER], {
    nullable: true
  })
  notIn?: Array<"male" | "female" | "other"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGENDERFilter, {
    nullable: true
  })
  not?: NestedEnumGENDERFilter | undefined;
}
