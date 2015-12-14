// var cacheHandleOnIndexTemplate = JSON.parse(localStorage.getItem('indexTemplate'));
//
// var cachedArticlesETag = JSON.parse(localStorage.getItem('articlesETag'));

$.get('scripts/art-template.html').done(function(data){
  blog.articleTemplateFromFile = data;
})
.done(function(){

  blog.makeNewIndex();
  blog.toHTML();
  Util.atLoadFunction();

});
