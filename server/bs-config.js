require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
const proj_dir = `/root/DChat/class-one`;
app.use(express.static('public'));
app.get('', (req, res) => {
   res.sendFile(`${proj_dir}/server/Landingpage.html`);
});
app.get('/chat', (req, res) => {
   res.sendFile(`${proj_dir}/server/index.html`);
});
app.get('*', (req, res) => {
   res.status(404);
   res.send('Oops... this URL does not exist');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

module.exports = {
  "server": {
    "routes": {
      "/node_modules": "node_modules"
    },
    middleware: {
      1: app,
  },
},
port:PORT,
};

