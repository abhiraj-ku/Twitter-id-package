/*-------------------------------------------------------------
    Made with ❤️ by Abhishek Kumar
    Github:https://github.com/abhiraj-ku
    Title : Extract Tweet ID from any valid twitter's tweet url
-------------------------------------------------------------------- */

module.exports = tweetId = (url) => {
  const tweetUrlRegex =
    /^https?:\/\/(www\.)?twitter\.com\/\w+\/status\/(\d+)(\/.*)?$/;
  const match = url.match(tweetUrlRegex);

  if (match) {
    return match[2];
  } else {
    return "Invalid URL";
  }
};

// Uncomment this to test
// console.log(
//   tweetId("https://twitter.com/abhirajabhi312/status/1675194819856019456")

//   // output:1675194819856019456
// );
