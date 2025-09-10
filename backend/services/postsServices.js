import { readFileSync, writeFileSync } from "fs";

export function readJsonPosts() {
  const posts = readFileSync("./db/posts.json");
  return posts;
}

export function addJsonPost(post) {
  const posts_old = readFileSync("./db/posts.json");
  const parsedData = JSON.parse(posts_old);
  parsedData.push(post);
  writeFileSync("./db/posts.json", JSON.stringify(parsedData));
  return parsedData;
}
