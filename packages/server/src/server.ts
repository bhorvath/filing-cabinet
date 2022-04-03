import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Filing cabinet server started at http://localhost:${port}`);
});
