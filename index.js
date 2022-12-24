//script will only run on twitter URLs
function gekoify() {
  try {
    var viewicon = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr");
    var icons = document.getElementsByClassName("css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws");
    var viewtext = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-901oao r-1nao33i r-1loqt21 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0");
    var centerer = "r-1wtj0ep";
    // defining the classes used to identify the elements 
    while (viewicon.length) { viewicon[0].parentNode.removeChild(viewicon[0]) }; // removing the view icon if it exists on the page
    while (icons.length) { icons[0].classList.remove(centerer); }; //removes the centering class from the icons, intend to make optional in next version via popup
    if (viewtext[0]?.innerText?.toLowerCase()?.includes("view")) { viewtext[0].parentNode.removeChild(viewtext[0]) }; // removes the view text if it exists on the page
  } catch {
    console.log("error"); // if something goes wrong, it will log it to the console rather than breaking the script
  }
};
var observer = new MutationObserver(function onMutationObserver(mutations) { //will run this function when the page is changed (new tweet is loaded)
  gekoify(); //left as function so it can easily be changed with popup interface in future
});
observer.observe(document.documentElement, { childList: true, subtree: true }); //observes the page for changes