$(document).ready(() => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');
  
    const $dropDownMenu = $('.dropdown-menu');
  
    const $cartMenu = $('#cartMenu');
    const $accountMenu = $('#accountMenu');
    const $helpMenu = $('#helpMenu');
  
    $cart.on('click', () => {
      $cartMenu.show(); 
    })
  
    $account.on('click', () => {
      $accountMenu.show();
    })
  
    $help.on('click', () => {
      $helpMenu.show();
    })
  
    $dropDownMenu.on('mouseleave', () => {
      $dropDownMenu.hide();
    })
  
    // $('#cart').on('click', () => {
    //   $('#cartMenu').toggle();
    // })
  })