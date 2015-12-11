var myStats = {};
myStats.runStats = function () {
  var dataBlob = new Object();
  //dataBlob = $.getJSON('./scripts/hackerIpsum.json', false); //wrong way, setting aside
  dataBlob = moreTests.rawData;
  //Need total articles, authors, words for story 1
  var statNumArticles = dataBlob.length;
  var htmlBlock = '<div class="row"><div class="u-full-width>"';
  htmlBlock += '<p>The number of articles: ' + statNumArticles + '</p> \n';

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
  //first collect all of the body content
  function collectContent(dSet) {
    return dSet.map(function(eSet){
      //grab the body content or markdown
      return eSet.body ? eSet.body : eSet.markdown;
    });
  }

  function getOutTheWords(fSet) {
    return _.words(fSet);
  }

  function countItUp(jSet){
    return jSet.map(function(kSet){
      return kSet.length; //send back how many elements we have
    })
    .reduce(function(start, lSet){
      return start + lSet;
    });
  }

  var allTheBodies = collectContent(dataBlob);
  var justTheWords = getOutTheWords(allTheBodies);
  var totalWords = countItUp(justTheWords);
  var averageWords = Math.floor(totalWords / justTheWords.length);

  htmlBlock += '<p>The number of words is: ' + totalWords + '</p> \n';
  htmlBlock += '<p>The average length of the words is: ' + averageWords + '</p> \n';
  htmlBlock += '</div></div>';

//need array of author average word lengths
  function getAuthorsList(mSet){
    var authArray = myPluck(mSet);
    var uniqAuth = myUniqFunc(authArray);
    return uniqAuth;
  }

  function findAllAuthorWords(pSet){
    var subtemp = dataBlob.map(function(qSet){
      if(qSet.author === pSet) {
        return qSet.body ? qSet.body : qSet.markdown;
      } else {
        return null;
      }
    });
    return _.words(subtemp);
  }

  function genTheIndividualAverages(nSet){
    htmlBlock += '<div class="row"><div class="six columns">';
    nSet.forEach(function(oSet, index){
      var authorsWordCount = findAllAuthorWords(oSet);
      var wordAverage = Math.floor(countItUp(authorsWordCount) / authorsWordCount.length);
      if(index > (nSet.length)/2){
        //divide the info into 6 by 6 skeleton columns
        htmlBlock += '</div><div class="six columns">';
      }
      htmlBlock += '<p>Author: ' + oSet + ', word length average: ' + wordAverage + '</p> \n';

    });
    htmlBlock += '</div></div>';
  }

  var myAuthorList = getAuthorsList(dataBlob);
  var finished = genTheIndividualAverages(myAuthorList);
  console.log(finished);
//lastly, print into to the page.
  $('.statTarget').html(htmlBlock);
};

$(myStats.runStats);
