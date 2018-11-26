
var contactBtn = document.getElementById('contact-btn');
var form = document.getElementById('contactForm');
var skillsIcons = document.getElementById('skillsIcons')

//fade out contact button
contactBtn.addEventListener('click', function(){
  contactBtn.className += ' hide';
  setTimeout(function(){
    form.className = 'centeredColumn fadeIn'
  }, 300)
})

//fade in elements on scroll
$(window).scroll( function(){ //scroll listener

  /* Check the location of each desired element */
  $('.hideme').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height() + 60;

    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},500);
    }
  }); 
});


