import { User } from "../user/User";

export type Follower = {
  createdAt: Date;
  following: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
