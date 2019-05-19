$(function () {
    let nav = document.getElementsByClassName('nav')
    let links = nav[0].getElementsByTagName('a')
    let search = document.getElementById('search')
    search.onkeyup = show

    function show(){
        let filter = document.getElementById('search').value.toUpperCase()

        for (let i of links) {
            if (i.innerHTML.toUpperCase().indexOf(filter)<0) {
                i.style.display = 'none'
            }
            else {
                i.style.display = 'block'
            }
        }
    }
})