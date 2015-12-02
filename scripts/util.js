var Util = {};

Util.makeItReady = function () {
  //hide the lower p, hide about and prep filters
};

Util.handleNavClick = function (e) {
  //handle clicks to the nav
  
};

Util.atLoadFunction = function() {
  //We are now ready
  Util.makeItReady(); //hide articles and prep filters
  $('header').on('click', 'nav', Util.handleNavClick(e)); //register clicks on nav
};
