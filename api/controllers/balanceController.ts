import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import Balance from '../models/balanceModel';
import { Request, Response } from 'express';

interface BalanceProps {
  user: string;
  balance: number;
}

const getTotalBalance = (balances: BalanceProps[]) => {
  let totalBalance = 0;

  if (balances) {
    for (let bal of balances) {
      totalBalance += bal.balance;
    }
  }

  return totalBalance;
};

const createBalance = asyncHandler(async (req: Request, res: Response) => {
  const { user, amount } = req.body;

  const balance = await Balance.create({
    user,
    balance: amount,
  });

  if (balance) {
    console.log(user);
    res.status(201).json({ balance: balance.balance, user: user });
  } else {
    res.status(400);
    throw new Error('Invalid balance data');
  }
});

const getUserBalance = asyncHandler(
  async (req: Request | any, res: Response) => {
    try {
      const balance = await Balance.find({ user: req.params.id });
      let totalBalance = getTotalBalance(balance);
      let lastMovements = balance.slice(-5).map((mov) => {
        return {
          balance: mov.balance,
          date: mov.createdAt,
        };
      });

      res.status(200).json({
        currentBalance: totalBalance,
        lastMovements: lastMovements,
      });
    } catch (err: any) {
      console.log(err);
      res.status(400);
    }
  }
);

const sendMoney = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { sender, receiver, amount } = req.body;
    const userReceiver = await User.findOne({ email: receiver });

    const senderBalance = await Balance.find({ user: sender });
    const senderTotalBalance = getTotalBalance(senderBalance);

    if (senderTotalBalance >= amount) {
      await Balance.create({
        user: sender,
        balance: -amount,
      });

      await Balance.create({
        user: userReceiver._id,
        balance: amount,
      });
    }

    res.status(200).json({ message: 'Money sent', receiver });
  } catch (err: any) {
    console.log(err);
    res.status(400);
  }
});

export { getUserBalance, createBalance, sendMoney };
