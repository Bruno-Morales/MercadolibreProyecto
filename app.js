const express = require('express')
const app = express()
const path = require('path')

const port = 3000

// vista publica
const views = path.join(__dirname, 'public/views/')

// rutas
const httpRaiz = '/'
const httpHome = '/Home'
const httpLogin = '/Login'
const homeHtml = 'Home.html'
const LoginHtml = 'Login.html'

const RegisterHtml = 'Register.html'
const httpRegister = '/Register'



app.use(express.static(__dirname + "/public"));

app.get(httpRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})



app.get(httpRegister, (req, res) => {
    res.sendFile(path.join(views, RegisterHtml))
})


app.get(httpLogin, (req, res) => {
    res.sendFile(path.join(views, LoginHtml))
})

app.get(httpHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.post(httpLogin, (req, res) => {
    res.sendFile(path.join(views, LoginHtml))
})

app.post(httpHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})



app.listen(3000 || process.env.PORT, () => console.log('El servidor se ha iniciado correctamente.'));
