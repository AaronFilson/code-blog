var PreviewArticle = function(prev){
  this.author = prev.author;
  this.authorSlug = prev.author.replace(/\ /g, '');
  this.title = prev.title;
  this.markdown = marked(prev.markdown);
  this.body = prev.body || this.markdown;
  this.category = prev.category;
  this.publishedOn = prev.publishedOn;
  this.authorUrl = prev.authorUrl;
};

PreviewArticle.prototype.toHTML = function(tagTarget) {
  var source = $('#previewtemplate').html();
  var template = Handlebars.compile(source);
  var result = template(this);
  $(tagTarget).html(result);
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
};

PreviewArticle.prototype.toPlainText = function (textTarget) {
  var source = $('#textTemplate').html();
  var template = Handlebars.compile(source);
  var result = template(this);

  $(textTarget).html(result);
};

var newUtil = {};
newUtil.getFormData = function () {
  var grabber = {
    author: $('input[name=author]').val(),
    authorUrl: $('input[name=authorUrl]').val(),
    title: $('input[name=title]').val(),
    category: $('input[name=category]').val(),
    publishedOn: $('input[name=publishedOn]').val(),
    body: $('textarea[name=body]').val(),
    markdown: $('textarea[name=markdown]').val()
  };
  return (grabber);
};

//event handler section
$('button').on('click', function(event) {
  event.preventDefault();
  var formClick = newUtil.getFormData();
  var temp2 = new PreviewArticle(formClick);
  temp2.toPlainText('#submitArea');
});

$('form').change(function(){
  event.preventDefault();
  var formPreview = newUtil.getFormData();
  var temp = new PreviewArticle(formPreview);
  temp.toHTML('#previewSection');
});

$('input[name=preview]').on('click', function(){
  $('#previewSection').toggle();
});
