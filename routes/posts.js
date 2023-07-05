import express from "express";
import {getFeedPosts,getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";



const router = express.Router();

//Get user posts and get friends posts
router.get("/",verifyToken,getFeedPosts);
router.get("/:userId/posts", verifyToken,getUserPosts);

//Like user's post
router.patch("/:id/like", verifyToken,likePost);

export default router;