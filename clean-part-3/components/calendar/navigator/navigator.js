function Navigator(startDate, updateCalendar) {
    this.startDate = startDate
    this.updateCalendar = updateCalendar
}

let nprt = Navigator.prototype
nprt.CLASS_NAME = "navigator"
nprt.LEFT = 'left'
nprt.RIGHT = 'right'
nprt.pictureOfArrow = ["<", ">"]

nprt.render = function () {
    let navigatorEl = document.createElement("div")
    navigatorEl.className = this.CLASS_NAME

    let currentMonthEl = new CurrentMonth(this.startDate).render()
    let leftArrowEl = new Arrow(this.updateCalendar, this.LEFT, this.pictureOfArrow[0]).render()
    let rightArrowEl = new Arrow(this.updateCalendar, this.RIGHT, this.pictureOfArrow[1]).render()

    navigatorEl.appendChild(leftArrowEl)
    navigatorEl.appendChild(currentMonthEl)
    navigatorEl.appendChild(rightArrowEl)
    return navigatorEl
}

nprt = null

