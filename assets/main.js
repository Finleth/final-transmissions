$(document).ready(init)


function init(){
  $('.open').on('click', function(){ //go to stories to check, leaves landing page
    $('#landing-container').addClass('ghostOut').fadeOut(3000)
    setTimeout(function(){
      $('#landing-container').removeClass('ghostOut')
    },3100)
  });
  $('.experience').on('click', function(){ //go to map and camera
    if(window.outerWidth < 750 ){
      window.open('map.html')
    }else{
      console.log('modal open')
      // $('.info').fadeIn();
    }
  })
  $('.story').click(function(){ //shows the story summary
    $('.caption', this).slideDown('linear');
  })
  $('.story').mouseleave(function(){//hidesthe story summary
    $('.caption',this).slideUp('linear');
  });
  $('.signUp').on('click',function(){
    $('.formSign').fadeIn()
  });
  $('.logIn').on('click',function(){
    $('.formLog').fadeIn()
  });
  $('.cancel').on('click',function(){
    $(this).parent().parent().addClass('ghostOut').fadeOut(2500)
    setTimeout(function(){
        $('.formSign, .formLog').removeClass('ghostOut')
    },3100);
  });
  $('.btnLog').on('click',function(){
    $(this).parent().parent().addClass('ghostOut').fadeOut(2500)
    setTimeout(function(){
        $('.formLog').removeClass('ghostOut')
    },3100);
    $('.open').fadeIn(4000);
    $('.signUp').fadeOut();
    $('.logIn').fadeOut();
  })
  $('.btnSign').on('click',function(){
    $(this).parent().parent().addClass('ghostOut').fadeOut(2500)
    setTimeout(function(){
        $('.formSign').removeClass('ghostOut')
    },3100);
    $('.open').fadeIn(4000);
    $('.signUp').fadeOut();
    $('.logIn').fadeOut();
  });
}
