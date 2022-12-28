export interface IUser {
  uuid: string;
  email: string;
  authProvider: string;
  name?: string;
  role: string;
}

export function createEmptyUser(): IUser {
  const user: IUser = {
    uuid: '',
    email: '',
    name: '',
    authProvider: '',
    role: 'public',
  }
  return user
}