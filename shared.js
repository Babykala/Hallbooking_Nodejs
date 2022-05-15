const {MongoClient}=require('mongodb');

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            const client=await MongoClient.connect("mongodb+srv://Babykala:m2c2UObwUjB59sUX@cluster0.qy289.mongodb.net?retryWrites=true&w=majority");
            this.selectedDb=client.db('mongoDB');
            console.log(this.selectedDb)
        }
        catch(error){console.log(error)}
    }
}



