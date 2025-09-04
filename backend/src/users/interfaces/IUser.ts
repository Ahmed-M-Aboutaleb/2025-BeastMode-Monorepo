import type { Types } from 'mongoose';
import type IProfile from './IProfile';

export default interface IUser {
  _id: Types.ObjectId;
  email: string;
  passwordHash: string;
  isActive: boolean;
  roles: string[];
  profile: IProfile;
}
