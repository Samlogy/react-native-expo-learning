import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Enter a valid Email').required('Email required'),
  password: yup
    .string()
    .min(8, 'Password min length 8')
    .max(32, 'Password max length 32')
    .required('Password required'),
});
