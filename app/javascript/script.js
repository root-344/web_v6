$(function() {
  $('.sign-up-btn').click(function() {
    $('#signup-modal').fadeIn(0);
  });
  $('.login-btn').click(function() {
    $('#login-modal').fadeIn(0);
  });
  $('.close-modal').click(function() {
    $('#signup-modal').fadeOut(0);
    $('#login-modal').fadeOut(0);
  });
});