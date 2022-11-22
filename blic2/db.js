import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
    "mongodb+srv://<1234>:<1234>@<cluster-url>?retryWrites=true&writeConcern=majority";

let db = null

export default () => {
    return new Promise((resolve, reject) => {
        if (db && (client.connected === true)) {
            resolve(db)
        }
        else {
            client.connect(err => {
                if (err) {
                    reject('Failed' + err);
                }
                else {
                    console.log('Database connected succesfully!');
                    db = client.db('db');
                    resolve(db);
                }
            }
            );
        }
    });
}