function CurrentMonth(curentDate, navigatorEl) {
    this.curentDate = curentDate
    this.navigatorEl = navigatorEl
}
cmprt = CurrentMonth.prototype
cmprt.CLASS_NAME = "currentMonth"
let nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]


cmprt.render = function () {
    let currentMonthEl = document.createElement("div")
    currentMonthEl.className = this.CLASS_NAME
    currentMonthEl.innerHTML = nameMonth[this.curentDate.getMonth()]

    this.navigatorEl.appendChild(currentMonthEl)

    /*this.navigatorEl.replaceChild(this.currentMonthElPre, currentMonthEl)*/


    /* this.navigatorEl.appendChild(currentMonthEl)*/
}
cmprt.renderPrevios = function () {
    /*let abc = document.getElementsByClassName("navigator")
    let klm = document.getElementsByClassName("currentMonth")*/
    
    let previosMonthEl = document.createElement("div")
    previosMonthEl.className = "currentMonth"
    previosMonthEl.innerHTML = nameMonth[this.curentDate.getMonth()]
    document.getElementsByClassName("navigator")[0].replaceChild(previosMonthEl,document.getElementsByClassName("currentMonth")[0])
   
    /*navigator.replaceChild(currentMonthElPre,CurrentMonth)*/

    /*div.navigator.replaceChild(currentMonthElPre,div.CurrentMonth)*/

    /*this.navigatorEl.replaceChild(currentMonthElPre, currentMonthEl)*/

}
cmprt.renderFollowing = function(){
    let followinMonthEl = document.createElement("div")
    followinMonthEl.className = "currentMonth"
    followinMonthEl.innerHTML = nameMonth[this.curentDate.getMonth()]
    document.getElementsByClassName("navigator")[0].replaceChild(followinMonthEl,document.getElementsByClassName("currentMonth")[0])

}
cmprt = null


