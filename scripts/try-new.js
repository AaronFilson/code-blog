
function callTheDB(){
  webDB.init();
  webDB.setupTables();
}

//Ready function
$(callTheDB());
