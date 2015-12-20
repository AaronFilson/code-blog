var blog = new Object();
blog.articleTemplateFromFile = [];

var BloggedArticle = function(rawObj) {
  this.title = rawObj.title;
  this.category = rawObj.category;
  this.author = rawObj.author;
  this.authorUrl = rawObj.authorUrl;
  this.publishedOn = rawObj.publishedOn;
  if(rawObj.markdown){
    this.markdown = marked(rawObj.markdown);
  }
  this.body = rawObj.body || this.markdown; //taken from lecture code

  //assisted by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Calculating_elapsed_time
  var objDatePub = new Date(this.publishedOn);
  this.displayRelativeDate = Math.ceil((Date.now() - objDatePub) / 86400000); //divide by milliseconds in a day
};

blog.toHTML = function() {
  var source = blog.articleTemplateFromFile;
  var template = Handlebars.compile(source);

  for (var i = 0; i < blog.artIndex.length; i++) {
    var result = template(this.artIndex[i]);
    $(result).prependTo('#targetArticle');
  }
};

blog.makeNewIndex = function(dataSource){
  //check if we are hooked up to dataSource in db, if not then load from file
  if(dataSource.length > 0){
    blog.artIndex = new Array (dataSource);
  } else {
    blog.artIndex = new Array ( new BloggedArticle(blog.rawData[0]) );
    for(var j = 1; j < blog.rawData.length; j++) {
      blog.artIndex[j] = new BloggedArticle(blog.rawData[j]);
    }
  }
  //Thanks to Miranda !! Sort the artIndex array by date
  blog.artIndex.sort(function(a,b){
    if(a.displayRelativeDate < b.displayRelativeDate) {
      return 1;
    }
    if(a.displayRelativeDate > b.displayRelativeDate) {
      return -1;
    }
    else {
      return 0;
    }
  });
};
