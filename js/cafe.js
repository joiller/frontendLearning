window.onload = function () {
    let left = document.getElementsByClassName('left')
    let right = document.getElementsByClassName('right')
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