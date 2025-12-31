// Please refer to the README.md for the issues identified and assumptions made.

import React, { useMemo } from 'react';

// 1. Defined missing Interfaces
interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

// Added children to Props to fix the TS error
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

// 2. Mocking external dependencies
const useWalletBalances = () => []; 
const usePrices = (): Record<string, number> => ({});
const WalletRow = (props: any) => <div {...props} />;
const classes = { row: 'wallet-row' };

// 3. Optimized Priority Function
const getPriority = (blockchain: string): number => {
  const priorities: Record<string, number> = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };
  return priorities[blockchain] ?? -99;
};

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const formattedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        const priority = getPriority(balance.blockchain);
        return priority > -99 && balance.amount > 0;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        return getPriority(rhs.blockchain) - getPriority(lhs.blockchain);
      })
      .map((balance: WalletBalance) => ({
        ...balance,
        formatted: balance.amount.toFixed(),
      }));
  }, [balances]); // prices removed here as it doesn't affect sorting/filtering

  return (
    <div {...rest}>
      {formattedBalances.map((balance: FormattedWalletBalance) => {
        const usdValue = (prices[balance.currency] ?? 0) * balance.amount;
        return (
          <WalletRow
            className={classes.row}
            key={`${balance.blockchain}-${balance.currency}`}
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.formatted}
          />
        );
      })}
      {children}
    </div>
  );
};

export default WalletPage;