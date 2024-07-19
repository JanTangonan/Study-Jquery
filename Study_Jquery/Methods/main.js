$(document).ready(() => {
 
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
      $('.nav-menu').show();
      $('.menu-button').animate({
        fontSize: '24px'
      }, 200)
      $('.menu-button').addClass('button-active')
      $('.nav-menu').removeClass('hide')
    })
    
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
      $('.menu-button').removeClass('button-active')
      $('.menu-button').animate({
        fontSize: '18px'
      }, 200)
    })
    
    //toogleClass()
    // $('.menu-button').on('click', () => {
    //     $('.nav-menu').toggleClass('hide');
    //     $('.menu-button').toggleClass('button-active');
    //   })  
  }); 
  