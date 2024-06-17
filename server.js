import { configDotenv } from 'dotenv';
import  express  from 'express';
import requestRouter from './routers/RequestRouter.js';
import volunteerRouter from './routers/VolunteerRouter.js';


configDotenv()
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());
app.use('/api/volunteers', volunteerRouter);
app.use('/api/requests', requestRouter);
app.use('/', (req, res) => {
    res.send('welcome to our volunteering api!');
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


