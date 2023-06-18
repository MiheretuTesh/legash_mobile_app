import React from 'react';
import { render } from '@testing-library/react-native';
import HistoryCard from '../src/components/HistoryCard';

describe('HistoryCard', () => {
  const campaign = {
    campaignTitle: 'Test Campaign',
    coverImage: 'https://example.com/image.jpg',
    targetFunding: 10000,
    currentFundedAmount: 5000,
  };

  it('renders campaign title correctly', () => {
    const { getByText } = render(<HistoryCard campaign={campaign} />);
    const campaignTitle = getByText('Test Campaign');
    expect(campaignTitle).toBeDefined();
  });

  it('renders target amount correctly', () => {
    const { getByText } = render(<HistoryCard campaign={campaign} />);
    const targetAmount = getByText('10,000');
    expect(targetAmount).toBeDefined();
  });

  it('renders raised amount correctly', () => {
    const { getByText } = render(<HistoryCard campaign={campaign} />);
    const raisedAmount = getByText('5,000 birr');
    expect(raisedAmount).toBeDefined();
  });

  it('renders remaining amount correctly', () => {
    const { getByText } = render(<HistoryCard campaign={campaign} />);
    const remainingAmount = getByText('5,000 birr');
    expect(remainingAmount).toBeDefined();
  });
});
