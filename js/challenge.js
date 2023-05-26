document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector("#counter");

  let intervalId;

  if (!intervalId) {
    intervalId = setInterval(function () {
      counter.innerText++;
    }, 1000);
  }
  const pause = document.querySelector("#pause");
  pause.addEventListener("click", pauser);

  function pauser(e) {
    if (intervalId) {
        clearInterval(intervalId);
        pause.innerText = "resume";
    }else{
     setInterval(function () {counter.innerText++;}, 1000);    
    pause.innerText = "pause";
  }};

 const increment = document.getElementById("plus");
 increment.addEventListener('click', plus);
 
 const decrement = document.getElementById("minus");
 decrement.addEventListener('click', minus);

 const like = document.getElementById("heart");
 like.addEventListener("click", liked);

 let form = document.querySelector("form");
 form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let input = document.getElementById("comment-input");
    poster(input.value);
    form.reset();
 })
 
 function plus(e){
    counter.innerText++;
 };
function minus(e){
    counter.innerText--;
};
function liked(e){
    let message = document.createElement("p");
    let div = document.querySelector("div");
    message.innerText = `"Number ${counter.innerText} was liked!"`;
    div.appendChild(message);
}

function poster(post){
    let p = document.createElement("p");
    let comments = document.querySelector("#list");
    p.innerText = `${post}`;
    comments.appendChild(p);
}


});
