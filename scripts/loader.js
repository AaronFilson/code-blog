function myAsyncFunctionCalls(){
  var cacheHandleOnIndexTemplate = JSON.parse(localStorage.getItem('indexTemplate'));

  if(!cacheHandleOnIndexTemplate) { //no valid template found
    //console.log('template not found in local store.');
    //use an AJAX call to get the template
    $.get('/scripts/art-template.html')
    .done(function(data){
      //console.log('returned with data = ' + data);
      blog.articleTemplateFromFile = $(data).html();
      //save the template to the localStorage
      //console.log('Setting the template to: ' + blog.articleTemplateFromFile);
      localStorage.setItem('indexTemplate', JSON.stringify(data));
    })
    .done(function(){
      blog.makeNewIndex();
      blog.toHTML();
      registerIndexEvents();
      Util.atLoadFunction();
    });
  } else {
    //console.log('template successfully found in local store.' + cacheHandleOnIndexTemplate);
    blog.articleTemplateFromFile = cacheHandleOnIndexTemplate;
    blog.makeNewIndex();
    blog.toHTML();
    registerIndexEvents();
    Util.atLoadFunction();
  }
}
