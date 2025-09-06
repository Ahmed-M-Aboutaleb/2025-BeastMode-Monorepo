import { DeviceType } from "../types";

export interface RegisterPayload {
  full_name: string;
  password: string;
  password_confirmation: string;
  email: string;
  device_type: DeviceType;
  device_token?: string;
}