$(document).ready(() => {
  const $button = $('#button');
  const $menu = $('#menu');

  $menu.hide();

  $button.on('click', () => {
    $menu.slideToggle('fast');
  });

  $menu.on('mouseleave', () => {
    $menu.hide();
  });
  
});
