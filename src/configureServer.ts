const cors = require('cors');
const path = require('path');
const express = require('express');

import { serverOptions } from './utils/getSslCertificat';

const app = express();
app.listen(80);

const server = require('https').createServer(serverOptions, app);

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        (req.secure) ? next() : res.redirect(`https://${req.headers.host}/${req.url}`);
    });
}

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'client')));
app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'index.html')));

export default ({
    server
});

export { server };