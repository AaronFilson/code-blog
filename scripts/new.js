var PreviewArticle = function(prev){
  this.author = prev.author;
  this.authorSlug = prev.author.replace(/\ /g, '');
  this.title = prev.title;
  this.body = prev.body;
  this.category = prev.category;
  this.publishedOn = prev.publishedOn;
  this.authorUrl = prev.authorUrl;
};

PreviewArticle.prototype.toHTML = function(tagTarget) {
  var source = $('#previewtemplate').html();
  var template = Handlebars.compile(source);
  var result = template(this);
  $(tagTarget).html(result);
};

PreviewArticle.prototype.toPlainText = function (textTarget) {
  var source = $('#textTemplate').html();
  var template = Handlebars.compile(source);
  var result = template(this);

  $(textTarget).html(result);
};

var getFormData = function () {
  var grabber = {
    author: $('input[name=author]').val(),
    authorUrl: $('input[name=authorUrl]').val(),
    title: $('input[name=title]').val(),
    category: $('input[name=category]').val(),
    date: $('input[name=publishedOn]').val(),
    body: $('textarea[name=body]').val()
  };
  return (grabber);
};

$('button').on('click', function(event) {
  event.preventDefault();
  var formClick = getFormData();
  console.log(formClick);
  var temp2 = new PreviewArticle(formClick);
  temp2.toPlainText('#submitArea');
  // $('#submitArea').html(JSON.stringify(temp2));
});

$('form').change(function(){
  event.preventDefault();
  var formPreview = getFormData();
  var temp = new PreviewArticle(formPreview);
  temp.toHTML('#previewSection');
});

$('input[name=preview]').on('click', function(){
  $('#previewSection').toggle();
});
