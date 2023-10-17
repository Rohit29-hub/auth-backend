const app = require('./Config/Express');
const mongodbConnected = require('./Config/Database');
const env = require('./Config/env')
const PORT = env.PORT || 5000;

// mongodb
mongodbConnected();

// post form data route signup *http://localhost:4000/signupform*
const submitSignUpForm = require('./Controller/singupForm')
app.use('/sendform', submitSignUpForm)

// delete user from data 
const delteUser = require('./Controller/logOut')
app.use('/logout',delteUser)

// check your login 
const loginUser = require('./Controller/Login')
app.use('/login',loginUser);

// listen the server 
app.listen(PORT, ()=>{
    console.log(`We are connect on this site ${PORT}`)
}) 