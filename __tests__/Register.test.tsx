/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterForm from '../src/components/RegisterForm';

describe('RegisterForm', () => {
  test('renders correctly', () => {
    const { getByLabelText, getByText } = render(
      <RegisterForm
        handleFormSubmit={undefined}
        isLoading={undefined}
        isSuccess={undefined}
        isError={undefined}
      />
    );
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');
    const phoneNumberInput = getByLabelText('Phone Number');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');
    const signUpButton = getByText('Sin Up');

    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
    expect(phoneNumberInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmPasswordInput).toBeTruthy();
    expect(signUpButton).toBeTruthy();
  });

  test('triggers handleFormSubmit on button press', () => {
    const mockHandleFormSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <RegisterForm
        handleFormSubmit={mockHandleFormSubmit}
        isLoading={undefined}
        isSuccess={undefined}
        isError={undefined}
      />
    );
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');
    const phoneNumberInput = getByLabelText('Phone Number');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');
    const signUpButton = getByText('Sin Up');

    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    fireEvent.changeText(phoneNumberInput, '1234567890');
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.changeText(confirmPasswordInput, 'password');
    fireEvent.press(signUpButton);

    expect(mockHandleFormSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleFormSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '1234567890',
      email: 'test@example.com',
      password: 'password',
      confirmPassword: 'password',
      dateOfBirth: expect.any(Date),
      role: '643fcc7d9cbbe5517bf42776',
      gender: 'Male',
    });
  });
});
