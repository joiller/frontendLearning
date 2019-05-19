$(function () {
    let btn = $("#nav")
    let nav = $("#mainNav")
    let body = $('body')
    let as = $.makeArray($('li'))

    btn.click(function () {
        show()
        window.onresize = function () {
            show.call(btn)
        }
    })
    function show() {
        console.log('before show')
        nav[0].style.width =nav[0].style.maxWidth= body[0].clientWidth+'px'
        console.log('after show')
    }

    window.onclick = function (ev) {
        if (!(as.includes(ev.target)) && ev.target!==btn[0]) {
            nav[0].style.maxWidth = null
            console.log(window.onresize)
            window.onresize = null
            console.log(window.onresize)
        }
    }
})