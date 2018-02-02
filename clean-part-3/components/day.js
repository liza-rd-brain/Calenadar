function Day(variableDate, dayAnotherMonth, startDate,systemDate) {
    this.variableDate = variableDate
    this.dayAnotherMonth = dayAnotherMonth
    this.startDate = startDate
    this.systemDate = systemDate
}

let dprt = Day.prototype;


/*let systemDate = new Date()*/
dprt.CLASS_NAME = "day"
//все равно не понимаю, зачем обязательно в прототипе определять класс
dprt.CLASS_NAME_ANOTHER_MONTH = " dayAnotherMonth"
dprt.CLASS_NAME_WEEKENDDAY = " weekendDay"
dprt.CLASS_NAME_CURRENTDAY = " currentDay"

dprt.render = function () {
    let dayEl = document.createElement("div")
    dayEl.className = this.CLASS_NAME
    dayEl.innerHTML = (this.variableDate.getDate() + "." + (this.variableDate.getMonth() + 1) + "." + this.variableDate.getFullYear())

    if (this.dayAnotherMonth == true) {
        dayEl.className += this.CLASS_NAME_ANOTHER_MONTH
    }
    //вариант проверки текущего дня
    /*else if (new Date().getDate() == this.startDate.getDate() && new Date().getMonth() == this.startDate.getMonth() && new Date().getFullYear() == this.startDate.getFullYear()) {
    
        
        dayEl.className += this.CLASS_NAME_CURRENTDAY
    }*/

    else if (this.variableDate.getDate() == this.systemDate.getDate() && this.variableDate.getMonth() == this.systemDate.getMonth() && this.variableDate.getFullYear() == this.systemDate.getFullYear()) {
        dayEl.className += this.CLASS_NAME_CURRENTDAY
    }

    else if (this.variableDate.getDay() === 0 || this.variableDate.getDay() === 6) {
        dayEl.className += this.CLASS_NAME_WEEKENDDAY
    }

    return dayEl


}

dprt = null


