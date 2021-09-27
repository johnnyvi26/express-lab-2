const express = require('express');
const app = express();
const PORT = 3000;





const magicAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];






/////////////// GREETINGS //////////////////
app.get('/greeting', (req,res) => {
    res.send('Hello, stranger.');
});

app.get('/greeting/:name' , (req,res)=>{
    res.send(`Hello, ${req.params.name}! It's so great to see you!`);
});


//////////////// MAGIC 8 BAll /////////////

app.get('/magic', (req, res)=>{
    res.send('Enter your question in the URL!');
});

let randomAnswer = magicAnswers[Math.floor(Math.random() * magicAnswers.length)];

app.get('/magic/:question', (req, res)=>{
    res.send(`${req.params.question}? ----- ${randomAnswer}`)
});


//////////////// PORTS ////////////


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});