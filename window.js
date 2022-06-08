const confirm =document.getElementById('confirm');
const prompt =document.getElementById('prompt');

function showAlert(){
  window.alert("Hello Alert World");
}

function showConfirm(){
  let text="";
  if(window.confirm("Press a Button!")){
    text ="You press OK";
  }
  else{
    text= "You pressed Cancel";
  }
  prompt.innerHTML="";
  confirm.innerHTML= text;
}

function showPrompt(){
  let person=window.prompt("Enter you name");
  let text;
  if(person=== null|| person== ""){
    text="User Cancelled the promt";
  }
  else{
    text="Hello " + person+ " how are you"
  }
  confirm.innerHTML="";
  prompt.innerHTML=text;
}