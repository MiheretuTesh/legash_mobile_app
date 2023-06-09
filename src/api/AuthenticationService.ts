import { LoginFormValues, RegistrationFormValues } from '../../types';
// import {transformRoleName} from '../utils/functions';
import AxiosInstance from './AxiosInstance';

export const register = (obj: RegistrationFormValues) => {
  return AxiosInstance.post('auth/signup', obj);
};

export const login = (obj: LoginFormValues) => {
  return AxiosInstance.post('auth/login', {
    email: obj.email,
    password: obj.password,
  });
};

export const verifyEmail = (obj: {
  email: string;
  verificationCode: string;
}) => {
  return AxiosInstance.post('users/verification/verify-email/', {
    email: obj.email,
    verification_code: obj.verificationCode,
  });
};

export const getCode = (obj: { email: string }) => {
  return AxiosInstance.post('users/verification/get-code/', {
    email: obj.email,
  });
};
