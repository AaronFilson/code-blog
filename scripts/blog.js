var blog = new Object();

var BloggedArticle = function(rawObj) {
  this.artTitle = rawObj.title;
  this.category = rawObj.category;
  this.author = rawObj.author;
  this.authorUrl = rawObj.authorUrl;
  this.publishedOn = rawObj.publishedOn;
  this.artBody = rawObj.body;

  //assisted by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Calculating_elapsed_time
  var objDatePub = new Date(this.publishedOn);
  this.displayRelativeDate = Math.ceil((Date.now() - objDatePub) / 86400000); //divide by milliseconds in a day
};

blog.toHTML = function() {
  for(var i = 0; i < blog.artIndex.length; i++) {
    blog.$myTemplate = $('#original').clone().removeAttr('id');
    var $tempVar = blog.$myTemplate;
    $tempVar.find('.author').text(blog.artIndex[i].author);
    $tempVar.find('.authorUrl').attr('href', blog.artIndex[i].authorUrl);
    $tempVar.find('.category').text('Category: ' + blog.artIndex[i].category);
    $tempVar.find('.title').text(blog.artIndex[i].artTitle);
    $tempVar.find('.body').html(blog.artIndex[i].artBody);
    $tempVar.find('.publishedOn').text(blog.artIndex[i].displayRelativeDate);

    $('#blogColumn').prepend($tempVar);
  }
};

blog.makeNewIndex = function (){
  //
  blog.artIndex = new Array ( new BloggedArticle(blog.rawData[0]) );
  for(var j = 1; j < blog.rawData.length; j++) {
    blog.artIndex[j] = new BloggedArticle(blog.rawData[j]);
  }
  //Thanks to Miranda !!
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
