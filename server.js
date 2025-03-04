import express from "express";
import * as path from "path";
import { route } from "./app/routes/wilayah.route.js";
import cors from "cors";
const App = express();
const port = 5000;
App.use(cors());
App.use(express.json());
App.use('/api', route);
App.all('*', (req, res) => {
    res.status(404).json({
        "message": "Request failed with status code 404",
        "code": "ERR_BAD_REQUEST",
        "status": 404
    });
});
App.listen(port, () => console.log(`Server running on port ${port}`));
