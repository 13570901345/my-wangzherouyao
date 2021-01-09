const express = require('express')
const app = express()

app.use(express.json())
app.use(require('cors')())

require('./router/admin/index.js')(app)
require('./plugins/db.js')(app)

app.listen(3000,() => {
    console.log('监听中。。。');
})