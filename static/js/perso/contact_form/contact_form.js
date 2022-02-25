var y = window.scrollY;
let openbas= document.getElementById('openbas');
let open = document.getElementById('open');
let close = document.getElementById('close');
let modal = document.getElementById('wrapper');

openbas!=null ? openbas.addEventListener("click", () => {
  y = window.scrollY;
    modal.classList.remove("close-wrapper");
    if (window.scrollY) {  
      self.location.href='#wrapper'//on va jusqu'au formulaire
    }
    modal.classList.add("show-wrapper"); 
}) : "";
 
open!=null ? open.addEventListener("click", () => {
  y = window.scrollY;
  modal.classList.remove("close-wrapper");
  if (window.scrollY) {  
    console.log ("screnn haut"+ screen.height);
    self.location.href='#wrapper'//on va jusqu'au formulaire
  }
  modal.classList.add("show-wrapper"); 
}) : "";


close!=null ? close.addEventListener("click", () => {
  modal.classList.remove("show-wrapper");
  modal.classList.add("close-wrapper"); 
   // window.location.reload(true);
  window.scroll(1, 1+y);  // reset the scroll position before scrolling top
}): "";


(function ($) {
  "use strict";

  
  /*======================= Gestion de la validation des inputs ===========================================*/
  let name = $('.validate-input input[name="name"]');
  let email = $('.validate-input input[name="email"]');
  let subject = $('.validate-input input[name="subject"]');
  let message = $('.validate-input textarea[name="message"]');


  $('.validate-form').on('submit',function(){
    let check = true;

      if($(name).val().trim() == ''){
          showValidate(name);
          check=false;
      }

      if($(subject).val().trim() == ''){
          showValidate(subject);
          check=false;
      }


      if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
          showValidate(email);
          check=false;
      }

      if($(message).val().trim() == ''){
          showValidate(message);
          check=false;
      }

      return check;
  });


  $('.validate-form .input1').each(function(){
      $(this).focus(function(){
         hideValidate(this);
     });
  });

  function showValidate(input) {
    let thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    let thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
  
  

})(jQuery);

  /*=========================== Animation de l'image =======================================*/

$('.js-tilt').tilt({
  scale: 1.2
})