blog.makeNewIndex();
blog.toHTML();

$( Util.atLoadFunction );

//register clicks on nav
$('nav').on('click', function(event) {
  event.preventDefault();
  if(event.target.className == 'aboutMeNav') {
    $('.aboutMe').show();
    $('article').hide();
  }
  if (event.target.className == 'home') {
    Util.makeItReady();
  }
});

$('article').on('click', '.readOn', function(event) {
  event.preventDefault();
  $(this).parent().find('p').show().slideDown();
  $(this).hide();
});
