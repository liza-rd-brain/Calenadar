function DaysGrid(startDate, weekCount, daysCount) {
    this.startDate = startDate
    this.weekCount = weekCount
    this.daysCount = daysCount
    this.variableDate = null
    this.firstWeek = null
    this.firstDate = null
    this.daysGridEl = null
    this.dayOfWeek = [1, 2, 3, 4, 5, 6, 0]
    this.differenceFromFirstDate = [6, 0, 1, 2, 3, 4, 5]
}

let dgprt = DaysGrid.prototype
dgprt.CLASS_NAME = "daysGrid"
dgprt.render = function () {
    this.daysGridEl = document.createElement("div")
    this.daysGridEl.className = this.CLASS_NAME
    let year = this.startDate.getFullYear()
    let month = this.startDate.getMonth()
    let day = null
    this.firstDate = new Date(year, month, 1)

    //можно убрать в конструктор день недели первого дня месяца
    let dayOfWeekFirstDate = this.firstDate.getDay()

    for (let i = 0; i < this.dayOfWeek.length; i++) {
        //ищем какой день недели соответствует первому дню месяца
        if (this.dayOfWeek[i] == dayOfWeekFirstDate) {
            //опеределяем дату, от которой будет строиться сетка
            this.variableDate = new Date(year, month, -this.differenceFromFirstDate[i])
            break
        }
    }
    //строим недели
    for (let i = 1; i <= this.weekCount; i++) {
        let daysWeekEl = new DaysWeek(this.variableDate, this.daysCount,this.firstDate).render()
        this.daysGridEl.appendChild(daysWeekEl)
        this.variableDate.setDate(this.variableDate.getDate() + 7)
    }
    return this.daysGridEl
}

dgprt = null



