$(function () {
    let trigger = $("#modalTrigger")
    console.log(trigger[0].parentElement)
    let show = trigger[0].parentElement.nextElementSibling

    trigger.click(function () {
        showPic.call(this)
    })

    function showPic() {
        console.log(this.parentElement)
        this.parentElement.nextElementSibling.style.display = 'flex'
        this.parentElement.nextElementSibling.style.opacity = '1'
    }


    window.onclick = function (ev) {
        console.log('click window')
        if (ev.target ===show) {
            show.style.opacity = '0'
            show.style.display = 'none'
        }
    }
})