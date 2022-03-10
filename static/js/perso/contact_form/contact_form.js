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
   //console.log ("screnn haut"+ screen.height);
    self.location.href='#wrapper'//on va jusqu'au formulaire
  }
  modal.classList.add("show-wrapper"); 
}) : "";


close!=null ? close.addEventListener("click", () => {
  modal.classList.remove("show-wrapper");
  modal.classList.add("close-wrapper"); 
   // window.location.reload(true);
  window.scroll(1, 1+y);  // reset the scroll position before scrolling top
  $('#ajaxLoading').text(spanAjaxLoadingmsg); // Not Found  
  $('#ajaxLoading').removeClass("ok");
  $('#ajaxLoading').removeClass("error");
  $('#ajaxLoading').removeClass("show_loading");
  $('#ajaxLoading').addClass("close_loading");

}): "";


(function ($) {
  "use strict";

  
  /*======================= Gestion de la validation des inputs ===========================================*/
  let name = $('.validate-input input[name="nom"]');
  let email = $('.validate-input input[name="email"]');
  let subject = $('.validate-input input[name="subject"]');
  let message = $('.validate-input textarea[name="message"]');

  $('.validate-form').on('submit',function(){
    event.preventDefault();
    let check = true;

    $('#ajaxLoading').removeClass("ok");
    $('#ajaxLoading').removeClass("error");
    $('#ajaxLoading').text(spanAjaxLoadingmsg);
    $('#ajaxLoading').removeClass("show_loading");
    $('#ajaxLoading').addClass("close_loading");

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

  if (check!=true) return check;
  $('#ajaxLoading').removeClass("close_loading");
  $('#ajaxLoading').addClass("show_loading");

 var formData = {
    'nom'     : $('input[name=nom]').val(),
    'email'    : $('input[name=email]').val(),
    'subject'  : $('input[name=subject]').val(),
    'message'  : $('textarea[name=message]').val()
};

//console.log("Envoi de votre message, "+formData.nom+", veuillez patienter "+formData.email);

//$('#ajaxLoading').text("-"+formData.nom+"-"); // Not Found
console.log("formData "+formData);
try {
  $.ajax({
      
   // url : "https://copieauto.000webhostapp.com/formulaire/mail.php",
   url : url_form_action,
   type: "POST",
   data : formData,
   timeout:7000, //7 second timeout,
   success: function(data, textStatus, jqXHR)
   {
      //  console.log("data.message" +data.message);
       $('#ajaxLoading').text("\xa0 Ok 👍");
       $('#ajaxLoading').removeClass("error");
       $('#ajaxLoading').addClass("ok");
       $('#contact-form').closest('form').find("input[type=text], textarea").val("");
   },
   error: function (jqXHR, textStatus, errorThrown)
   {
       $('#ajaxLoading').text("\xa0 Error 😭"); // Not Found
    //   $('#ajaxLoading').text(jqXHR);
    $('#ajaxLoading').removeClass("ok");
    $('#ajaxLoading').addClass("error");
   }
});
} catch (error) {
  $('#ajaxLoading').text("\xa0 - Error - 😭"); 
  $('#ajaxLoading').removeClass("ok");
   $('#ajaxLoading').addClass("error");
}

/* 
{{ if site.Params.contact_form.url }}
      {{site.Params.contact_form.url}}
    {{ else  }}
     "404.html"
    {{ end }} 
*/

   //   return check;

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

