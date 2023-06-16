import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ChapaCheckoutScreen from '../src/components/ChapaCheckoutScreen';

describe('ChapaCheckoutScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<ChapaCheckoutScreen />);

    // Test for the presence of specific elements
    const nameLabel = getByText('Name');
    const emailLabel = getByText('Email');
    const phoneLabel = getByText('Phone Number');
    const accountNumberLabel = getByText('Account Number');
    const amountLabel = getByText('Amount');
    const currencyLabel = getByText('Currency');
    const payButton = getByText('Pay');
    const nameInput = getByPlaceholderText('Test Test');
    const emailInput = getByPlaceholderText('mtd@gmail.com');
    const phoneInput = getByPlaceholderText('0912983487');
    const accountNumberInput = getByPlaceholderText('1000234567890');
    const amountInput = getByPlaceholderText('499');

    // Assertions for the presence of elements
    expect(nameLabel).toBeDefined();
    expect(emailLabel).toBeDefined();
    expect(phoneLabel).toBeDefined();
    expect(accountNumberLabel).toBeDefined();
    expect(amountLabel).toBeDefined();
    expect(currencyLabel).toBeDefined();
    expect(payButton).toBeDefined();
    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(phoneInput).toBeDefined();
    expect(accountNumberInput).toBeDefined();
    expect(amountInput).toBeDefined();
  });

  it('calls handleOpenModal when Pay button is pressed', () => {
    const { getByText } = render(<ChapaCheckoutScreen />);
    const payButton = getByText('Pay');
    const handleOpenModalMock = jest.fn();

    // Assign the mocked function to the onPress event
    payButton.props.onPress = handleOpenModalMock;

    // Simulate button press
    fireEvent.press(payButton);

    // Verify that the handleOpenModal function was called
    expect(handleOpenModalMock).toHaveBeenCalled();
  });
});
