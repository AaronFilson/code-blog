blog.makeNewIndex();
blog.toHTML();

$( Util.atLoadFunction );

$('nav').change(function(myEvent) {
  myEvent.preventDefault();

  if((myEvent.target.className == 'filterByCategory') || (myEvent.target.className == 'filterByAuthor')) {
    Util.filterArticles(myEvent.target.value);
  }
});

$('.readOn').on('click', function(clickEvent) {
  clickEvent.preventDefault();
  $(this).parent().find('p').show().slideDown();
  $(this).hide();
});

$('nav').on('click', function(myEvent) {
  if(myEvent.target.className == 'aboutMeNav') {
    $('.aboutMe').show();
    $('article').hide();
  }
  if (myEvent.target.className == 'home') {
    Util.makeItReady();
  }
});
