// function fillTheDBTables (resultsArray, objectBlob) {
//   if(resultsArray.length <= 0){
//     objectBlob.forEach(webDB.insertRecordNew);
//   }
// }
//
// function initializeDatabase(callbackFunc){
//   webDB.execute('SELECT * FROM articles;', function(){
//     callbackFunc();});
// }

function loadArticlesTemplate(){
  var cacheHandleOnIndexTemplate = JSON.parse(localStorage.getItem('indexTemplate'));

  if(!cacheHandleOnIndexTemplate) { //no valid template found
    //use an AJAX call to get the template
    $.get('/scripts/art-template.html')
    .done(function(data){
      blog.articleTemplateFromFile = $(data).html();
      localStorage.setItem('indexTemplate', JSON.stringify(data));
    });
  } else {
    blog.articleTemplateFromFile = cacheHandleOnIndexTemplate;
  }
}

function startSequentialLoading(){
  blog.toHTML();
  registerIndexEvents();
  Util.atLoadFunction();
}

// function databaseLoadChain(){
//   // Thanks to Maria for the pair programming help on learning this pattern!
//
//   //webDB.verbose(false);
//   //Future section : use cache logic
//   $.when(webDB.init,webDB.setupTables)
//     .done(webDB.execute('SELECT * FROM articles;', blog.makeNewIndex(resultArray)))
//     .done(initializeDatabase)
//     .done(loadArticlesTemplate);
// }
function callTheDB(){

  webDB.init();
  //webDB.verbose(false);
  webDB.setupTables();
  console.log('end of callTheDB func. ARG1');
}

function getTemplate(){
  console.log('ARG2');
  var tempTemp = $.get('scripts/art-template.html',
    function(data){
      //console.dir(data);
      //alert('First success');
      blog.articleTemplateFromFile = data;
      //console.log(blog.articleTemplateFromFile);
    });
  // .done(function(data){
  //   console.log(data);
  //   //alert('Done function, second.');
  //});

}

function loadBlogFromJSON(results){
  console.log('ARG4');
  if(blog.isTherePresentlyInfoInDB){
    //if db is filled, use it to populate blog index
    blog.makeNewIndex(results.rows);
    startSequentialLoading();
  } else {
    $.getJSON('scripts/hackerIpsum.json')
    .done(function(data){
      //console.log('hackerIpsum loaded from JSON.');
      data.map(webDB.insertRecordNew);
    })
    .done(function(data){
      blog.makeNewIndex(data);
      startSequentialLoading();
    });
  }
}

function checkDBForLoadedInfo(){
  //bad async
  console.log('ARG3');
  blog.isTherePresentlyInfoInDB = true;
  webDB.spamEggSausageAndSpam('SELECT * FROM articles;', function(dontcare, results, throwaway){
    console.log('The select * returned ' + results.rows.length + ' rows.');
    if(results.rows.length <= 0){
      blog.isTherePresentlyInfoInDB = false;
    }
    loadBlogFromJSON(results);
  });
}

function myAsyncFunctionCalls(){
//  databaseLoadChain();
//Ready function
  $.when(callTheDB())
  .done(loadArticlesTemplate())
  .done(checkDBForLoadedInfo());
}
