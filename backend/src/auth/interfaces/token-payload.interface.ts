import { Types } from 'mongoose';
import { Roles } from 'src/utils/decorators/roles';

export interface TokenPayload {
  email: string;
  userId: Types.ObjectId;
  roles: Roles[];
}
