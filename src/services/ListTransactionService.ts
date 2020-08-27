import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Response {
  transactions: Transaction[];
  balance: Balance;
}

class ListTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Response {
    const balance = this.transactionsRepository.getBalance();
    const transactions = {
      transactions: this.transactionsRepository.all(),
      balance,
    };

    return transactions;
  }
}

export default ListTransactionService;
