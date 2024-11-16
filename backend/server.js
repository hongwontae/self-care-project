// express 설정
const express = require('express');
const app = express();

// Router
const TodoRouter = require('./router/TodoRouter');
const DateRouter = require('./router/DateRouter');
const WotRouter = require('./router/WayOfThinkingRouter');

// DB
const DB = require('./util/DB');
const TodoModel = require('./model/TodoModel');
const WotModel = require('./model/WayOfThinkingModel');

// cookie 
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// cors
app.use((req , res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
    next();
})

// json 파싱   
app.use(express.json());

// middle-ware
app.use('/todo', TodoRouter);
app.use('/date', DateRouter);
app.use('/wot', WotRouter);


// error middleware
app.use((error, req, res ,next)=>{
    if(error.location === 'controller'){
        return res.json({
            status : error.status,
            message : error.message,
        })
    }

    return res.json({
        error : error
    })
})


DB.sync().then(()=>{
    app.listen(7070, ()=>{
        console.log('Hello-world');
        console.log('Server Running');
    })
})


