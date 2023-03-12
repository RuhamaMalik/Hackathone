// 3.1
import mongoose from 'mongoose';

const mongoUrl = "mongodb+srv://ruhama:fahad@authantication.zgl2b3q.mongodb.net/test";

mongoose.connect(mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log("DB connected");
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

export default mongoose;
