$(document).ready(() => {
    $('.menu').on('mouseenter', () => {
      $('.nav-menu').slideDown(400);
    }).on('mouseleave', () => {
      $('.nav-menu').slideUp(400);
    })
  
    $('.btn').on('mouseenter', (event) => {
      $(event.currentTarget).addClass('btn-hover');
    }).on('mouseleave', (event) => {
      $(event.currentTarget).removeClass('btn-hover');
    })
  
    $('.postText').on('keyup', (event) => {
      let post = $(event.currentTarget).val();
      let remaining = 140 - post.length;

      if (remaining <= 0) {
        $('.wordcount').addClass('red')
      } else {
        $('.wordcount').removeClass('red')
      }
      $('.characters').html(remaining);
    })
    
    $('.postText').focus();
  }); 
  