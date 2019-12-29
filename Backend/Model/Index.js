const dbs = require('mongodb').MongoClient;

const Schema = require('./Schema');
const schm = new Schema();

const tiket = require('./Tiket/Tiket');
const Tiket = new tiket();

class Mongo{
    
    constructor(url){    
        this.db = "Database";
        this.tiket = "Collections";
        this.startDB(url);
    }

     startDB(url){
        dbs.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, async (err, con) => {
             if (!err) {
                 
                schm.createCol(con);

                this.db = con.db('tiket5');
                
                console.log(this.db);
                
                this.tiket = this.db.collection('TiketHistory');
                
                console.log(this.tiket+"Collections");
                
                console.log("DB Succesfuly running");

             } else {
                 console.log("DB Failed to Running");
             }
         });
    }

    //Insert
    insertTiket(paramTiket){
        console.log(this.tiket);
        return Tiket.insertTiket(this.tiket ,paramTiket);
    }
}

module.exports = Mongo;