var main = function() {
    $('.more-btn').on('click', () => {
      $('.more-menu').toggle();
    })
  
    $('.share').on('click', () => {
      $('.share-menu').toggle();
    })
  
    $('.notification').on('click', () => {
      $('.notification').toggleClass('active')
    })
  };
  
  $(document).ready(main);