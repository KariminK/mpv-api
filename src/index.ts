import { exec } from "child_process";
import express, { RequestHandler } from "express";

const app = express();
const port = 3000;

const playVideo: RequestHandler<{ videoId: string }> = (req, res) => {
  const { videoId } = req.params;
  exec(`mpv https://youtu.be/${videoId}`, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send();
    }
  });
};

app.get("/:videoId", playVideo);

app.listen(port, () => {
  console.log("SERVER LISTENING! PORT: 3000");
});
