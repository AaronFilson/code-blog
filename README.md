# code-blog
CF 301d1 Code blog assignment

Authored by Aaron Filson

Assignment for Class 11 - Routing and Web Requests
At the heart of every web app is the Web Request-Response Cycle. Pay close attention to how your app is creating and responding to requests.

Start from lecture-code/blog/. Take a look at the model (article.js) and view (artcileView.js) files provided. Note that some features (edit, filters, caching) are stripped out at this point. Focus on the MVC structure.

The URLs that your app can respond to maps to your apps capabilities. Consider what public routes your app should have. Use page.js to expose those as navigable URLs. Then setup controllers to handle those URLs, all on the client side.

User Stories: MVP

As a developer, I want a routing file, so that I have a central place to define what URLs my app can handle.
As a developer, I want an articleController, so that I can group together actions related to the article resource.
As an reader, I want to view the article index, so that I can read all the articles.
User Stories: Stretch goals

As a reader, I want to view '/about', so that I can learn more about the brilliant dev who created this site.
As an developer, I want a URL for each blog post, so that individual articles can be shared.
As a reader, I want a link to each article's individual URL, so that I can share articles.
As an author, I want a URL for my own page, so that I can see all my articles in one place.
Technical Requirements and Grading Rubric

Ensure your code passes ESLint.
Create a single place where your app's URLs are connected to actions to handle the URLs.
Encapsulate each behavior of your app within an appropriate layer of MVC abstraction.
