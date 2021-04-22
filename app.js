// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
app.set("view engine", "hbs");
// определяем обработчик для маршрута "/"
app.use("/", function(request, response){
     
  response.render("2borders-slash.hbs", {
    width: "400px",
    height: "220px",
    fio: "Иванов Иван Иванович",
    type: "предрейсовый",
    date: "2020-04-1 20:20:41",
    medic: "Петрова Мария Ивановна",
    medicEDS: "6gh585ire9e3k38ef67f"
  });
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);