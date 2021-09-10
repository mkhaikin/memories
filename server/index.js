import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use('/posts', postRoutes);

const port = process.env.PORT || 5000;

mongoose.connect(
    process.env.CONNECTION_DB_URI,
    {
        // poolSize:50,
        wtimeoutMS:2500,
        // useNewUrlParse: true
    })
.then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);iokl.p;,'