function Day(startDate, dayAnotherMonth) {
    this.startDate = startDate
    this.dayAnotherMonth = dayAnotherMonth
}

let dprt = Day.prototype;
let abc = new Date()

dprt.render = function () {
    let dayEl = document.createElement("div")
    dayEl.className = "day"
    dayEl.innerHTML = (this.startDate.getDate() + "." + (this.startDate.getMonth() + 1) + "." + this.startDate.getFullYear())
    

    if (this.dayAnotherMonth == true) {
        dayEl.className = "dayAnotherMonth day"
       }
    else if(this.startDate.getDay()===0||this.startDate.getDay()===6) {
        dayEl.className = "weekendDay day"
       }
    else if(this.startDate.getDate() == abc.getDate()&& this.startDate.getMonth() == abc.getMonth()&& this.startDate.getFullYear() == abc.getFullYear()) {
       dayEl.className = "currentDay day"
       }

    return dayEl


}

dprt = null


