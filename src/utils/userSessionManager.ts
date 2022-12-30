import { createEmptyUser, IUser } from 'firebase_support/models/User';

export const getUser = () => {
  const jsonUser = sessionStorage.getItem('currentUser')
  if (jsonUser)
    return (JSON.parse(jsonUser) as IUser);
  return createEmptyUser();
}