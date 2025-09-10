import {readFileSync} from "fs";

export default function readJsonPosts() {
  const posts = readFileSync("./db/posts.json");
  return posts;
}
