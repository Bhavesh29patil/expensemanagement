// require express for setting up the express server
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');
// set up the port number

// importing the DataBase
dotenv.config();
connectDb()

// importng the Schema For tasks
const  Task  = require('./models/task');

// using express
const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// using static files
app.use(express.static("./views"));
// to use encrypted data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// rendering the App Page
app.get('/', function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render('home', {
            tittle: "Home",
            task: task
        });
    }
)});



// creating Tasks
app.post('/create-task', function(req, res){
  //  console.log("Creating Task");
  Task.create({
      description: req.body.description,
      category: req.body.category,
      date: req.body.date
      
    }, function(err, newtask){
        if(err){console.log('error in creating task', err); return;}
        

        //console.log(newtask);
        return res.redirect('back');

    });
});


// deleting Tasks
app.get('/delete-task', function(req, res){
    // get the id from query
    var id = req.query;

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back'); 
});

// make the app to listen on asigned port number

const PORT = 8080 || process.env.PORT
app.listen(PORT, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port : ${PORT}`);
});