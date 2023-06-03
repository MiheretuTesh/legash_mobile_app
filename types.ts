export interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  gender: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface ConfirmPasswordResetFormValues {
  newPassword: string;
  confirmNewPassword: string;
}

export interface ChangePasswordFormValues {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type UserTableRow = {
  id: number;
  name: string;
  email: string;
  role: string;
  updated_at: string;
  edited_by: string;
};

export type AssetTableRow = {
  id: number;
  building: string;
  location: string;
  details: string;
  assumptions: string;
  updated_at: string;
  edited_by: string;
  users: number[];
  created_by?: number;
};

export type DraftFormsTableRow = {
  id: number;
  name: string;
  building: string;
  lastEditedAt: string;
};

export type SubmittedFormsTableRow = {
  id: number;
  name: string;
  building: string;
  submittedAt: string;
};
