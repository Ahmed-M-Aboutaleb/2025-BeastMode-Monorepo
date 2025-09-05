import IProfile from 'src/users/interfaces/IProfile';

export interface IAuthResponse {
  access_token: string;
  profile: IProfile;
}
