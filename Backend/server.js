const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
const database = {
    user:[
        {
            id:'123',
            name:'Mary',
            email:'mary@gmail.com',
            password:'12344555',
            entries:0,
            joined: new Date()
        },
        {
            id:'125',
            name:'Joseph',
            email:'joseph@gmail.com',
            password:'12344567',
            entries:0,
            joined: new Date()
        }
    ]
}

let findById = (res,req) => {
    let found = false;
database.user.forEach(user => {
    if(user.id === id){
        found = true;
        user.entries++;
        return res.json(user.entries);
    } 
})
if(!found) {
    res.status(400).json('not found');
}
}
app.get('/', (req,res) => {
    res.send(database.user);
});

app.post('/signin', (req,res) => {
    if(req.body.email === database.user[0].email && req.body.password === database.user[0].password)
    { res.json('succes');
} else {
    res.json('fail')
}
});

app.post('/register', (req,res) => {
    const {name, email, password} = req.body;
    database.user.push({
        id:126,
        name: name,
        email: email,
        password: password,
        entries:0,
        jonied:new Date()
    })

res.json(database.user[database.user.length-1]);
});

app.get('/profile/:id', (req,res) => {
    findById(req.params.id);
})

app.post('/image', (req,res) => {
findById(req.body.id) ;   
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})


/*
/-----> root route
/signin ----->Post  success/fail
/register -----> POST = user
/profile/:user  ----->  GET =  user
*/