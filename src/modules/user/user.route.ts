import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.insertIntoBD);

router.post("/profile", UserController.insertOrUpdateProfile);

router.get("/", UserController.getUser);

router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
