import { FollowerUpdateManyWithoutUsersInput } from "./FollowerUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  followers?: FollowerUpdateManyWithoutUsersInput;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string;
};
