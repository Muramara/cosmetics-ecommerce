import { User } from '../types';

export const users: User[] = [
  {
    id: '1',
    email: 'sophie@example.com',
    name: 'Sophie Anderson',
    wishlist: ['1', '6'],
    orders: [
      {
        id: 'ord-001',
        items: [],
        total: 120,
        date: '2023-04-15',
        status: 'delivered'
      }
    ]
  },
  {
    id: '2',
    email: 'michael@example.com',
    name: 'Michael Johnson',
    wishlist: ['7'],
    orders: []
  }
];

export const findUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};