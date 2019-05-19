window.onload=function() {
    let nav = document.getElementsByClassName('nav')
    let as = nav[0].getElementsByTagName('a')
    let trigger = as[as.length-1]
    let body  = document.getElementsByTagName('body')[0]
    trigger.onclick = show

    window.onscroll = function () {
        if (document.documentElement.scrollTop>430) {
            nav[0].style.position='fixed'
            nav[0].style.top = 0
            // nav[0].style.width = body.clientWidth+'px'
            // console.log(body.clientWidth+'px')
        }else {
            nav[0].style.position = 'relative'
        }
    }

    function show() {
        nav[0].classList.toggle('column')
    }
}