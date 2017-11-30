let leftArrowClick = document.getElementById("leftArrow")
leftArrowClick.onclick = previousGrid

let rightArrowClick = document.getElementById("rightArrow")
rightArrowClick.onclick = followingGrid

/*function previousGrid() {
    
        daysGridEl = document.getElementsByClassName("daysGrid")
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, curentDate.getDate())
        //curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth(), curentDate.getDate() - daysCount * weekCount)
    
        daysPreviousGridEl = new DaysGrid(curentDate).render()
        grid.replaceChild(daysPreviousGridEl, daysGridEl[0])
        сurrentMonth.innerHTML = nameMonth[curentDate.getMonth()]
    }
    
    function followingGrid() {
    
        daysGridEl = document.getElementsByClassName("daysGrid")
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, curentDate.getDate())
        //curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth(), curentDate.getDate() + daysCount * weekCount)
    
        daysFollowingGridEl = new DaysGrid(curentDate).render()
        grid.replaceChild(daysFollowingGridEl, daysGridEl[0])
        сurrentMonth.innerHTML = nameMonth[curentDate.getMonth()]
    }*/