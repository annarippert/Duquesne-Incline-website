
//validate contact form and checking if inputs are okay
function validate(){
    var txtDob = $("#date").val();
    var dob = new Date(txtDob);
    if(dob <= new Date()){
        alert("Please select a valid day to visit.");
        return false;
    }
    var phone = $("#phone").val();
    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number is not valid or not in a valid format.");
        return false;
    }
    var zCode=$("#zipCode").val();
    if(zCode.length!=5 || isNaN(zCode)){
        alert("Zip Code is not valid or not in a valid format.");
        return false;
    }
    var email=$("#email").val();
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(mailformat)){
        alert("You have entered an invalid email address!");
        return false;
        
    }
    alert("You successfully registered for a ticket!");
    return true;}
