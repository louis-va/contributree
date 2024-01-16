import express from 'express';
import controller from '../controllers/user.controller'

const router = express.Router();

router.get("/:id",
  controller.getUser
);

export default router;