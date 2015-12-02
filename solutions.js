// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];

// Exercise: Find the sidebar on the right by using it's id.
document.getElementById("sidebar-right");

// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('groups')[0];
document.getElementsByClassName('pages')[0];

// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments')

// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0].getElementsByTagName('p')[0];

// Exercise: Find the last comment on the page.
comments = document.getElementsByClassName('comments');
lastComment = comments[this.length-1].getElementsByTagName('p')[0];
lastComment[this.length-1];

// Exercise: Find the fourth comment on the page.
var allComments = [];
for(var i = 0; i < comments.length; i++){
  currentComment = comments[i].getElementsByTagName('p');
  if (currentComment.length === 1){
    allComments.push(currentComment[0].innerHTML);
  } else {
    for(var j = 0; j < currentComment.length; j++){
      allComments.push(currentComment[j].innerHTML);
    };
  };
};
allComments[3];

// Exercise: Find one of the ads in the sidebar and hide them.
var buhByeAd = document.getElementsByClassName('ad-slot')[0];
buhByeAd.style.visibility = "hidden";

// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
var buhByeAd = document.getElementsByClassName('ad-slot')[0];
buhByeAd.style.visibility = "visible";

// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var ad = document.getElementsByClassName('ad-slot')[0];
var adImg = ad.getElementsByTagName('img')[0];
adImg.setAttribute('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change it's text to something incredible.
allPosts = document.getElementsByClassName('post media');
for(var i = 0; i < allPosts.length; i++){
  var currentPostAuthor = allPosts[i].getElementsByTagName('h4')[0].innerHTML;
  if(currentPostAuthor === 'Sam McTaggart'){
    allPosts[i].getElementsByTagName('p')[0].innerHTML = 'something incredible';
  };
};

// Exercise: Find the first post and add the .post-liked class to it.
var firstPost = document.getElementsByClassName('post media')[0];
firstPost.className = firstPost.className + " post-liked";

// Exercise: Find the second post and remove the .post-liked class.
var secondPost = document.getElementsByClassName('post media')[1];
secondPost.classList.remove('post-liked');
