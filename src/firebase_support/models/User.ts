export interface IUser {
  uuid: string;
  email: string;
  authProvider: string;
  role: string;
  mensalista: boolean;
}

export function createEmptyUser(): IUser {
  const user: IUser = {
    uuid: '',
    email: '',
    authProvider: '',
    role: 'public',
    mensalista: false
  }
  return user
}