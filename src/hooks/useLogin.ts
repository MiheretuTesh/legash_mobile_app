import { useMutation, useQuery } from 'react-query';
import { login } from '../api/AuthenticationService';
import { RegistrationFormValues } from '../../types';

export const useLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess: (x: any, values: RegistrationFormValues) => void;
  onError: (error: any) => void;
}) => {
  return useMutation(login, { onSuccess, onError });
};
