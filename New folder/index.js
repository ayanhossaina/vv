 
 var resultField =  $("#result");
 
 function insertNumber(number){
var exostingnumber =resultField.val();


resultField.val(exostingnumber+number);


 }

 function  clearResult(){

    resultField.val('');
 }
function calculate(){
  var result = eval(resultField.val());

  resultField.val(result);

}
  function deleteNumber(){

var  presentvalue = resultField.val();

if(presentvalue!=''){
    resultField.val(presentvalue.val().slice(0,-1));

}





  }