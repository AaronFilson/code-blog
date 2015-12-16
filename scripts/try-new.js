//
// function callTheDB(){
//   webDB.verbose(false);
//   webDB.init();
//   webDB.setupTables();
//   console.log('end of callTheDB func.');
// }
//
// function getTemplate(){
//   var tempTemp = $.get('scripts/art-template.html',
//     function(data){
//       //console.dir(data);
//       //alert('First success');
//       blog.articleTemplateFromFile = data;
//       console.log(blog.articleTemplateFromFile);
//     })
//   .done(function(data){
//     console.log(data);
//     //alert('Done function, second.');
//   });
//
// }
//
// function loadBlogFromJSON(){
//   $.getJSON('scripts/hackerIpsum.json')
//   .done(function(data){
//     console.log('hackerIpsum loaded from JSON.');
//     data.map(webDB.insertRecordNew);
//   })
//   .done(function(data){console.log('A new bit of data. ');});
//
// }
//
// //Ready function
// $.when(callTheDB())
//   .done(getTemplate)
//   .done(loadBlogFromJSON);
//
//   // $.ajax({
//   //   url: "test.html",
//   //   context: document.body
//   // }).done(function() {
//   //   $( this ).addClass( "done" );
//   // });
