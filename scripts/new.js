var PreviewArticle = function(prev){
  this.author = prev.author;
  this.authorSlug = prev.author.replace(/\ /g, '');
  this.title = prev.title;
  this.body = prev.body;
  this.category = prev.category;
  this.publishedOn = prev.publishedOn;
  this.authorUrl = prev.authorUrl;
};

PreviewArticle.prototype.toHTML = function() {
  var source = $("#previewtemplate").html();
  var template = Handlebars.compile(source);
  var result = template(this);
  $('#previewSection').html(result);
};

var store = function() {
  $('button').on('click', function(event) {
    event.preventDefault();
    var formInfo = {
      author: $('input[name=author]').val(),
      authorUrl: $('input[name=authorURL]').val(),
      title: $('input[name=title]').val(),
      category: $('input[name=category]').val(),
      date: $('input[name=publishedOn]').val(),
      body: $('textarea[name=body]').val(),
    };
  });
};

$('form').change(function(){
  event.preventDefault();
  var formInfo = {
    author: $('input[name=author]').val(),
    authorUrl: $('input[name=authorURL]').val(),
    title: $('input[name=title]').val(),
    category: $('input[name=category]').val(),
    publishedOn: $('input[name=publishedOn]').val(),
    body: $('textarea[name=body]').val(),
  };
  var temp = new PreviewArticle(formInfo);
  temp.toHTML();
});

$('input[name=preview]').on('click', function(){
  $('#previewSection').toggle();
});
