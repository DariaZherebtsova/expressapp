// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
app.set("view engine", "hbs");
// определяем обработчик для маршрута "/"
app.use("/", function(request, response){
     
  response.render("2borders-slash.hbs", {
    width: "210px",
    height: "110px",
    fio: "12345678901 23456789012345 67890123456789",
    reason: "Отклонение АД (156/97)",
    repeat: "Пройти повторно через 20 мин!",
    date: "2020-04-1 20:20:41",
    medic: "Петрова Мария Ивановна",
    medicEDS: "6gh585ire9e3k38ef67f"
  });
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);