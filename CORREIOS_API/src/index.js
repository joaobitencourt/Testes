module.exports = (app) =>{
    app.use("/", require("./models/cep"));
    app.use("/", require("./models/frete"));
}