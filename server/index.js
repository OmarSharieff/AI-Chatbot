import express from "express";
import cors from "cors";
import ImageKit from "imagekit";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: process.env.CLIENT_URL,
}))

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
})

app.get("/api/upload", (req,res)=> {
  // res.send("it works!");
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});