function Day(startDate, dayAnotherMonth) {
    this.startDate = startDate
    this.dayAnotherMonth = dayAnotherMonth
}

let dprt = Day.prototype;


let systemDate = new Date()

let updateSystemDate = function () {
    systemDate = new Date()
}
  
if (this.startDate!= systemDate){}

setInterval(updateSystemDate,10000)



dprt.CLASS_NAME = "day"
//все равно не понимаю, зачем обязательно в прототипе определять класс
dprt.CLASS_NAME_ANOTHER_MONTH = " dayAnotherMonth"
dprt.CLASS_NAME_WEEKENDDAY = " weekendDay"
dprt.CLASS_NAME_CURRENTDAY = " currentDay"

dprt.render = function () {
    let dayEl = document.createElement("div")
    dayEl.className = this.CLASS_NAME
    dayEl.innerHTML = (this.startDate.getDate() + "." + (this.startDate.getMonth() + 1) + "." + this.startDate.getFullYear())

    if (this.dayAnotherMonth == true) {
        dayEl.className += this.CLASS_NAME_ANOTHER_MONTH
    }
    else if (this.startDate.getDate() == systemDate.getDate() && this.startDate.getMonth() == systemDate.getMonth() && this.startDate.getFullYear() == systemDate.getFullYear()) {
        dayEl.className += this.CLASS_NAME_CURRENTDAY
    }

    else if (this.startDate.getDay() === 0 || this.startDate.getDay() === 6) {
        dayEl.className += this.CLASS_NAME_WEEKENDDAY
    }
    
    return dayEl


}

dprt = null


