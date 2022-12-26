export interface IPelada {
  uid?: string;
  dia: string;
  hora: string;
  local?: string;
}

export const createEmptyPelada = (): IPelada => {
  return {
    uid: '',
    dia: '',
    hora: '',
    local: ''
  }
}