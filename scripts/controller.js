function defaultToIndex(){
  Util.makeItReady;
}

function aboutFunction(event){
  $('.aboutMe').show;
  $('article').hide;
  $('.aboutMe').load('/aboutMe.html');
}

articlesController = {};

articlesController.category = function (ctx, next) {
  var categoryData = function(data){
    ctx.articles = data;
    next();
  };
};

articlesController.author = function (ctx, next) {
  var authorData = function(data){
    ctx. articles = data;
    next();
  };
};

articlesController.show = function(ctx, next){
  //show the loaded info
  
};
