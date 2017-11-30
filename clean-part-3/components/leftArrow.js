function previousGrid() {
    
        daysGridEl = document.getElementsByClassName("daysGrid")
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, curentDate.getDate())
        //curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth(), curentDate.getDate() - daysCount * weekCount)
    
        daysPreviousGridEl = new DaysGrid(curentDate).render()
        grid.replaceChild(daysPreviousGridEl, daysGridEl[0])
        сurrentMonth.innerHTML = nameMonth[curentDate.getMonth()]
    }