import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowerCreateInput = {
  following?: string | null;
  user?: UserWhereUniqueInput | null;
};
