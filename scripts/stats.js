var myStats = {};
myStats.runStats = function () {
  var dataBlob = new Object();
  //dataBlob = $.getJSON('./scripts/hackerIpsum.json', false); //wrong way, setting aside
  dataBlob = moreTests.rawData;
  //Need total articles, authors, words for story 1
  var statNumArticles = dataBlob.length;
  var htmlBlock = '<p>The number of articles: ' + statNumArticles + '</p> \n';

  function myPluck (dArr) {
    return dArr.map(function(e){return e.author;});
  }

  function myUniqFunc (lArr) {
    return _.uniq(lArr);
  }

  function countAuthorsFunc(bArr){
    var authArray = myPluck(bArr);
    var uniqAuth = myUniqFunc(authArray);
    return uniqAuth.length;
  }

  var statNumAuthor = countAuthorsFunc(dataBlob);
  htmlBlock += '<p>The number of unique authors: ' + statNumAuthor + '</p> \n';


//need average word length across all posts

//need array of author average word lengths

//lastly, print into to the page.
  $('.statTarget').html(htmlBlock);
};

$(myStats.runStats);
