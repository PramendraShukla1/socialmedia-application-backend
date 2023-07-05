import express from "express"
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js"
import {verifyToken} from "../middleware/auth.js"

const router = express.Router();

//get own profile or friend's profile
router.get("/:id", verifyToken, getUser)
router.get("/:id/friends",verifyToken,getUserFriends)

//update or remove friends
router.patch("/:id/:friendId",verifyToken,addRemoveFriend);

export default router;
