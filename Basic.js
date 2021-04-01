
//Restart game restar_button

var r = document.querySelector('#b');

//grab all the square
var sq = document.querySelectorAll('td');


//clear all the squares
function ClearBoard(){
  for(var i=0 ;i < sq.length;i++){
    sq[i].textContent = '';

  }
}


 r.addEventListener("click",ClearBoard);
function changemarker(){
  if(this.textContent===''){
    this.textContent='X';
  }else if(this.textContent==='X'){
    this.textContent='O';
  }else{
    this.textContent='';
  }
}
for(var j=0;j<sq.length;j++){
  sq[j].addEventListener('click',changemarker);
}
//Check the square number





// for loop to add event listerner to all the squares
