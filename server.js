import  express  from "express";
import * as path from "path";
import { route } from "./app/routes/wilayah.route.js";
import cors from "cors"
const App = express();
const port = 9001;
App.use(cors());
App.use(express.json());
App.use('/api',route);
App.listen(port, () => console.log(`Server running on port ${port}`));
