import express from "express";
import { readFile } from "fs";

const app = express();

app.use("/api/posts", (req, res) => {
  try {
    readFile("./db/posts.json", function (err, data) {
      if (err) throw err;
      const posts = JSON.parse(data);
      res.status(200).send(posts);
    });
  } catch (error) {
    console.error("Failed to pull posts.", error);
  }
});

// app.use("/api/get-post", getPostById);

// app.use("api/create-post", createPost)

// app.use("api/update-post", UpdatePost);

// app.use("api/delete-post", DeletePost);

app.listen(3005, () => {
  console.log("Server running on port 3005");
});
