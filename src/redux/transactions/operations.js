import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios';

// запит на отримання усіх транзакцій юзера - приклад відповіді:
// [
//     {
//         "id": "c38e8f42-81dc-41d7-89d9-af189a07f10c",
//         "transactionDate": "2024-01-10",
//         "type": "INCOME",
//         "comment": "salary",
//         "amount": 50000,
//         "balanceAfter": 50000,
//         "categoryId": "063f1132-ba5d-42b4-951d-44011ca46262",
//         "userId": "64d05270-b811-47bc-b860-4f41585cb1ae"
//     }
// ]

export const fetchAllTransactionsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/api/transactions');
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Використовуємо для отримання списку категорій (далі частово) -
// [
//     {
//         "id": "c9d9e447-1b83-4238-8712-edc77b18b739",
//         "name": "Main expenses",
//         "type": "EXPENSE"
//     },
//     {
//     "id": "063f1132-ba5d-42b4-951d-44011ca46262",
//     "name": "Income",
//     "type": "INCOME"
// }
// ]
export const fetchTransactionsСategoriesThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/api/transaction-categories');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, thunkApi) => {
    try {
      await api.delete(`/api/transactions/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// для додавання транзакції потрібен об'єкт такого виду -
// {
//   "transactionDate": "2024-01-10",
//   "type": "INCOME",
//   "categoryId": "063f1132-ba5d-42b4-951d-44011ca46262",
//   "comment": "haltura",
//   "amount": 15000
// }

// В результаті отримуємо таку дату
// {
//     "transactionDate": "2024-01-10",
//     "type": "INCOME",
//     "categoryId": "063f1132-ba5d-42b4-951d-44011ca46262",
//     "comment": "haltura",
//     "amount": 15000,
//     "balanceAfter": 65000,
//     "id": "92b376df-bd76-4c6e-ac32-7973547100b9",
//     "userId": "64d05270-b811-47bc-b860-4f41585cb1ae"
// }
export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (transaction, thunkApi) => {
    try {
      const { data } = await api.post('/api/transactions', transaction);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Для редагування транзакції потрібна така інфа -
// {
//   "transactionDate": "2024-01-10",
//   "type": "INCOME",
//   "categoryId": "063f1132-ba5d-42b4-951d-44011ca46262",
//   "comment": "haltura",
//   "amount": 5000
// }
// Редагування транзакції повертає нам таку дату -
// {
//     "id": "1a8ca083-b4d4-4d0e-a402-a62152ee2c28",
//     "transactionDate": "2024-01-10",
//     "type": "INCOME",
//     "comment": "haltura",
//     "amount": 5000,
//     "balanceAfter": 5000,
//     "categoryId": "063f1132-ba5d-42b4-951d-44011ca46262",
//     "userId": "64d05270-b811-47bc-b860-4f41585cb1ae"
// }

export const editTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (id, transaction, thunkApi) => {
    try {
      const { data } = await api.patch(`/api/transactions/${id}`, transaction);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);