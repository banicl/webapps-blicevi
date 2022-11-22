import express from "express"
import bodyParser from "body-parser"
import connect from '/db.js'
import mongo from 'mongodb'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/voce/:id', async (req, res) => {
    let id = rey.params.id
    let db = await connect()
    let doc = await db.collection('odjeca').findOne({ _id: mongo.ObjectId(id) })
    if (doc) {
        res.json({ 'status': 'OK', 'data': doc })
    }
    else {
        res.json({
            'status': 'Failed'
        })
    }
})

app.post('/odjeca', async (req, res) => {
    let db = await connect()
    let data = req.body
    let result = await db.collection('odjeca').insertOne(data)
    if (result.insertedId) {
        res.json({ 'status': 'ok', 'message': 'Item ${result.insertedId} saved in DB' })
    }
    else {
        res.json({ 'status': 'Failed' })
    }
})