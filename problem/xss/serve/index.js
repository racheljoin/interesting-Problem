const express = require('express')
const app = express()

app.param('content', function (req, res, next, content) {
    console.log('CALLED ONLY ONCE');
    req.content = content;
    next();
  });

app.get('/user/:content', (req, res) => {
    console.log(req.content);
    
    res.send('<div>' + req.content );
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))