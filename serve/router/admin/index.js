
module.exports = app => {
    const express = require('express')
    const router = express.Router()

    const createnav = require('../../models/createnav')

    router.post('/createnav',async (req,res) => {
      const model = await createnav.create(req.body)
        res.send(model)
    })
    app.use('/admin/api',router)

}