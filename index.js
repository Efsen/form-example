let userform = document.querySelector('#userForm')
userform.addEventListener('submit', formHandler)
const alertDom = document.querySelector('#alert')

const ALERT = (title,message,danger) =>`<div class="alert alert-${danger} alert-dismissible fade show" role="alert"><strong>${title}</strong> ${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
function formHandler(event){
    event.preventDefault()
    const userName = document.querySelector("#username")
    const userGrade = document.querySelector("#score")
    if(userName.value && userGrade.value){
        if(userGrade.value >= 0 && userGrade.value <= 100){
            additem(userName.value , userGrade.value )
            userName.value = ""
            userGrade.value = ""
        }
    } else {
        alertDom.innerHTML = ALERT("Hey","Hatalı Eksik Bilgi Girdin","danger")
    }
}

let userList = document.querySelector('#user-list')
const additem = ( Name,Grade,color )=>{
    let liDom = document.createElement("li")
    liDom.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    liDom.innerHTML = `${Name}<span id="badge" class="badge btn-primary rounded-pill">${Grade}</span> `
    userList.append(liDom) 
}   
