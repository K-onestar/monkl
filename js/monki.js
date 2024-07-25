$(document).ready(function(){
    recSlider();
    instaSlider();
    similarSlider();
    wishToggle();
    changeBigImage();
    forgotPWsection();
    signin();
    newAccount();
    resetPW();
    myInfo(); updateAccount(); addtoCart();
    EAcount(); deleteCartlist(); menulist(); tabmenu ();
});


function recSlider(){
    $('.rec-slider').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 300,
        slideHeight:390,
        slideMargin: 20,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        controls: true
      });
}
function instaSlider(){
    $('.insta-slider').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 400,
        slideHeight: 400,
        slideMargin: 20,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        controls: true
      });
}
function similarSlider(){
  $('.similar-slider').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 320,
      slideHeight:390,
      slideMargin: 60,
      moveSlides: 1,
      infiniteLoop: true,
      pager: false,
      controls: false
    });
}

function wishToggle() {
  $(".toggleAction").click(function(){
    $(this).toggleClass("active");
  });
}
  
function changeBigImage() {
  var target = $(".detailShot li");  
  var swapSrc = ''; 
  target.first().addClass("selected"); 
  target.click(function(){ 
    $(target).removeClass("selected"); 
    $(this).addClass("selected"); 
    swapSrc = $(this).children().attr("src"); 
    console.log(swapSrc); 
    $("#bigImage").attr("src",swapSrc);
  });
}

function forgotPWsection() {
  $("#forgotPWlink").click(function(event){
    event.preventDefault();
    $("#signin").hide();
    $("#forgotPW01").show();
  });
  $("#resetPWbtn").click(function(event){
    event.preventDefault();
    $("#forgotPW01").hide();
    $("#forgotPW02").show();
  });
  $("#cancelForgotPW01, #cancelForgotPW02").click(function(event){
    event.preventDefault();
    $("#forgotPW01, #forgotPW02").hide();
    $("#signin").show();
  });
}

function signin() {
  $("#signinBtn").click(function(event){
    event.preventDefault();
    location.href="index.html";
  });
}

function newAccount() {
  $('#createAccountBtn').click(function(event) {
    event.preventDefault();
    alert("Create Account Success");
    location.reload();
  });
}

function resetPW() {
  $("#resetPW").click(function(event){
    event.preventDefault();
    alert("Password Change Completed");
    location.href="sign_in.html";
  });
}

function myInfo() {
  $("#infoCorrection").click(function(event){
    event.preventDefault();
    $("#myInfo").hide();
    $("#myInfoCorrection").show();
  });
}

function updateAccount() {
  $('#updateAccount').click(function(event) {
    event.preventDefault();
    alert("Update Account Success");
    location.reload();
  });
}
function addtoCart(){
  $("[id^=addCart]").click(function(event){
    event.preventDefault();
    location.href="cart.html";
  });
}

function EAcount() {
  $('.countMinus').click(function(){
    var countNumb = $('#countNumb');
    var value = parseInt(countNumb.val(), 10);
    if (value > 1) {
      countNumb.val(value - 1);
    }
  });
  $('.countPlus').click(function(){
    var countNumb = $('#countNumb');
    var value = parseInt(countNumb.val(), 10);
    if (value < 99) {
      countNumb.val(value + 1);
    }
  });
}
function deleteCartlist() {
  $("#deleteBtn01").click(function(event){
    event.preventDefault();
    location.href="cart_empty.html";
  });
}


function menulist() {
  $("header nav li span").click(function(){
    var $currentOl = $(this).parent().find("ol");
    $("header nav li").not($(this).parent()).find("ol.active").removeClass("active");
    $currentOl.toggleClass("active");
  });
}

function tabmenu() {
  $(document).ready(function() {
    $("input[value='menu']").click(function() {
      $("header nav").addClass("active");
    });
    $("input[value='close']").click(function() {
      $("header nav").removeClass("active");
    });
  });
}

// ? 해상도에 따라서 class _mui 제거하는 방법