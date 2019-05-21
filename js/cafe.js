window.onload = function () {
    let left = document.getElementsByClassName('left')
    let right = document.getElementsByClassName('right')
    let header = document.getElementsByTagName("header")
    let main = document.getElementsByClassName('main')
    // if (document.documentElement.clientWidth>825){
    header[0].style.height = document.documentElement.clientWidth*0.8+'px'
    // }
    window.onresize = function(){
        header[0].style.height = document.documentElement.clientWidth*0.8+'px'

    }
    right[0].onclick = function () {
        slide(-1)
    }
    left[0].onclick = function(){
        slide(1)
    }

    let slidePos = {}
    let slidee = document.getElementsByClassName('slide')[0]
    let slides = slidee.getElementsByTagName('img')

    for (let i =0;i<slides.length;i++) {
        slidePos[i]=0
    }
    console.log(slidePos)


    function slide(n) {

        for (let i=0;i<slides.length;i++) {
            if (n===1){
                if (slidePos[i]>=0) {
                    slidePos[i]=-400
                }else {
                    slidePos[i]+=100
                }
                slides[i].style.left=slidePos[i]+'px'
            }else {
                if (slidePos[i]<=-400) {
                    slidePos[i]=0
                }else {
                    slidePos[i]-=100
                }
                slides[i].style.left=slidePos[i]+'px'
            }
        }
    }
}