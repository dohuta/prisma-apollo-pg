import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGENDERFilter } from "../inputs/NestedEnumGENDERFilter";
import { NestedEnumGENDERWithAggregatesFilter } from "../inputs/NestedEnumGENDERWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { GENDER } from "../../enums/GENDER";

@TypeGraphQL.InputType("EnumGENDERWithAggregatesFilter", {
  isAbstract: true
})
export class EnumGENDERWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumGENDERWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumGENDERWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGENDERFilter, {
    nullable: true
  })
  _min?: NestedEnumGENDERFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGENDERFilter, {
    nullable: true
  })
  _max?: NestedEnumGENDERFilter | undefined;
}
