//blog javascript

$(document).ready( function() {
  var $posts = $('.post-list article');
  var $filters = $('#filters li a');
  var $categories = $('#categories li a');
  var $introductions = $('#introductions a');
  var displayed = ['.post', ''];
  function Sort(target) {
    $posts.not(displayed.join('')).stop().slideUp(500, 'easeOutExpo');
    $posts.filter(displayed.join('')).stop().slideDown(500, 'easeOutExpo');
    target.addClass('on');
    target.parent().siblings().find('a').removeClass('on');

  }

  $introductions.click( function() {
    if (!$(this).hasClass('on')) {
      $posts.find('.post-introduction').slideToggle(500, 'easeOutExpo');
      $introductions.toggleClass('on');
    }
  });

  $filters.click( function() {
    displayed[0] = '.' + $(this).data('view');
    $filters.toggleClass('on');
    Sort($(this));
  });

  $categories.click( function() {
    var view = ($(this).data('view')) ? '.' + $(this).data('view') : '';
    displayed[1] = view;
    Sort($(this));
  });
});

//timeline javascript

$(document).ready(function(){
 function radioClickResponse(){
  this.checked = false;
}
var radioButton = document.querySelectorAll(".radio");
for (var i = 0; i < radioButton.length; i++) {
  document.querySelector("#" + radioButton[i].id + "~ .content").addEventListener("click", radioClickResponse.bind(radioButton[i]));  
}

}); 

//contact javascript

$(document).ready(function(){
  $('.contactLogo').hide();
});
$(window).load(function(){

  $('.contactLogo').show();

  var facebookPos = $('#facebook').position();
  var linkedinPos = $('#linkedin').position();
  var emailPos = $('#email').position();
  var resumePos = $('#resume').position();
  var githubPos = $('#github').position();
  var rashna = $('#contactLogoMain').position();

  $('.contactLogo').css({
    position: 'absolute',
    zIndex: '1',
    marginRight: '0',
    marginLeft: '0',
    top: rashna.top + 56
  }); 

  setTimeout(function() {
    $('#facebook').animate({
      top: facebookPos.top + 5,
      left: facebookPos.left - 145
    }, 300);
  }, 250);
  setTimeout(function() {
    $('#facebook').animate({
      top: facebookPos.top,
      left: facebookPos.left - 140
    }, 100);
  }, 800);

  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top + 5,
      left: linkedinPos.left - 145
    }, 300);
  }, 650);
  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top,
      left: linkedinPos.left - 140
    }, 100);
  }, 1200);

  setTimeout(function() {
    $('#email').animate({
      top: emailPos.top + 5,
      left: emailPos.left - 140
    }, 300);
  }, 1050);
  setTimeout(function() {
    $('#email').animate({
      top: emailPos.top,  
      left: emailPos.left - 140
    }, 100);
  }, 1600);

  setTimeout(function() {
    $('#resume').animate({
      top: resumePos.top + 5,
      left: resumePos.left - 135
    }, 300);
  }, 1450);
  setTimeout(function() {
    $('#resume').animate({
      top: resumePos.top,
      left: resumePos.left - 140
    }, 100);
  }, 2000);

  setTimeout(function() {
    $('#github').animate({
      top: githubPos.top + 5,
      left: githubPos.left - 135
    }, 300);

  }, 1900);
  setTimeout(function() {
    $('#github').animate({
      top: githubPos.top,
      left: githubPos.left - 140
    }, 100);
  }, 2450);

});
