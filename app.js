const express = require('express');
const date = require(__dirname + '/date.js')

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

let newItems=["coco", "leche"];
let workItems=[];


app.get('/', (req, res) => {
    const day = date.getDay();
    res.render('list', {listTitle : day, newItems : newItems});
});

app.get('/work', (req, res) => {
    res.render('list', {listTitle : "Work", newItems : workItems});
})

app.get('/about', (req, res)=>{
    res.render('about');
})

app.post('/', (req, res) => {
    if (req.body.list === 'Work'){
        workItems.push(req.body.newItem);
        res.redirect('/work');
    } else {
        newItems.push(req.body.newItem);
        res.redirect('/');
    }
});

app.listen(3000, function(){
    console.log("Server starting on port 3000")
})
