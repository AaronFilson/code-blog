//
// var cachedArticlesETag = JSON.parse(localStorage.getItem('articlesETag'));

function myAsyncFunctionCalls (){
  var cacheHandleOnIndexTemplate = JSON.parse(localStorage.getItem('indexTemplate'));
  //
  if(!cacheHandleOnIndexTemplate) {
    //use an AJAX call to get the template
    //for now I will use an ajax call to get info from the file system.

  } else {
    //we do have info in the local store
    //check there is not a more recent version (db check)

  }

  return true; //indicate success

  return false; //indicate failure

}

$.get('scripts/art-template.html').done(function(data){
  blog.articleTemplateFromFile = data;
})
.done(function(){

  blog.makeNewIndex();
  blog.toHTML();
  Util.atLoadFunction();

});
