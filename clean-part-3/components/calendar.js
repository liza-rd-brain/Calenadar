function Calendar(container) {
    this.container = container
    this.navigatorEl = null
    this.calendarEl = null
    this.gridEl = null
    this.updateCalendar = this.updateCalendar.bind(this)
    this.updateSystemDate = this.updateSystemDate.bind(this)
    this.timer = setInterval(this.updateSystemDate.bind(this), 10000)
}
let cprt = Calendar.prototype
cprt.CLASS_NAME = "calendar"

// как понять, какие переменные определять внутри render-а?!
//от startDate или curentDate нужно//можно избавиться?!?!?
/*var startDate = new Date()
var curentDate = new Date(startDate.getFullYear(), startDate.getMonth()-1, startDate.getDate())*/
//в принципе при обновлении даты systemDate мне не понадобился
//зато при объявлении systemDate здесь, решилась другая проблема:
//раньше текущий выходной  день подсвечивался красным
//после изменения места объявления переменной стал зеленым (протестировано)
var curentDate = new Date()
let systemDate = new Date()
var daysCount = 7;
var weekCount = 6;


//вариант1
/*this.container.removeChild(document.getElementsByClassName("calendar")[0])*/

//вариант 1
cprt.updateSystemDate = function () {

    if (new Date().getHours() === 00 /*&& new Date().getMinutes() === 05*/) {
        //понять, как няпрямую обратится к элементу календаря!!!

        //вариант 2
        this.calendarEl.removeChild(this.navigatorEl)
        this.calendarEl.removeChild(this.gridEl)
        //по новой рисую календарик
        //Да. создаю локальную переменную
        let curentDate = new Date()
        this.navigatorEl = new Navigator(curentDate, this.calendarEl, this.updateCalendar).render()
        this.gridEl = new Grid(curentDate, systemDate, weekCount, daysCount, this.calendarEl).render()

    }
}

//вариант 2

/*cprt.updateSystemDate = function () {

   let decisionUpdateSystemDate = function () {
        if (new Date().getHours() === 19 && new Date().getMinutes() === 58) {
            this.container.removeChild(this.calendarEl)
            //по новой рисую календарик
            curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, curentDate.getDate())
            new Calendar().render()
        }
    }
    
}
setInterval(cprt.updateSystemDate, 5000)*/



/*setInterval(cprt.updateSystemDate.bind(cprt), 1000)*/





cprt.render = function () {

    //вариант 1
    /*let calendarEl = document.createElement("div")
    calendarEl.className = this.CLASS_NAME
    this.container.appendChild(calendarEl)*/

    //вариант 2
    this.calendarEl = document.createElement("div")
    this.calendarEl.className = this.CLASS_NAME
    this.container.appendChild(this.calendarEl)

    this.navigatorEl = new Navigator(curentDate, this.calendarEl, this.updateCalendar).render()
    this.gridEl = new Grid(curentDate, systemDate, weekCount, daysCount, this.calendarEl).render()

    // не могу понять, как обратиться к элементу Календарь!!!
}
//Вариант 1
/*cprt.updateCalendar = function (event) {
    this.navigatorEl.removeChild(document.getElementsByClassName("currentMonth")[0])
    document.getElementsByClassName("grid")[0].removeChild(document.getElementsByClassName("daysGrid")[0])
    if (event.target.data == "right") {
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, curentDate.getDate())
    }
    else {
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, curentDate.getDate())
    }

    //следующий месяц
    let updateMonth = new CurrentMonth(curentDate, this.updateCalendar).render()
    let updateGrid = new DaysGrid(curentDate).render()

}*/

cprt.updateCalendar = function (event) {
    this.calendarEl.removeChild(this.navigatorEl)
    this.calendarEl.removeChild(this.gridEl)
    if (event.target.data == "right") {
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, curentDate.getDate())
    }
    else {
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, curentDate.getDate())
    }
    this.navigatorEl = new Navigator(curentDate, this.calendarEl, this.updateCalendar).render()
    this.gridEl = new Grid(curentDate, systemDate, weekCount, daysCount, this.calendarEl).render()
}

cprt = null