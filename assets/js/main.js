function sidebar1(y){
  y.classList.toggle('change');
  var x = document.getElementById('sidebar1');
  if(x.style.display === 'none'){
      x.style.display = 'block';
  }else{
      x.style.display = 'none';
  }
}
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

function comment() {
    var x = document.getElementById("comment-box");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function password() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function cpassword() {
    var x = document.getElementById("cpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  jQuery('.validate-form').validate({
    rules : {
      password : {
        minlength : 5
      },
      cpassword : {
        minlength : 5,
        equalTo : "#password"
      }
    }
  });


  
