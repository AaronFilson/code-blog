# code-blog
CF 301d1 Code blog assignment

Authored by Aaron Filson

Here is the assignment ver6:
Assignment for Class 6 - AJAX and JSON
Asynchronous connections and standardized data formats? Persistent storage for each client? This all sounds like a serious upgrade to our application logic! Let's see what we can do with our app, once we apply these concepts.

User Stories

As a developer, I want to use the same template for Articles, so that I don't have to update it in 2 places.
As a reader, I only want to download all the blog posts if there are changes, so that the page is faster and everyone saves bandwidth.
As a reader, I want the site to have good typography, so that it's easy on the eyes.
Bonus Stories (2 point each)

As a reader, I want the app to remember what tab I'm on, so that if I refresh, I'm not lost.
As an author, I want the data in the New Article form to survive a refresh, so that if I go away and come back, my draft is still there.
Technical Requirements and Grading Rubric

Continue to follow good SMACSS principles.
Be sure to use the correct jQuery method for each AJAX call.
Be thoughtful when functions are executed asynchronously. This is a major source of bugs!
Keep a local cache of article data. Ensure you are only requesting the full blogArticles.json file when you need an update.
Log to the console on every cache hit and cache miss.
Lecture Slides

Typography
Useful Resources

Google Fonts
Treehouse: Web Typography Course
Pracital Topography Site
A More Modern Scale for Web Typography via typecast.com
Type Scale Tool via type-scale.com
