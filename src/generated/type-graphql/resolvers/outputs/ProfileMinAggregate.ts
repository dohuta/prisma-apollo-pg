import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { GENDER } from "../../enums/GENDER";

@TypeGraphQL.ObjectType("ProfileMinAggregate", {
  isAbstract: true
})
export class ProfileMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  version!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstname!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastname!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullname!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  birthday!: Date | null;

  @TypeGraphQL.Field(_type => GENDER, {
    nullable: true
  })
  gender!: "male" | "female" | "other" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
