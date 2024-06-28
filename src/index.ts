import { app } from "./app";
import { config } from "./config/config";
import { ConnectDB } from "./db/database";
const startServer = async () => {
  try {
    ConnectDB()
      .then(() => {
        const port = config.port;
        app.listen(port, () => {
          console.log(
            `server is running at ${port}. Server connect with mongodb database`
          );
        });
      })
      .catch((err) => {
        console.log(
          `server can't connect with database error : ${err.message}`
        );
      });
  } catch (error: any) {
    console.log(`server error: ${error.message}`);
  }
};
startServer();