// auth.types.ts
import { DeviceType } from "./types";
import { Profile } from "./user.types";

// Base payload for both login & register
interface AuthBase {
  email: string;
  password: string;
}

// export interface LoginPayload extends AuthBase {}
export type LoginPayload = AuthBase;

export interface RegisterPayload extends AuthBase {
  password_confirmation: string;
  full_name: string;
  device_type?: DeviceType;  
  device_token?: string;     
  profile?: Profile;         
}
