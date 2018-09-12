let messages = [];
let messageID = 0;

module.exports = {

    createMessage(req,res){
        const {text,time} = req.body;
        messages.push({messageID,text,time});
        messageID++;
        return res.status(200).send(messages);
    },
    
    readMessages(req,res){
        if(req.query.q){
            let returnList=req.filter(message=>message.includes(req.query.q))
            return res.status(200).json(returnList)
        }
        return res.status(200).send(messages)
    },

    updateMessage(req,res){
        messageIndex=messages.findIndex(e=>e.id==req.params.index);
        messages[messageIndex].text=req.body.text;
        return res.status(200).send(messages)
    },

    deleteMessage(req,res){
        let messageIndex = messages.findIndex(e=>e.id==req.body.id)
        messages.splice(messageIndex,1);
        return res.status(200).send(messages)
    }

}