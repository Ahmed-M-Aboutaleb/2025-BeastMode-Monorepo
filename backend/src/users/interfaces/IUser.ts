import type { Types } from 'mongoose';
import type IProfile from './IProfile';
import { Roles } from 'src/utils/decorators/roles';

export default interface IUser {
  _id: Types.ObjectId;
  email: string;
  passwordHash: string;
  isActive: boolean;
  roles: Roles[];
  profile: IProfile;
}

export type IUserWithoutHash = Omit<IUser, 'passwordHash'>;
