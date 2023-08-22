import express from "express";
import { BookRoutes } from "../modules/book/book.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/book",
    router: BookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
