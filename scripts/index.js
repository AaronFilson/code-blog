// clone the marked up html article in the html and use it for the further posts
blog.makeNewIndex();
blog.toHTML();
$( Util.atLoadFunction );
$('nav').on('click', function(event) {
  event.preventDefault();
  if(event.target.className == 'aboutMeNav') {
    $('.aboutMe').show();
    $('article').hide();
  }

  if (event.target.className == 'home') {
    Util.makeItReady();
  }

}); //register clicks on nav
$('article').on('click', '.readOn', function(event) {
  event.preventDefault();
  $(this).parent().find('p').show().slideDown();
  $(this).hide();
});
