import express from "express";
import routerPosts from "./routes/postsRoutes.js";
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/api/posts",routerPosts);

app.listen(3005, () => {
  console.log("Server running on port 3005");
});
