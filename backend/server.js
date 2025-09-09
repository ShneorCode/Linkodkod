import express from "express";
import { promises as fs } from 'fs';
// import Page from './uti';



const app = express();

app.use("/api/create-post", () => {
  console.log("");
});

// app.get("/api/get-all-post", Page)

app.use("/api/get-post:id", () => {
  console.log("");
});

app.use("api/update-post", () => {
  console.log("");
});

app.use("api/delete-post", () => {
  console.log("");
});

app.listen(3005, () => {
  console.log("Server running on port 3005");
});
