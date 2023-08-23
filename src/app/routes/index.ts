import express from 'express';
import { BookRoutes } from '../modules/book/book.router';
import { UserRoutes } from '../modules/user/user.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/book',
    router: BookRoutes,
  },
  {
    path: '/user',
    router: UserRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.router));

export default router;
