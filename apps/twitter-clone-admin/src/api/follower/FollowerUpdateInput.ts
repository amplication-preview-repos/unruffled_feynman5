import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowerUpdateInput = {
  following?: string | null;
  user?: UserWhereUniqueInput | null;
};
