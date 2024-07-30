import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  createdAt?: SortOrder;
  following?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
