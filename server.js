import { app } from "./app.js";
import 'dotenv/config'

const PORT = process.env.PORT;
console.log(process.env.PORT)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
