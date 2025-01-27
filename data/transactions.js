const transactions = {
    ACC123456: [
      {
        transactionId: "txn1",
        type: "deposit",
        amount: 500.0,
        date: "2025-01-24T10:05:00Z"
      },
      {
        transactionId: "txn2",
        type: "withdraw",
        amount: 200.0,
        date: "2025-01-24T11:00:00Z"
      }
    ],
    ACC987654: [
      {
        transactionId: "txn1",
        type: "deposit",
        amount: 1000.0,
        date: "2025-01-23T09:30:00Z"
      },
      {
        transactionId: "txn2",
        type: "withdraw",
        amount: 500.0,
        date: "2025-01-24T10:45:00Z"
      },
      {
        transactionId: "txn3",
        type: "deposit",
        amount: 2000.0,
        date: "2025-01-24T10:55:00Z"
      }
    ],
    ACC112233: [
      {
        transactionId: "txn1",
        type: "withdraw",
        amount: 50.0,
        date: "2025-01-23T14:10:00Z"
      },
      {
        transactionId: "txn2",
        type: "deposit",
        amount: 100.0,
        date: "2025-01-24T12:30:00Z"
      },
      {
        transactionId: "txn3",
        type: "withdraw",
        amount: 25.0,
        date: "2025-01-24T13:15:00Z"
      }
    ],
    ACC667788: [
      {
        transactionId: "txn1",
        type: "deposit",
        amount: 5000.0,
        date: "2025-01-20T08:20:00Z"
      },
      {
        transactionId: "txn2",
        type: "deposit",
        amount: 1000.0,
        date: "2025-01-22T10:15:00Z"
      },
      {
        transactionId: "txn3",
        type: "withdraw",
        amount: 500.0,
        date: "2025-01-24T14:00:00Z"
      }
    ]
  };
  
  module.exports = transactions;