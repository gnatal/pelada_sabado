import * as yup from 'yup';

const loginSchema = yup.object().shape({
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 char long'),
  email: yup.string()
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Emails must be xxxx@domain.xxxx')
    .required('Email is required'),
});

const forgotPasswordSchema = yup.object().shape({
  email: yup.string()
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Emails must be xxxx@domain.xxxx')
    .required('Email is required'),
});

const singupSchema = yup.object().shape({
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 char long'),
  email: yup.string()
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Emails must be xxxx@domain.xxxx')
    .required('Email is required'),
  confirm_password: yup.string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords don\'t match'),
});

export default {
  loginSchema,
  forgotPasswordSchema,
  singupSchema,
};
