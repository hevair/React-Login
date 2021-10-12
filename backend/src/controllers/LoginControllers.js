
const Login = {
    loginController(req, res) {
        console.log(req.body)
        return res.json({ login: 'Hevair' })
    }
}

export { Login }