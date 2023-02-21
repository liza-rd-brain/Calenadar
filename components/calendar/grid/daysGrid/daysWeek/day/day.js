function Day(variableDate, firstDate) {
    this.variableDate = variableDate
    this.firstDate = firstDate
    this.systemDate = new Date()
}

let dprt = Day.prototype;

dprt.CLASS_NAME = "day"
//все равно не понимаю, зачем обязательно в прототипе определять класс
dprt.CLASS_NAME_ANOTHER_MONTH = " dayAnotherMonth"
dprt.CLASS_NAME_WEEKENDDAY = " weekendDay"
dprt.CLASS_NAME_CURRENTDAY = " currentDay"

dprt.render = function () {
    let dayEl = document.createElement("div")
    let variableDay = this.variableDate.getDate()
    let variableMonth = this.variableDate.getMonth()
    let variableYear = this.variableDate.getFullYear()
    let variableDayWeek = this.variableDate.getDay()
    let systemDay = this.systemDate.getDate()
    let systemMonth = this.systemDate.getMonth()
    let systemYear = this.systemDate.getFullYear()
    let firstDateMonth = this.firstDate.getMonth()
    dayEl.className = this.CLASS_NAME
    dayEl.innerHTML = (variableDay + "." + (variableMonth + 1) + "." + variableYear)

    //упрощаю перебор дней
    //если месяцы разные, не стану дальше делать проверки на текущий день
    //могу упростить проверку на текущий день
    if (variableMonth !== firstDateMonth) {
        dayEl.className += this.CLASS_NAME_ANOTHER_MONTH
    }
   
    else if (variableDay == systemDay && variableMonth == systemMonth && variableYear == systemYear) {
        dayEl.className += this.CLASS_NAME_CURRENTDAY
    }

    else if (variableDayWeek === 0 || variableDayWeek === 6) {
        dayEl.className += this.CLASS_NAME_WEEKENDDAY
        //интерпретатор ругается, когда пытаюсь прервать цикл, почему?!
        /*break*/
    }

    return dayEl
}

dprt = null


