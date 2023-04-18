import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`Connected ${connect.connection.host}`)
    }catch(err){
        console.log(`ERROR: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;