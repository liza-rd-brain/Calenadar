function LeftArrow(navigatorEl, previousGrid) {
    this.navigatorEl = navigatorEl
    this.previousGrid = previousGrid
}

laprt = LeftArrow.prototype
laprt.CLASS_NAME = "leftArrow"

laprt.render = function () {
    let leftArrowEl = document.createElement("div")
    leftArrowEl.className = this.CLASS_NAME
    leftArrowEl.innerHTML = "<"
    
    this.navigatorEl.appendChild(leftArrowEl)
    //обработчик щелчка
    leftArrowEl.onclick = this.previousGrid

}
laprt = null