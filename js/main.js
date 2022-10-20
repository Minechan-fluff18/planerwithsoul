let count = 1;
function Menu() {
  document.querySelector('#menu').classList.toggle('menu');
  document.querySelector('#menu').classList.toggle('menuvis');
  const link = document.querySelector('#menubtn a');
  let text;
  /*
  if(count){
    text = 'Скрыть';
    count = 0;
  }else{
    text = 'Показать еще';   
    count = 1;
  }
  */
  link.innerText = text;    
}
  document.querySelector('#menubtn').addEventListener('click', Menu);