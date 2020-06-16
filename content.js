const interval = setInterval(()=> {
    const header = document.querySelector(".BI4qX");
    if (header) {
        console.log(header);
        clearInterval(interval);

        header.classList.add("edited-header");

        const button = document.createElement("button")
        button.innerHTML = "Seguir quem te segue"
        button.classList.add("sqdOP")
        button.classList.add("L3NKy")
        button.classList.add("y3zKF")
        header.appendChild(button)
    }
}, 1000);