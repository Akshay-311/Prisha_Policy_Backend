import express from 'express';
import indexRouter from "./routes/index";
import cors from 'cors';
import path from 'path';

const app = express();

const PORT = 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",indexRouter);



app.listen(PORT, ()=> {
    console.log(`App Listening at port ${PORT}`);
})