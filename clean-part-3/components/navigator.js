function Navigator(startDate, calendarEl, updateCalendar) {
    this.startDate = startDate
    this.calendarEl = calendarEl
    this.updateCalendar = updateCalendar
}

let nprt = Navigator.prototype
nprt.CLASS_NAME = "navigator"

nprt.render = function () {
    let navigatorEl = document.createElement("div")
    navigatorEl.className = this.CLASS_NAME
    this.calendarEl.appendChild(navigatorEl)
    
    let leftArrowEl = new LeftArrow(navigatorEl, this.updateCalendar).render()
    let currentMonthEl = new CurrentMonth(this.startDate, navigatorEl).render()
    let rightArrowEl = new RightArrow(navigatorEl, this.updateCalendar).render()
    return navigatorEl
}



nprt = null

