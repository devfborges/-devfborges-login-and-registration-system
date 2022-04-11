const bcrypt = require('bcryptjs');
const express = require('express');
const cnpjValidation = require('./validateCnpj');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {


    const { cnpj } = req.body;

    try {

        if (!await cnpjValidation(req.body.cnpj)) {
            return res.status(400).send({ error: 'CNPJ invalid' });
        }
            
        if (await User.findOne({ cnpj })){
             return res.status(400).send({ error: 'CNPJ already exists' });
        }
           
        const user = await User.create(req.body);

        return res.redirect("/app");

    } catch (err) {

        return res.status(400).send({ error: 'Registration failed' });

    }

});

router.post('/authenticate', async (req, res) => {

    const { cnpj, password } = req.body;

    const user = await User.findOne({ cnpj }).select('+password');

    if(!user)
        return res.status(400).send({ error: 'CNPJ or password invalid' });

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'CNPJ or password invalid' });

    res.send('Login realizado com sucesso!');

})

router.get("/", (req, res) => {
    res.render("index.html");
})


module.exports = app => app.use('/app', router);