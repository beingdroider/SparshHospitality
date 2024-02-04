$(document).ready(function () {

          $(document).on('click', '.BtnCTCSubmitForm2', function (e) {
              e.preventDefault();
              var NameText = $(this).closest('form').find('.SendContactName');
              var EmailText = $(this).closest('form').find('.SendContactEmail');
              var MobText = $(this).closest('form').find('.SendContactMob');
              var ServiceText = $(this).closest('form').find('.Services option:selected').val();
              var OutletText = $(this).closest('form').find('.Outlet option:selected').val();
              //alert(Services);

              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              if (NameText.val() === "") {
                  alert('Please fill Name.');
                  $(this).closest('form').find('.SendContactName').focus();
                  return false;
              }

              if (EmailText.val() === "") {
                  alert('Please fill Email.');
                  $(this).closest('form').find('.SendContactEmail').focus();
                  return false;
              } else if (!re.test(EmailText.val())) {
                  alert('Invalid email.');
                  $(this).closest('form').find('.SendContactEmail').focus();
                  return false;
              }

              var pattern = "^[0-9]{10}$";
              if (MobText.val() === "") {
                  alert('Please fill Mobile number.');
                  $(this).closest('form').find('.SendContactMob').focus();
                  return false;
              } else if (!MobText.val().match(pattern)) {
                  alert('Invalid Mobile number.');
                  $(this).closest('form').find('.SendContactMob').focus();
                  return false;
              }

              if (OutletText === "") {
                  alert('Please select outlet.');
                  $(this).closest('form').find('.Outlet').focus();
                  return false;
              }
              if (ServiceText === "") {
                  alert('Please select services.');
                  $(this).closest('form').find('.Services').focus();
                  return false;
              }

              var success = "";

              var posting = $.post("ContactUsMail2.aspx", {
                  Name: NameText.val(),
                  Email: EmailText.val(),
                  Services: ServiceText,
                  Outlet: OutletText,
                  Mob: MobText.val()
              });

              posting.done(function (data) {

                  var content = $(data);

                  if (data == "success") {

                      NameText.val('');
                      EmailText.val('');
                      MobText.val('');
                      $(this).closest('form').find('.Outlet').val('');
                      $(this).closest('form').find('.Service').val('');
                      alert("Thank you for contacting us. We will get back to you very soon.");
                  }
              });
          });

      });


$(document).ready(function () {

                $(document).on('click', '.BtnCTCSubmitForm', function (e) {

                    e.preventDefault();


                    var NameText = $(this).closest('form').find('.SendContactName');
                    var EmailText = $(this).closest('form').find('.SendContactEmail');
                  var SubjectText = $(this).closest('form').find('.SendContactSubject');
                    var MobText = $(this).closest('form').find('.SendContactMob');
                    var MSGText = $(this).closest('form').find('.SendContactMSG');
                    

                    //alert(Services)

                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    if (NameText.val() === "") {
                        alert('Please fill Name.');
                        $(this).closest('form').find('.SendContactName').focus();
                        return false;
                    }

                    if (EmailText.val() === "") {
                        alert('Please fill Email.');
                        $(this).closest('form').find('.SendContactEmail').focus();
                        return false;
                    }
                    else if (!re.test(EmailText.val())) {
                        alert('Invalid email.');
                        $(this).closest('form').find('.SendContactEmail').focus();
                        return false;
                    }
                  
                    if (SubjectText.val() === "") {
                        alert('Please fill Subject.');
                        $(this).closest('form').find('.SendContactSubject').focus();
                        return false;
                    }
                  
                    var pattern = "^[0-9]{10}$";
                    if (MobText.val() === "") {
                        alert('Please fill Mobile number.');
                        $(this).closest('form').find('.SendContactMob').focus();
                        return false;
                    }
                    else if (!MobText.val().match(pattern)) {
                        alert('Invalid Mobile number.');
                        $(this).closest('form').find('.SendContactMob').focus();
                        return false;
                    }

                   
                    if (MSGText.val() === "") {
                        alert('Please fill message.');
                        $(this).closest('form').find('.SendContactMSG').focus();
                        return false;
                    }



                    var success = "";

                    var posting = $.post("ContactUsMail.aspx", { Name: NameText.val(), Email: EmailText.val(), 
                   Subject: SubjectText.val(), Mob: MobText.val(), MSG: MSGText.val()});

                    posting.done(function (data) {

                        var content = $(data);

                        if (data == "success") {

                            NameText.val('');
                            EmailText.val('');
                           SubjectText.val('');
                           MobText.val('');
                            MSGText.val('');
                           

                            alert("Thank you for contacting us. We will get back to you very soon.");
                        }
                    });
                });

            });