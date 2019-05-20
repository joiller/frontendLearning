window.onload = function () {
    let obj = {}

    for (let i =0;i<6;i++) {
        obj[i]=0
    }

    for (let j =0;j<6;j++) {

        obj[j]-=100
        console.log(obj[j])
    }
}