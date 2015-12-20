
page('/aboutMe', aboutFunction);
page('/about', aboutFunction);
page('/indexs', defaultToIndex);
page('/indexed', defaultToIndex);

page('/category/:category', articlesController.category, articlesController.show);
page('/category/:author', articlesController.author, articlesController.show);

page('/', defaultToIndex);
page('/*', defaultToIndex);

page.start();
