const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const express = require('express')
const path = require('path')

const app = express()
app.use(express.urlencoded({ extended : true }))

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.post('/', async (req, res) => {
    let msgBox = req.body.msgBox;
    let date = new Date()
    if(msgBox) {
        const addMsg = await prisma.msg.create({
            data: {
                msg: msgBox,
                date: date            
            }
        })
        return addMsg;
    }
})

app.get('/secret/:id?', async (req, res) => {
    let msgId = req.params.id;
    const msgShow = await prisma.msg.findUnique({
        where: {
            id: Number(msgId)
        }
    })
    res.json(msgShow)
})

app.listen(3333, () => {
    console.log('tudo certo! :)')
})



//C:\Users\kayqu.000\Desktop\code\front-end\myProject\prisma