var Util = {};

Util.makeItReady = function() {
  //hide the lower p, hide about and prep filters
  $('.aboutMe').hide();
  $('article').show();
  $('article .body :not(:first-child)').hide();
  $('.readOn').show();
  this.createFilterMenus(blog.artIndex);
};

Util.atLoadFunction = function() {
  //We are now ready
  Util.makeItReady(); //hide articles and prep filters
};

Util.filterArticles = function(filterValue) {
  //show all articles so we have filter selected articles shown
  $('article').hide();
  //Take the filterValue and use hide on not the filter articles
  $('article:contains("' + filterValue + '")').show().slideDown();
};

Util.createFilterMenus = function(currentArticles) {
  //beware the lack of data validation
  var tempAuth = [];
  var tempCat = [];
  for(var i = 0; i < currentArticles.length; i++) {
    //make a list of authors
    tempAuth[i] = currentArticles[i].author;
    //make a list of categories
    tempCat[i] = currentArticles[i].category;
  }
  //now that all are copied, find unique
  tempAuth.sort();
  tempCat.sort();
  authMenu = [];
  catMenu = [];
  var count = 0;
  authMenu[count] = tempAuth[0];
  for(var j = 1; j < tempAuth.length; j++) {
    if (authMenu[count] != tempAuth[j]){
      count++; //we found a new author, advance the counter, and assign the val
      authMenu[count] = tempAuth[j];
    }
  }

  var count2 = 0;
  catMenu[count2] = tempCat[0];
  for(var k = 1; k < tempCat.length; k++) {
    if (catMenu[count2] != tempCat[k]){
      count2++; //we found a new author, advance the counter, and assign the val
      catMenu[count2] = tempCat[k];
    }
  }

  //now we have the unique values for the authors and categories, make the menu
  for(var a = 0; a < authMenu.length; a++){
    authMenu[a] = '<option value="' + authMenu[a] + '">' + authMenu[a] + '</option>';
  }
  for(var b = 0; b < catMenu.length; b++) {
    catMenu[b] = '<option value="' + catMenu[b] + '">' + catMenu[b] + '</option>';
  }
  $('.filterByAuthor').append().html(authMenu);
  $('.filterByCategory').append().html(catMenu);
};

Util.holdNavclicks = $('nav').change(function(event) {
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
    $('.filterByCategory:first-child').attr('selected', 'selected');
  }
  if(event.target.className == 'filterByCategory') {
    var selectedCategory = event.target.value;
    Util.filterArticles(selectedCategory);
    //reset author filter
    $('.filterByAuthor:first-child').attr('selected', 'selected');
  }
});

Util.holdReadOnClicks = $('article').on('click', '.readOn', function(event) {
  event.preventDefault();
  $(this).parent().find('p').show().slideDown();
  $(this).hide();
});
