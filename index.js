let express = require('express');
let app = express();

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running at port ${port}`));
app.use(express.static('public'));