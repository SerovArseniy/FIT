function toshow() {
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    let alement = document.elementFromPoint(width/2, height*0.8).closest("section, footer")
    if (!alement.classList.contains("start")) {
        alement.classList.add("start")
    }
}
window.addEventListener("scroll", function () {
    toshow()
})
toshow()