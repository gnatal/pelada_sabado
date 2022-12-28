export interface IUser {
  uuid: string;
  email: string;
  authProvider: string;
  role: string;
}

export function createEmptyUser(): IUser {
  const user: IUser = {
    uuid: '',
    email: '',
    authProvider: '',
    role: 'public',
  }
  return user
}