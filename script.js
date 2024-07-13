const arrowsLeft = document.querySelectorAll(".bi-chevron-left")
const arrowsRight = document.querySelectorAll(".bi-chevron-right")
const movieLists = document.querySelectorAll(".movie-list")




arrowsRight.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
        const transformValue = movieLists[i].computedStyleMap().get("transform")[0].x.value
        const positionItem = movieLists[i].getBoundingClientRect()

        if (window.innerWidth < positionItem.right) {
            if (300 < positionItem.right - window.innerWidth) {
                movieLists[i].style.transform = `translateX(${transformValue - 300}px)`
            } else {
                movieLists[i].style.transform = `translateX(${transformValue - (positionItem.right - window.innerWidth)}px)`
            }
        } else {
            movieLists[i].style.transform = `translateX(0px)`
        }
    })
})

arrowsLeft.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
        const transformValue = movieLists[i].computedStyleMap().get("transform")[0].x.value
        const positionItem = movieLists[i].getBoundingClientRect()

        if (0 > positionItem.left && 300 < -positionItem.left) {
            movieLists[i].style.transform = `translateX(${transformValue + 300}px)`
        } else {
            movieLists[i].style.transform = `translateX(0px)`
        }
    })
})

// dark mode 
const items = document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, select, .movie-list-container>h1 ")
const ball = document.querySelector(".toggle")

console.log(items)

ball.addEventListener("click", (e) => {
    items.forEach(item => item.classList.toggle("light"))
})
