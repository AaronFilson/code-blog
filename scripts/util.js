var Util = {};

Util.makeItReady = function() {
  //hide the lower p, hide about and prep filters
  $('.aboutMe').hide();
  $('article').show();
  $('article p:not(:first-child)').hide();
  $('.readOn').show();
  this.createFilterMenus(blog.artIndex);
};

Util.atLoadFunction = function() {
  //We are now ready
  Util.makeItReady(); //hide articles and prep filters
};

Util.filterArticles = function(filterValue) {
  //show all articles so we have filter selected articles shown
  $('.article').show();
  //Take the filterValue and use hide on !filter articles
  $('.article !' + filterValue).hide();

};

Util.createFilterMenus = function(currentArticles) {

  var tempAuth = [];
  var tempCat = [];
  for(var i = 0; i < currentArticles.length; i++) {
    //make a list of authors
    tempAuth[i] = currentArticles[i].author;
    //make a list of categories
    tempCat[i] = currentArticles[i].category;
  }
  //now that all are copied, find unique
  

};
