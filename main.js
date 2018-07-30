
var contactBtn = document.getElementById('contact-btn');
var form = document.getElementById('contactForm');
var skillsIcons = document.getElementById('skillsIcons')
window.sr = ScrollReveal({reset:true});


contactBtn.addEventListener('click', function(){
  contactBtn.className += ' fadeOut';
  setTimeout(function(){
    form.className = 'centeredColumn fadeIn'
  }, 300)
})

sr.reveal('.skillsIcon', {container: skillsIcons}, 50);
