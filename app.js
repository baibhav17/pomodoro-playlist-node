const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3020;

app.use(cors());
app.use(express.json());

const defaultUsers = [
    {
      index: 1,
      name: 'Baibhav Saxena',
      userID: 'BS1',
      password: 'Baibhav@123',
    },
    {
      index: 2,
      name: 'SS',
      userID: 'SS1',
      password: 'Baibhav@123',
    },
  ];


  // create new user.
  app.post('/createUser',(req,res)=>{
      const {name,userID, password} = req.body;
      const newUser = {index: defaultUsers.length + 1, name, userID, password};
      defaultUsers.push(newUser);
      const newUserResponse = {index:newUser.index, name:newUser.name, userID:newUser.userID}
      res.status(200).json(newUserResponse);
  })

  // Get the list of users.
  app.get('/getUsers',(req,res)=>{
      res.status(200).json(defaultUsers);
  })

 // Start the server
 app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });