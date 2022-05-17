function myFunction(x) {
    x.classList.toggle("change");
  }
  // must be an array, could have only one element

let visibilityIds = ['#counters_1','#counters_2','#counters_3'];
// default counter class
let counterClass ='.counter';
// default animation speed
let defaultSpeed = 3000;


document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");

button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
fileInput.addEventListener( "change", function( event ) {
    the_return.innerHTML = this.value;
});

function heartReact(){
  var i = 0;
  var x = document.getElementById('heart-1');
  var y = document.getElementById('reacts').innerHTML;
  var z = parseInt(y);
  if(x.style.display === 'block'){
  document.getElementById('heart-1').style.display = 'none';
  document.getElementById('heart-2').style.display = 'block';
  return document.getElementById('reacts').innerHTML = z+1;
  }else{
      document.getElementById('heart-1').style.display = 'block';
      document.getElementById('heart-2').style.display = 'none';
      return document.getElementById('reacts').innerHTML = z-1;
  }
}
