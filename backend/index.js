const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
const app=express();
app.use(cors())
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.json())
const User = require('./models/user.js')
//data in form 
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
mongoose.connect("mongodb://127.0.0.1:27017/NEDScholarProject")
// mongoose.connect("mongodb+srv://naveedmoiz928:2628@cluster0.tstch3w.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection;
db.on('error',err=>{
    console.log("error occured",err)
});
db.once('open',()=>{
    console.log("Connected to Database....");})

app.use(express.urlencoded({extended:false}))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
// app.use(sessions({
//   secret:"thisisasecretkeyzdvfvfxvzfd",
//   saveUninitialized:true,
//   cookie:{maxAge:oneDay},
//   resave:false}))

// var session;

//MCQ schemma
const mcqSchema = new mongoose.Schema({
  email : String,
  opt: String,
  topic: String
});

const MCQModel = mongoose.model('MCQ', mcqSchema);




app.post('/createUser',async (req,res)=>{
  const {userName,email,password}=req.body;
  // console.log(userName+email+password)
  const newUser = new User({userName, email ,password});
  await newUser.save();
  res.send('you have been registered')
  // res.json({message:'you have been registered'})
})

app.post('/loginn',async (req,res)=>{
  const {email,password} = req.body;
  session=req.body;
    const user = await User.findOne({email})
    const isMatch = await bcrypt.compare(password,user.password)
  if(!isMatch){
    res.status(401).json({message:'Invalid credentials'})
  }
  else{ 
    const token = await user.generateAuthToken();
   
    res.cookie('jwtoken',token,{expires:new Date(Date.now()+2567430000),httpOnly:true })
    res.cookie('email',email,{expires:new Date(Date.now()+2567430000),httpOnly:true })
    // console.log(user)  
    // res.cookie('name',userName)
    // const userNamee=req.cookies.userName;
    res.send(`cookie has been set that is ...`)
  }
})

app.get('/userDetail',async (req,res)=>{
  const details = await User.find({});
  res.send(details)
  // function getCookie(name) {
  //   // const value = `; ${document.cookie}`;
  //   // const parts = value.split(`; ${name}=`);
  //   // if (parts.length === 2) return parts.pop().split(';').shift();
  //   const value= req.cookies.email;
  //   return value;
  // }
  
  // const jwtToken = getCookie('jwtoken');
  // res.send(jwtToken)
})

// Handle form submission
app.post('/saveSelection', async (req, res) => {
  const opt=req.body.selectedOption;
  const email= req.cookies.email;
  const topic='Decoy Effect'
  console.log(email)
  if(opt==='option3'){
    const mcqData = new MCQModel({email,opt,topic });
    await mcqData.save();
  }

    // console.log(session)
  // console.log(session)
  // console.log(req.body)
  // const { q1, q2} = req.body;
  // const email=session.email;
  
  // // const namee = req.cookies.name;
  // // console.log(namee)
  // console.log(email);

  // // Create a new MCQ document and save it to MongoDB

  res.send('Thank you for submitting your answers!');
});

// below API are correct
app.post('/signUp', async (req,res)=>{
  try {
    const { username, email, password } = req.body;
    // Validate input, check for duplicate emails, etc.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    else{
    const user = new User({ username, email, password });
    await user.save();

    // const token = generateToken(user);
    res.status(200).json({message:"successfully Registered"});
  }} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email,password)

    // Validate input (add more validation if needed)

    // Check if the user with the provided email and password exists
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error occurred during login', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const LaptopChoice = require('./models/laptopChoiceScheema.js')

app.post('/saveLaptopChoice',async (req,res)=>{
  try {
    console.log(req.body)
    const firstChoice = req.body.firstChoice;
    const Secondchoice  = req.body.formData.choice;
    const text = req.body.formData.text;
    const mail=req.body.mail;
    // Create a new document with the submitted choice
    const newChoice = new LaptopChoice({ Firstchoice:firstChoice,email:mail,SecondChoice:Secondchoice,text:text});
    await newChoice.save();
    
    res.status(200).json({ message: 'Laptop choice submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


// console.log(User.find({}))
// const product =require('./models/productModels.js')
// app.get('/user/:name/email/:email', async (req,res)=>{
//   const name=req.params.name;
//   const email=req.params.email;
//   console.log(name)
//   // const name = 'moiz khanzada'
//   // const email='naveedmoiz9282gmail.com'
//   const entry = new product({name,email})
//   await entry.save();
//   res.json(entry);
// })



// app.get('/data', async (req, res) => {
//     try {
//       const data = await product.find({});
//       res.json(data);
//     } catch (err) {
//       console.error("Error retrieving data:", err);
//       res.status(500).send("Error retrieving data");
//     }
//   });
  
const PORT = 3131;
app.listen(PORT,()=>{
    console.log(
        `running on port ${PORT}!!`)
})


// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';

// // Database Name
// const dbName = 'mydatabase';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Connect to the MongoDB server
// client.connect(err => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }
//   console.log('Connected to MongoDB successfully');

//   // Use the "client" object to interact with the database

//   // Don't forget to close the connection when done
//   // client.close();
// });
