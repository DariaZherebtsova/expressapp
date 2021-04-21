// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
app.set("view engine", "hbs");
// определяем обработчик для маршрута "/"
app.use("/", function(request, response){
     
  response.render("contact.hbs", {
    width: "300px",
    height: "220px",
  });
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);