import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);

    res.send({
      success: true,
      message: "Post Created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPostController = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await PostService.getAllPost(options);

    res.send({
      success: true,
      message: "Post fetch successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPostController,
  getAllPostController,
};
