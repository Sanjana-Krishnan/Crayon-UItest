/* lost your password transition and validation */
$("#loginbtn").click(function(){
  const email = $('#inputEmail').val();
  var regex1= new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  const pw=$("#inputPassword").val();
  var regex2 = new RegExp(/^(.*[A-Z].*)$/);
  if(email==""){
    $('#inputEmail').css('border-color','red');
    alert("Do not leave Email field empty");
  }
  else if(regex1.test(email)==false){
    $('#inputEmail').css('border-color','red');
    alert("Invalid Email");

  }
  else if(pw==""){
    $('#inputPassword').css('border-color','red');
    alert("Do not leave Password field empty");
  }
  else if(regex2.test(pw)==false || pw.length<5){
    $('#inputPassword').css('border-color','red');
    alert("Password should contain atleast 5 characters with minimum one uppercase alphabet.");
  }
  else{
    alert("Signed in!");
    location.reload();
  }
});


$(".anc1").click(function(){
  $(".login").hide();
  $(".forgotpw").show();
});


/* back to login transition*/

$("#btl").click(function(){
  $(".forgotpw").hide();
  $(".login").show();
});

$("#btl2").click(function(){
  $(".magic").hide();
  $(".login").show();
});

/* reset button */
$("#reset").click(function(){
  const em = $('#inputEmail2').val();
  console.log(em);
  if(em==""){
    $('#inputEmail2').css('border-color','red');
    alert("Do not leave Email field empty");
  }
  else{
  $('#fitin').text(em);
  $('#inputEmail2').css('border-color','black');
  $('#inputEmail2').val("");
  $(".forgotpw").hide();
  $(".magic").show();
  }
});

/* Rfa link*/

$("#rqst").click(function(){
  $(".login").hide();
  $(".rfora").show();
});

$("#ask").click(function(){
  const nm= $("#fullname").val();
  const ema= $("#inputEmail3").val();
  if(nm==""){
    alert("Do not leave Name field empty");
    $('#fullname').css('border-color','red');
  }
  else if(ema==""){
    alert("Do no leave Email field empty");
    $('#inputEmail3').css('border-color','red');
  }

  else{
    $('#fitname').text(nm);
    $(".rfora").hide();
    $(".admin").show();
    }
});
