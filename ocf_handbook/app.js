window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1400 ||
    document.documentElement.scrollTop > 1400
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// 返回頂部
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const lastWord = document.querySelector("#cup");
const animation = document.querySelector("section.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition:all 1s ease; opacity: 0; pointer-events:none;";
});
