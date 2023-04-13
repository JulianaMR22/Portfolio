let svgContainer = document.querySelector(".scroll_anim");
let scrollAnim = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  loop: true,
  path: "./images/scrollDown.json",
});

//gitHub

let icongithub = document.querySelector(".github_anim");

let githubAnim = bodymovin.loadAnimation({
  container: icongithub,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./images/github.json",
});

var directionGithub = 1;
icongithub.addEventListener("mouseenter", (e) => {
  githubAnim.setDirection(directionGithub);
  githubAnim.play();
});

icongithub.addEventListener("mouseleave", (e) => {
  githubAnim.setDirection(-directionGithub);
  githubAnim.play();
});

//twitter

let icontwitter = document.querySelector(".twitter_anim");

let twitterAnim = bodymovin.loadAnimation({
  container: icontwitter,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./images/twitter.json",
});

var directiontwitter = 1;
icontwitter.addEventListener("mouseenter", (e) => {
  twitterAnim.setDirection(directiontwitter);
  twitterAnim.play();
});

icontwitter.addEventListener("mouseleave", (e) => {
  twitterAnim.setDirection(-directiontwitter);
  twitterAnim.play();
});

//linkedIn

let iconLinkedin = document.querySelector(".linkedln_anim");

let linkedinAnim = bodymovin.loadAnimation({
  container: iconLinkedin,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./images/linkedin.json",
});

var directionLinkedin = 1;
iconLinkedin.addEventListener("mouseenter", (e) => {
  linkedinAnim.setDirection(directionLinkedin);
  linkedinAnim.play();
});

iconLinkedin.addEventListener("mouseleave", (e) => {
  linkedinAnim.setDirection(-directionLinkedin);
  linkedinAnim.play();
});
