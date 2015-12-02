// clone the marked up html article in the html and use it for the further posts
blog.makeNewIndex();
blog.toHTML();
$( Util.atLoadFunction );
$('nav').on('click', function(event) {
  event.preventDefault();
  if(event.target.className == 'aboutMeNav') {
    $('.aboutme').show();
    $('article').hide();
  }

  if (event.target.className == 'home') {
    Util.makeItReady();
  }

}); //register clicks on nav
