const welcome = async (req, res) => {
    res.send("Hello!")
}
module.exports = router => {
    router.get("/", welcome)
}
