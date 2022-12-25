import * as yup from 'yup';

export const peladaSchema = yup.object().shape({
  dia: yup.string()
    .required('Dia é obrigatório'),
  hora: yup.string()
    .matches(/\d\d:\d\d/, 'A hora dever do tipo HH:MM')
    .required('A hora é obrigatória'),
});

