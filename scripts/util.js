var Util = {};

Util.makeItReady = function() {
  //hide the lower p, hide about and prep filters
  $('.aboutme').hide();
  $('article').show();
  $('.body p:not(:first-child)').hide();
};

Util.handleNavClick = function(eventarg) {
  //handle clicks to the nav

};

Util.atLoadFunction = function() {
  //We are now ready
  Util.makeItReady(); //hide articles and prep filters
};

Util.revealReadOn = function(context) {
  //unhide the article paragraphs so the reader has access

};
