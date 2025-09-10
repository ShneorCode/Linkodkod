import express from 'express';
import getAllPostsController from '../controllers/postsController.js'


const router = express.Router();



router.get('/', getAllPostsController);

export default router;
