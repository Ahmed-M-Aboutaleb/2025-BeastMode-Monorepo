import type IBodyMeasurements from './IBodyMeasurements';

export enum Sex {
  Male = 'Male',
  Female = 'Female',
}

export default interface IProfile {
  firstName: string;
  lastName: string;
  picture?: string;
  bio?: string;
  fitnessGoals?: string[];
  isPublic?: boolean;
  sex: Sex;
  birthDate: Date;
  bodyMeasurements?: IBodyMeasurements;
}
