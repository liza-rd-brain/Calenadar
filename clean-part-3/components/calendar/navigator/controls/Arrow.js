function Arrow(updateCalendar, direction,pictureOfArrow) {
    this.updateCalendar = updateCalendar
    this.direction = direction
    this.pictureOfArrow = pictureOfArrow
}

aprt = Arrow.prototype
aprt.CLASS_NAME = "Arrow"

aprt.render = function () {
    let ArrowEl = document.createElement("div")
    ArrowEl.className = this.CLASS_NAME
    ArrowEl.innerHTML = this.pictureOfArrow
    ArrowEl.data = this.direction
    ArrowEl.addEventListener("click", this.updateCalendar)
    return ArrowEl
}
aprt = null