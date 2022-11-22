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

app.patch('/odjeca/:id', async (req, res) => {
    let data = req.body = req.body
    let id = req.params.id
    let db = await connect()
    let result = await db.collection('odjeca').updateOne(
        {
            newPrice: mongo.ObjectPrice(price)
        },
        { $set: data, }
    )
    if (doc) {
        res.json({ 'status': 'OK', 'message': 'Item updated.' })
    }
    else {
        res.json({
            'status': 'Failed'
        })
    }
    res.json(result)
})

app.delete('/odjeca/:id', async (req, res) => {
    let id = req.params.id
    let db = await connect()
    let result = await db.collection('odjeca').deleteOne(
        {
            _id: mongo.ObjectId(id)
        })
    if (result.deleteCount === 1) {
        res.json({ 'status:': 'OK' })
    } else {
        res.json({ 'status': 'Failed' })
    }
})