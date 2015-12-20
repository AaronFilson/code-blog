function fillTheDBTables (results, objectBlob) {
  if(results.length <= 0){
    objectBlob.forEach(webDB.insertRecordNew);
  }
}

function initializeDatabase (){
  webDB.execute('SELECT * FROM articles;', function(results) {
    fillTheDBTables(results,blog.artIndex);
  });
}

function databaseLoadChain(){
  // Thanks to Maria for the pair programming help on learning this pattern!
  webDB.init();
  webDB.verbose(false);
  //Future section : use cache logic
  $.when(initializeDatabase)
    .done(webDB.execute('SELECT * FROM articles;', blog.makeNewIndex));
}

function loadArticlesTemplate(){
  var cacheHandleOnIndexTemplate = JSON.parse(localStorage.getItem('indexTemplate'));

  if(!cacheHandleOnIndexTemplate) { //no valid template found
    //use an AJAX call to get the template
    $.get('/scripts/art-template.html')
    .done(function(data){
      blog.articleTemplateFromFile = $(data).html();
      localStorage.setItem('indexTemplate', JSON.stringify(data));
    })
    .done(function(){
      //back to old load order
      startSequentialLoading();
    });
  } else {
    blog.articleTemplateFromFile = cacheHandleOnIndexTemplate;
    //back to old load order
    startSequentialLoading();
  }
}

function startSequentialLoading(){
  blog.toHTML();
  registerIndexEvents();
  Util.atLoadFunction();
}

function myAsyncFunctionCalls(){
  $.when(databaseLoadChain)
    .done(loadArticlesTemplate)
    .done(startSequentialLoading);
}
