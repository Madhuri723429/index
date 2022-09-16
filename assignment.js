
   let dob=document.getElementById('dob');
   dob.addEventListener('input',()=>validate(dob))
   function validate(element)
{
   enteredValue = $get('<%=ui_txtDOB.ClientID %>');;
   var enteredAge = getAge(enteredValue.value);
   if( enteredAge > 18 && enteredAge < 55 ) {
   alert("DOB not valid");
   enteredValue.focus();
}
