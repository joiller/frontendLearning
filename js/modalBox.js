$(function () {
    let trigger = $("#modalTrigger")
    trigger.click(function () {
        show.call(this)
    })
    let showed = trigger[0].nextElementSibling
    window.onclick = function (event) {
        console.log(event.target,event.target.style.zIndex)
        if (event.target === showed) {
            showed.style.maxHeight = null
        }
    }


    function show() {
        let showed = this.nextElementSibling
        showed.style.maxHeight = showed.height+'px'
    }

    function hide() {
        this.style.maxHeight = null
    }
})