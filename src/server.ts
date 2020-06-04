import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("User List");

  response.json(["ol", "ksjd", "kshda", "abob", "ushuhs"]);
});

app.listen(3335);
