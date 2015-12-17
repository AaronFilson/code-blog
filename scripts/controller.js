function defaultToIndex(){
  Util.makeItReady;
}

function aboutFunction(event){
  $('.aboutMe').show;
  $('article').hide;
  $('.aboutMe').load('/aboutMe.html');
}
