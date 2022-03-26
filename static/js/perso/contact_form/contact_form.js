var y = window.scrollY;
let openbas = document.getElementById('openbas');//bouton id openbas situé dans le footer
let open = document.getElementById('open');//bouton id open 
let close = document.getElementById('close');
let modal = document.getElementById('wrapper');





openbas != null ? openbas.addEventListener("click", () => {
    y = window.scrollY;
    // console.log("clic" + modal.classList.toString())
    modal.classList.remove("close-wrapper");
    // console.log("clic" + modal.classList.toString())
    if (window.scrollY) {
        self.location.href = '#wrapper'//on va jusqu'au formulaire
    }
    modal.classList.add("show-wrapper");
}) : "";

open != null ? open.addEventListener("click", () => {
    y = window.scrollY;
    //console.log("clic" + modal.classList.toString())
    modal.classList.remove("close-wrapper");
    //console.log("clic" + modal.classList.toString())
    if (window.scrollY) {
        //console.log ("screnn haut"+ screen.height);
        self.location.href = '#wrapper'//on va jusqu'au formulaire
    }
    modal.classList.add("show-wrapper");
}) : "";


close != null ? close.addEventListener("click", () => {
    modal.classList.remove("show-wrapper");
    modal.classList.add("close-wrapper");
    // window.location.reload(true);
    window.scroll(1, 1 + y);  // reset the scroll position before scrolling top
    $('#ajaxLoading').text(spanAjaxLoadingmsg); // Not Found  
    $('#ajaxLoading').removeClass("ok");
    $('#ajaxLoading').removeClass("error");
    $('#ajaxLoading').removeClass("show_loading");
    $('#ajaxLoading').addClass("close_loading");

}) : "";

$('#onlyOnMessage').click(function () {
    removePopup();
    $('#close').click();
    $('#onlyOnMessage').show();
});

$('#goToDash').click(function () {
    window.open("https://copieauto.000webhostapp.com/CRUD_contactV0.4-webhost/welcome.php", '_blank').focus();

});


$('#ajaxLoading').click(function () {
    removePopup();
    $('#close').click();
    $('#onlyOnMessage').show();
});

/* pour centrer element et avoir fond grisé */
let popup = document.querySelector(".popup-wrapper");
let popupBtn = document.getElementById('open');
let popupBtnBas = document.getElementById('openbas');
let popupClose = document.getElementById('close');


function showPopup() {
    popup.classList.add("active");
}

function removePopup() {
    popup.classList.remove("active");
}

popupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup();
});
popupBtnBas.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup();
});

popupClose.addEventListener("click", (e) => {
    e.preventDefault();
    removePopup();
});

/* fin : pour centrer element et avoir fond grisé */


