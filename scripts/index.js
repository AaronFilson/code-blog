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
  if (event.target.className == 'filterByAuthor') {
    var selectedAuthor = event.target.value;
    Util.filterArticles(selectedAuthor);
    //reset category filter
    $('.filterByCategory').value('');
  }
  if(event.target.className == 'filterByCategory') {
    var selectedCategory = event.target.value;
    Util.filterArticles(selectedCategory);
    //reset author filter
    $('.filterByAuthor').value('');
  }
});

$('article').on('click', '.readOn', function(event) {
  event.preventDefault();
  $(this).parent().find('p').show().slideDown();
  $(this).hide();
});
