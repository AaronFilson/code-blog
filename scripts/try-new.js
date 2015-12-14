
function callTheDB(){
  webDB.init();
  webDB.setupTables();
  console.log('end of callTheDB func.');
}

function getTemplate(){
  var tempTemp = $.get('scripts/art-template.html',
    function(data){
      console.dir(data);
      alert('First success');
    })
  .done(function(data){
    console.log(data);
    alert('Done function, second.');
  });

}

function loadBlogFromJSON(){
  $.getJSON('scripts/hackerIpsum.json')
  .done(function(){console.log('hackerIpsum loaded from JSON.');});
}

//Ready function
$.when(callTheDB())
  .done(getTemplate)
  .done(loadBlogFromJSON);

  // $.ajax({
  //   url: "test.html",
  //   context: document.body
  // }).done(function() {
  //   $( this ).addClass( "done" );
  // });
