import express from "express";  
import { addData, getData } from "../controllers/cosmos.js";

const router = express.Router();

router.route("/cosmos/add").post(addData);
router.route("/cosmos/get").get(getData)

export default router;


