import app from "./server";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT ?? 5500;

app.listen(port, () => {
  console.log(`hello on http://localhost:${port}`);
});
