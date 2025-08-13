import express from "express";
import * as path from "path";
import { route } from "./app/routes/wilayah.route.js";
import cors from "cors";
import { routePrefix, port as portAddress} from "./app/utils/route.utils.js";
const App = express();
const port = portAddress|| 5000; // Default to 5000 if portAddress is not defined
App.use(cors());
App.use(express.json());
App.use(`/${routePrefix}`, route);
App.all('*', (req, res) => {
    res.status(404).json({
        "message": "Request failed with status code 404",
        "code": "ERR_BAD_REQUEST",
        "status": 404
    });
});
App.listen(port, () => console.log(`Server running on port ${port}`));
