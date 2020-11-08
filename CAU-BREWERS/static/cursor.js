
function abs_click() {
    let main_ads = document.getElementById('main_ads')
    let ads = document.getElementById('ads')
    let main = document.getElementById('main')
    let menu = document.getElementById('menu')
    main_ads.style.backgroundImage = 'none'
    ads.style.display = 'none';
    menu.style.visibility = 'visible'
}

function pay_add(obj) {
    let modal = document.getElementById('pay_info')
    let pay_text = document.getElementById('pay_text')
    let re_text = obj.getAttribute('alt')
    pay_text.textContent = re_text
    if (modal !== null) {
        modal.style.visibility = 'visible'
    }
}

function check(obj) {
    btn = document.getElementsByClassName('btn')
    num = parseInt(obj.value)
    console.log(parseInt(obj.value) < 2)
    switch (num){
        case 0 :
            btn[0].style.backgroundColor = 'orange'
            btn[1].style.backgroundColor = 'white'
            break;
        case 1 :
            btn[1].style.backgroundColor = 'orange'
            btn[0].style.backgroundColor = 'white'
            break;
        case 2 :
            btn[2].style.backgroundColor = 'orange'
            btn[3].style.backgroundColor = 'white'
            btn[4].style.backgroundColor = 'white'
            break;
        case 3 :
            btn[2].style.backgroundColor = 'white'
            btn[3].style.backgroundColor = 'orange'
            btn[4].style.backgroundColor = 'white'
            break;
        case 4 :
            btn[2].style.backgroundColor = 'white'
            btn[3].style.backgroundColor = 'white'
            btn[4].style.backgroundColor = 'orange'
            break;
        case 5 :
            btn[5].style.backgroundColor = 'orange'
            btn[6].style.backgroundColor = 'white'
            break;
        case 6 :
            btn[5].style.backgroundColor = 'white'
            btn[6].style.backgroundColor = 'orange'
            break;
}

}

function pay_result() {
    let info = document.getElementById('pay_info2')
    info.style.visibility = 'visible'
}

function finish() {
     location.href="/index.html"
}
function cancel() {
    let modal = document.getElementById('pay_info')
    modal.style.visibility = 'hidden'
}
