const interval = setInterval(()=> {
    const header = document.querySelector("._3euVJ");
    if (header) {
        clearInterval(interval);

        header.classList.add("edited-header");
        
        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("style-button");
        header.appendChild(button);
        button.addEventListener("click", faster);
    }
}, 1000);

function faster() {
    const audios = document.querySelectorAll("audio");

    audios.forEach((audio)=>{
        audio.playbackRate = 2;
    });
}
