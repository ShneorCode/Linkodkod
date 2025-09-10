import express from 'express';
import {getAllPostsController, createPostController} from '../controllers/postsController.js'

const router = express.Router();



router.get('/', getAllPostsController);
router.post('/', createPostController);


export default router;
