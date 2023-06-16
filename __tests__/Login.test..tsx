/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginForm from '../src/components/LoginForm';

describe('LoginForm', () => {
  test('renders correctly', () => {
    const { getByLabelText, getByText } = render(
      <LoginForm
        isSuccess={undefined}
        handleFormSubmit={undefined}
        isLoading={undefined}
        isError={undefined}
        emailNotVerified={undefined}
      />
    );
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Sin Up');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  test('triggers handleFormSubmit on button press', () => {
    const mockHandleFormSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <LoginForm
        handleFormSubmit={mockHandleFormSubmit}
        isSuccess={undefined}
        isLoading={undefined}
        isError={undefined}
        emailNotVerified={undefined}
      />
    );
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Sin Up');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(submitButton);

    expect(mockHandleFormSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleFormSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    });
  });
});
