var express = require('express'), app = express();

app.use('/', express.static(__dirname + '/app'));
app.use("/css", express.static(__dirname + '/css'));
app.listen(process.env.PORT || 3000);
