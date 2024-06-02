import { Order } from '../../src/types';
import products from './products';
import dayjs from 'dayjs';

const now = dayjs();

const orders: Order[] = [
  {
    id: 23123,
    created_at: now.subtract(1, 'hour').toISOString(),
    total: 31.4,
    status: 'Cooking',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 23123,
        size: 'M',
        quantity: 2,
        product_id: products[0].id,
        products: products[0],
      },
      {
        id: 2,
        order_id: 23123,
        size: 'L',
        quantity: 1,
        product_id: products[1].id,
        products: products[1],
      },
    ],
  },
  {
    id: 32145,
    created_at: now.subtract(3, 'days').toISOString(),
    total: 11.4,
    status: 'Delivered',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 32145,
        size: 'M',
        quantity: 2,
        product_id: products[3].id,
        products: products[3],
      },
    ],
  },
  {
    id: 23445,
    created_at: now.subtract(3, 'weeks').toISOString(),
    total: 11.4,
    status: 'Delivered',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 23445,
        size: 'M',
        quantity: 1,
        product_id: products[3].id,
        products: products[3],
      },
      {
        id: 2,
        order_id: 23445,
        size: 'M',
        quantity: 1,
        product_id: products[7].id,
        products: products[7],
      },
      {
        id: 3,
        order_id: 23445,
        size: 'L',
        quantity: 1,
        product_id: products[8].id,
        products: products[8],
      },
    ],
  },
];

export default orders;
