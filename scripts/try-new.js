
function callTheDB(){
  webDB.setupTables();
  webDB.importArticlesFrom('data/hackerIpsum.json');
}

//Ready function
$(callTheDB);
