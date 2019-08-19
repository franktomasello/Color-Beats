window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const beatPads = document.querySelectorAll(".BeatPads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#60b2d3",
    "#FB9208"
  ]

  //getting the sound setup
  beatPads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  //Creating a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function(){
        visual.removeChild(this);
    });
  };

});

