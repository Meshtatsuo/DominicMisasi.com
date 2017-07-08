$('.ui.form')
  .form({
    fields: {
      name: {
        identifier: 'fullName',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your name'
          }
        ]
      },
      emailAddress: {
        identifier: 'emailAddress',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your email address'
          }
        ]
      },
      message: {
        identifier: 'message',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a message'
          },
        ]
      },
    }
  })
$.ajax({
        url: "./bin/contact_me.php",
        type: "POST",
        data: {
            name: fullName,
            phone: phoneNumber,
            email: emailAddress,
            message: message
        },
    cache: false,
    success: function() {
        // Success message
       
        
        //clear form
        ('#contactForm').form('clear');
        
    },
    error: function() {
        // Failure Message
        
        //clear form
       // ('#contactForm').form('clear');
        
    },
 
;