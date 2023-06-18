import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DonateButton from '../src/components/DonateButton';

describe('DonateButton', () => {
  it('renders correctly', () => {
    const { getByText } = render(<DonateButton />);
    const donateButton = getByText('Donate');
    expect(donateButton).toBeDefined();
  });

  it('calls onPress event handler when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<DonateButton onPress={onPressMock} />);
    const donateButton = getByText('Donate');
    fireEvent.press(donateButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});
