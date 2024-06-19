import { configDotenv } from 'dotenv';
import  express  from 'express';
import requestRouter from './routers/RequestRouter.js';
import volunteerRouter from './routers/VolunteerRouter.js';
import statusRouter from './routers/StatusRouter.js'
import prefernceRouter from './routers/PreferenceRouter.js'
import locationRouter from './routers/LocationRouter.js'

configDotenv()
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());
app.use('/api/volunteers', volunteerRouter);
app.use('/api/requests', requestRouter);
app.use('/api/statuses', statusRouter);
app.use('/api/prefernces', prefernceRouter);
app.use('/api/locations', locationRouter);
app.use('/', (req, res) => {
    res.send('welcome to volunteering platform! we will be happy to help you🤜🤛');
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


