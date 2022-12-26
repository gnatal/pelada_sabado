import { createEmptyPelada, IPelada } from './Pelada';
import { createEmptyUser, IUser } from './User';

export interface IListaPelada {
  pelada?: IPelada,
  users?: IUser[],
  uid: string;
}

export const createEmptyListaPelada = (): IListaPelada => {
  return {
    uid: '',
    users: ([] as IUser[]),
    pelada: createEmptyPelada()
  };
}