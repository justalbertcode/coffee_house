const submitBtn = document.getElementById('subscribeBtn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const subs__input = document.querySelector('.subs__input');


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


function isEmailValid(value){
    return EMAIL_REGEXP.test(value)
}

function onInput() {
  if (isEmailValid(subs__input.value)) {
    subs__input.style.borderColor = 'green';
    return true;
  } else {
    subs__input.style.borderColor = 'red';
    return false;
  }
}

subs__input.addEventListener('input', onInput);



subscribeBtn.addEventListener('click', function(){
  if(!subs__input.value || !isEmailValid(subs__input.value)){
    alert('Enter your email please')
  } else{
    modal.classList.add("open-modal")
  }
})


closeBtn.addEventListener('click', function(){
  modal.classList.remove("open-modal")
  subs__input.value = '';
})


modal.addEventListener('click', function(){
  modal.classList.remove("open-modal")
  subs__input.value = '';
})


