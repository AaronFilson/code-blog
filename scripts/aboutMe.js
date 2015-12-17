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
  $('.aboutMe').append($(repos.all));
};

repos.requestRepos(repos.sendInfo);
