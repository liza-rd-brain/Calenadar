function RightArrow(navigatorEl, followingGrid) {
    this.navigatorEl = navigatorEl
    this.followingGrid = followingGrid
}

raprt = RightArrow.prototype
raprt.CLASS_NAME = "rightArrow"

raprt.render = function () {
    let rightArrowEl = document.createElement("div")
    rightArrowEl.className = this.CLASS_NAME
    rightArrowEl.innerHTML = ">"
    this.navigatorEl.appendChild(rightArrowEl)
    rightArrowEl.onclick = this.followingGrid
}


raprt = null

