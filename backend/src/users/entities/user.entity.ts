import { SchemaTypes } from 'mongoose';
import type { HydratedDocument, Types } from 'mongoose';
import type IProfile from '../interfaces/IProfile';
import type IUser from '../interfaces/IUser';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Roles } from '../../utils/decorators/role';

@Schema({ collection: 'users', timestamps: true })
export class User implements IUser {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;
  @Prop({ required: true, type: String, unique: true })
  email: string;
  // Hide password hash from queries by default
  @Prop({ required: true, type: String, select: false })
  passwordHash: string;
  @Prop({ required: false, type: Boolean, default: true })
  isActive: boolean;
  @Prop({ required: false, type: [String], default: [Roles.USER] })
  roles: string[];
  @Prop({ required: true, type: Object })
  profile: IProfile;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
