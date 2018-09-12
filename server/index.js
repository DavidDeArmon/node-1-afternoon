const express = require('express'),
    bodyParser = require('body-parser'),
    messageController= require('./controller/messages_controller'),
    app = express();

app.use( bodyParser.json());
app.use(express.static( __dirname+ '/../public/build'));

app.post('/api/messages',messageController.createMessage)
app.get('/api/messages',messageController.readMessages)
app.put('/api/messages/:id',messageController.updateMessage)
app.delete('/api/messages/:id',messageController.deleteMessage)

const port = 3000;

app.listen(port,()=>{console.log('Server is running. The port is:'+port)})