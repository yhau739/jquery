$(document).ready(function(){
  $("#password").on("change keyup paste", function(){
    $(".progress-con").css("display", "block");
    $("#result").html(checkStrength($("#password").val()));
  });

  //function to delete exisiting classes in order to add new ones
  function deleteClasses(){
    $(".progress-bar").removeClass("short");
    $(".progress-bar").removeClass("weak");
    $(".progress-bar").removeClass("moderate");
    $(".progress-bar").removeClass("strong");
    $(".progress-bar").removeClass("very-strong");
  }

  function checkStrength(password) {
    // declare variables
    let strength = 0;

    //if uppercase letter exists
    const uppercase = new RegExp("[A-Z]");

    //3 uppercase characters in any position
    const uppercases = new RegExp(".*[A-Z].*[A-Z].*[A-Z]");

    //if number exists
    const numbers = new RegExp("[0-9]"); 

    //if special characters exist 
    const specialChar = new RegExp("[!,%,&,@,#,$,^,*,?,_,~]");

    //2 consecutive special chracters
    // const specialChars = new RegExp("[!,%,&,@,#,$,^,*,?,_,~]{2,}");

    //2 special characters in any position 
    const specialChars = new RegExp(".*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~]");

    //password length too short not eligble for registration
    if (password.length < 6) {
      deleteClasses();
      $(".progress-bar").addClass("short");
      return "Password is Too Short";
    }
    else{
      //if password is long enough
      if (password.length >= 6 && password.length <= 11) {
        strength += 1;
      }
      //if password has more than 12 characters
      else if (password.length > 11) {
        strength += 2;
      } 
      //check if password has uppercase or lowercase characters
      if (uppercase.test(password)) {
        strength += 1;
      }
      if (uppercases.test(password)) {
        strength += 1;
      }
      //check if password has numbers
      if (numbers.test(password)) {
        strength += 1;
      }
      //check if password has special characters
      if (specialChar.test(password)) {
        strength += 1;
      }
      //check if password has two special characters
      if (specialChars.test(password)) {
        strength += 1;
      }

    }

    //check password strength
    if (strength < 4){
      deleteClasses();
      $(".progress-bar").addClass("weak");
      return "Password is Weak";
    }
    else if (strength >= 4 && strength < 6){
      deleteClasses();
      $(".progress-bar").addClass("moderate");
      return "Moderate Strength";
    }
    else if (strength > 5 && strength <= 6){
      deleteClasses();
      $(".progress-bar").addClass("strong");
      return "Strong Password";
    }
    else if (strength > 6){
      deleteClasses();
      $(".progress-bar").addClass("very-strong");
      return "Very Strong Password";
    }
  }
});