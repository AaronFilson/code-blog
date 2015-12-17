//taken from class code
var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  console.log('in the repos.requestRepos func.');
  $.ajax({
    url: '/github/users/AaronFilson/repos' +
          '?per_page=100' +
          '&sort=updated',
    type: 'GET',
    success: function(data, message, xhr) {
      repos.all = data;
    }
  }).done(callback);
};

repos.sendInfo = function(){
  console.log('in the repos.sendInfo call back.');
  repos.all.forEach(function(repoObj){
    if(!repoObj.fork){
      $('#reposSpan').append('<em>' + repoObj.name + '</em> : <a href=' +
       repoObj.html_url + ' target="_blank"> ' + repoObj.html_url + '</a>' +
        '<br>Description: ' + repoObj.description + ' <br><br>');
    }
  });
};

repos.requestRepos(repos.sendInfo);
