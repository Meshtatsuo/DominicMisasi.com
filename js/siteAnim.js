$(document).ready(function(){
   if ($(window).width() < 1280) {
    $('nav').removeClass('visible');
    $('#menuButton').addClass('visible');   
} else {
}
    $('.ui.embed').embed();
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function(){
    $('.button.closeModal').click(function(){
        
            $('.ui.modal')
                .modal({
                blurring: true
            })
                .modal('hide');
    });
});

$(function(){
    $('.button.euphoria').click(function(){
        
            $('#MODEuphoria')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});

$(function(){
    $('.button.beyondSkyrim').click(function(){
        
            $('#MODBeyondSkyrim')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});

$(function(){
    $('.button.ezSystems').click(function(){
        
            $('#MODeZSystems')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});

$(function(){
    $('.button.exMachina').click(function(){
        
            $('#MODExMachina')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});

$(function(){
    $('.button.massEffect').click(function(){
        
            $('#MODmassEffect')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});

$(function(){
    $('.button.ipadAir').click(function(){
        
            $('#MODipadAir')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});

$(function(){
    $('.button.indemnity').click(function(){
        
            $('#MODindemnity')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});

$(function(){
    $('.button.projectContingency').click(function(){
        
            $('#MODProjContingency')
                .modal({
                blurring: true
            })
                .modal('show');
    });
});