// Exercise: Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];
// Exercise: Find the sidebar on the left by using its id.
document.getElementById('sidebar-left');

// Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementByClassName('Pages');
document.getElementByClassName('Groups');
// Exercise: Find all of the comments on the page.
document.getElementByClassName('post');

// Exercise: Find the first comment on the page.
document.getElementByClassName('post')[0];
// Exercise: Find the last comment on the page.
let posts = document.getElementsByClassName('post');
let lastPostIndex = posts.length - 1;
posts[lastPostIndex];
// Exercise: Find the fourth comment on the page. Make sure you grab the fourth *comment* rather than the fourth *block* of comments. You may need more than one line of code!
let posts = document.getElementsByClassName('post');
let commentBloc = posts[2]
commentBloc[0];
// Exercise: Find one of the ads in the sidebar and hide them.
let sideBarAd = document.getElementsByClassName('side-nav')[2];
sideBarAd.style.visibility = 'hidden';

// Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.
let sideBarAd = document.getElementsByClassName('side-nav')[2];
sideBarAd.style.visibility = 'visible';
// let statusUpdate = document.getElementsByClassName('ad-slot')[0];
let imgUpdate = statusUpdate.getElementsByTagName('img')[0];
imgUpdate.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change its text to something incredible.
let postUpdate = document.getElementsByClassName('post')[3];
let textUpdate = postUpdate.getElementsByTagName('p')[0];
textUpdate.innerHTML = 'Ruby and JavaScript are amazing!';
// Exercise: Find the first post and add the `.post-liked` class to it.
31	let firstPost = document.getElementsByClassName('post')[0];
firstPost.className = firstPost.className + ' post-linked';
// Exercise: Find the second post and remove the `.post-liked` class.
let firstPost = document.getElementsByClassName('post')[0];
firstPost.classList.remove('post-linked');: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
