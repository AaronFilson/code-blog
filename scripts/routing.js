
page('/aboutMe', aboutFunction);
page('/about', aboutFunction);
page('/indexs', defaultToIndex);
page('/indexed', defaultToIndex);

page('/', defaultToIndex);
page('/*', defaultToIndex);

page.start();
