const app = require('./app');
const { APP_PORT } = process.env;

app.listen(APP_PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${APP_PORT}`);
})
