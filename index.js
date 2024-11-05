const read_more = document.getElementById("read_more");
const extras = document.getElementsByClassName("extra");
        
read_more.addEventListener("click", () => {
        Array.from(extras).forEach(extra => {
                switch (extra.style.display) {
                        case "none":
                                extra.style.display = "block";
                                read_more.hidden = true;
                                break;
                        default:
                                extra.style.display = "none"
                                read_more.textContent = "Read More"
                                break;
                }
        })                                
})
