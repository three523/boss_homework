
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
    modal.style.visibility = 'visible'
}

function pay_result() {
    Swal.fire( {
        title: '결제 되었습니다',
        confirmButtonText: `확인`,
        }).then((result) => {
            document.getElementById('pay_info').visibility = "hidden"
            location.href="/index.html"
        })
}

function pay_result2() {
    Swal.fire( {
        title: '결제 되었습니다',
        confirmButtonText: `확인`,
        }).then((result) => {
            location.href="/index.html"
        })
}
function cancel() {
    let modal = document.getElementById('pay_info')
    modal.style.visibility = 'hidden'
}
