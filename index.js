let form = document.forms.login
let btn = document.querySelector('.btn2')
let inps = document.querySelectorAll('.input')


form.onsubmit = (event) => {
    event.preventDefault();

    inps.forEach(item => {
        if (item.value.length > 0) {
            item.classList.remove('eror')
        } else {
            item.classList.add('eror')
        }
    });

    let user = {}

    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value

    })
    console.log(user);


}





