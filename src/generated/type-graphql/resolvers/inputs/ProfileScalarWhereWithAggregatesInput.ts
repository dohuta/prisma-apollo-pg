import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumGENDERWithAggregatesFilter } from "../inputs/EnumGENDERWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProfileScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProfileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter, {
    nullable: true
  })
  metadata?: JsonNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  fullname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  birthday?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGENDERWithAggregatesFilter, {
    nullable: true
  })
  gender?: EnumGENDERWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
