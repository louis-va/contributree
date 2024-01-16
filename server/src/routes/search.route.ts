import express from 'express';
import controller from '../controllers/search.controller'

const router = express.Router();

router.get("/:query",
  controller.search
);

export default router;