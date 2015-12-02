var Util = {};

Util.makeItReady = function() {
  //hide the lower p, hide about and prep filters
  $('.aboutMe').hide();
  $('article').show();
  $('article p:not(:first-child)').hide();
  $('.readOn').show();
};

Util.atLoadFunction = function() {
  //We are now ready
  Util.makeItReady(); //hide articles and prep filters
};