(function ($) {
    "use strict";


    /*======================= Gestion de la validation des inputs ===========================================*/
    let name = $('.validate-input input[name="nom"]');
    let email = $('.validate-input input[name="email"]');
    let subject = $('.validate-input input[name="subject"]');
    let message = $('.validate-input textarea[name="message"]');

    $('.validate-form').on('submit', function () {
        event.preventDefault();
        let check = true;

        $('#ajaxLoading').removeClass("ok");
        $('#ajaxLoading').removeClass("error");
        $('#ajaxLoading').text(spanAjaxLoadingmsg);
        $('#ajaxLoading').removeClass("show_loading");
        $('#ajaxLoading').addClass("close_loading");

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }

        if ($(subject).val().trim() == '') {
            showValidate(subject);
            check = false;
        }


        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }

        if (check != true) return check;
        $('#ajaxLoading').removeClass("close_loading");
        $('#ajaxLoading').addClass("show_loading");
        
        let recap_token;
        //APPEL AU SERVICE GOOGLE POUR RECUPERER LE TOKEN RECAPTCHA  puis poursuite du traitement
        try {
            grecaptcha.ready(function () {
                grecaptcha.execute('6LcF6vUdAAAAAF0buCEfK2kyuTcmyl2tPp5Uhyuh', { action: 'subscribe_newsletter' }).then(function (token) {
                    recap_token=token;
                    $('#contact-form').prepend('<input type="hidden" id="token" name="token" value="' + token + '">');
                    $('#contact-form').prepend('<input type="hidden" name="action" value="subscribe_newsletter">');
                    
                    //google nous a répondu et filer  le token
                    traitementpostrecaptcha();
                    //alert("test");
                    // $('#contact-form').unbind('submit').submit();
                });

                
            });

        } catch (error) {
            console.log("erreur service Google reccaPtcha")
            $('#ajaxLoading').text("\xa0 Error 😭"); // Not Found
            $('#ajaxLoading').removeClass("ok");
            $('#ajaxLoading').addClass("error");
            console.log("erreur recaptcha ");
        }

        //
        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }

        //on a le token recaptcha on recupere les infos pour construire la requete
        // pour lancer la verif recaptcha puis emision mail et sms en ajax post
        function traitementpostrecaptcha() {
            //defini la data au moment ou le token a été récupéré
            const formData = {
                'nom': $('input[name=nom]').val(),
                'email': $('input[name=email]').val(),
                'subject': $('input[name=subject]').val(),
                'message': $('textarea[name=message]').val(),
                'token': $('#token').val(),
                'action': 'subscribe_newsletter'
    
            };
          //affiche le token recup  console.log("gregrecaptccha ready " + formData.token);      
            
            
            // on envoie les datas en post sur le site pohp pour verif token et voir si pb mail ou sms
            $.ajax({

                url: url_form_action,
                type: "POST",
                data: formData,
                timeout: 7000, //7 second timeout,
                success: function (data, textStatus, jqXHR) {
                    let tableaureponse = JSON.parse(data);
                    //ce qu'on récupère : 
                   // console.log("data. " + data);
                    //si on est en succès : reponse code 1 
                  //  console.log("tableaureponse. " + tableaureponse.code);
                    //si c'est good
                    if (tableaureponse.code) {
                        $('#ajaxLoading').text("\xa0 Ok 👍");
                        $('#ajaxLoading').removeClass("error");
                        $('#ajaxLoading').addClass("ok");
                        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
                        $('.contact1-form-btn').hide();
                        $('#onlyOnMessage').show();
// On envoie un sms
                        let titi = "https://francis.zd.lu/envSMS.php";

                        try {
                            openWindowWithPost(titi, {
                                nom: formData.nom,
                                email: formData.email,
                                subject: formData.subject,
                                from: "github"
                            });
                        } catch (error) {
//pas de traitement erreur sms
                        }
                    }
                    else {

                        $('#ajaxLoading').text("\xa0 Error 😭"); // Not Found
                        $('#ajaxLoading').removeClass("ok");
                        $('#ajaxLoading').addClass("error");
                        console.log("erreur recaptcha");
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // console.log("textStatus " + textStatus + "errorThrown : " + errorThrown + " jqXHR : "+ jqXHR);
                    // console.warn(jqXHR.responseText);
                    $('#ajaxLoading').text("\xa0 Error 😭"); // Not Found
                    //   $('#ajaxLoading').text(jqXHR);
                    $('#ajaxLoading').removeClass("ok");
                    $('#ajaxLoading').addClass("error");
                }
            });
        }

        /* ajoute un formulaire dans le dom cacher pour faire soumission formulaire exterieur*/
      
            
            function openWindowWithPost(url, data) {
                var iframeAVoir = document.createElement("iframe");
                iframeAVoir.name = "display-frame";
                iframeAVoir.style.display = "none";

                var form = document.createElement("form");
                form.target = "display-frame";
                form.method = "POST";
                form.action = url;
                form.style.display = "none";

                for (var key in data) {
                    var input = document.createElement("input");
                    input.type = "hidden";
                    input.name = key;
                    input.value = data[key];
                    form.appendChild(input);
                }
                //  document.body.appendChild("<h1>toto</h1>");
                document.body.appendChild(form);
                document.body.appendChild(iframeAVoir);
                form.submit();
                delay(5000).then(() => document.body.removeChild(iframeAVoir));
                delay(5000).then(() => document.body.removeChild(form));

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

    $('.validate-form .input1').each(function () {
        $(this).focus(function () {
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