import express from 'express';
import { BookRoutes } from '../modules/book/book.router';
import { UserRoutes } from '../modules/user/user.router';
import { ReadingListRoutes } from '../modules/readingList/readingList.router';
import { WishListRoutes } from '../modules/wishList/wishList.router';

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
  {
    path: '/reading-list',
    router: ReadingListRoutes,
  },
  {
    path: '/wish-list',
    router: WishListRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.router));

export default router;
