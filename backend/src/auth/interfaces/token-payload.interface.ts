import { Types } from 'mongoose';
import { Roles } from 'src/utils/decorators/role';

export interface TokenPayload {
  email: string;
  userId: Types.ObjectId;
  roles: Roles[];
}
