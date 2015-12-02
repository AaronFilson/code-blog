# code-blog
CF 301d1 Code blog assignment

Authored by Aaron Filson

Here is the assignment ver2:
Assignment for Class 2 - jQuery and Events
Today we will work on adding sigle-page tabs to the blog. We will also add the ability to select articles by category or author name as a way to filter the view

We will use jQuery events to make this happen.

User Stories

As a reader, I want articles truncated to the first paragraph so that I can easily scroll though the whole list.
As a reader, I want to click the "Read On" button so that I can see the entire article.
As an author, I want my articles filtered by name so that readers can find all my posts.
As a reader, I want articles filterable by category so that I can read things that interest me.
As the creator, I want the About nav to act as a tab, so my story is revealed FAST.
As a reader, I want the blog to use a little color, so that I can distinguish it from other pages.
Technical Requirements and Grading Rubric

Use event delegation whenever appropriate,
Make sure you aren't showing articles that are unpublished ("draft").
Add your filters to the Nav section.
Factor out any helper functions to a Util object, perhaps in a util.js file.
Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
When classes and IDs are needed, pick semantic names. There is to be no $('#content .content') nonsense!
When one filter is selected, it should reset the other filter (eg: it should not AND them).
Add color and icons where appropriate.
Your blog should end up looking something like this.
Helpful Resources

jQuery Cheat sheet: http://oscarotero.com/jquery/
Event Reference: https://developer.mozilla.org/en-US/docs/Web/Events
W3C RFC: http://www.w3.org/TR/DOM-Level-2-Events/events.html
Color selection help: https://coolors.co
Color selection help: http://paletton.com
