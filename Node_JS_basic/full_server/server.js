import controllerRouting from './routes/index';

const express = require('express');

const app = express();
const port = 1245;

controllerRouting(app);

app.listen(port, () => {
});

export default app;
