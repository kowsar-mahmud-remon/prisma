import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoBD = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoBD(req.body);
    res.send({
      success: true,
      message: "User Created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);

    res.send({
      success: true,
      message: "Profile Created/Updated successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUser();

    res.send({
      success: true,
      message: "Data fetch successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));

    res.send({
      success: true,
      message: "Data fetch successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoBD,
  insertOrUpdateProfile,
  getUser,
  getSingleUser,
};
