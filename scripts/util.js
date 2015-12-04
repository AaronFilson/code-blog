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
  //hide all articles so we have filter selected articles shown
  $('article').hide();
  $('.aboutMe').hide();
  //Take the filterValue and use show to give reader a selected view
  $('.author:contains("' + filterValue + '"), .category:contains("' + filterValue + '")')
  .parentsUntil('div').show().slideDown();
  //the above looks for the filterValue in either author or category classes
  //and then gets the article level of the element, and runs slideDown

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
  authMenu.unshift('<option>Filter By Author</option>');
  catMenu.unshift('<option>Filter By Category</option>');
  for(var a = 1; a < authMenu.length; a++){
    authMenu[a] = '<option value="' + authMenu[a] + '">' + authMenu[a] + '</option>';
  }
  for(var b = 1; b < catMenu.length; b++) {
    catMenu[b] = '<option value="' + catMenu[b] + '">' + catMenu[b] + '</option>';
  }

  $('.filterByAuthor').append().html(authMenu);
  $('.filterByCategory').append().html(catMenu);
};
