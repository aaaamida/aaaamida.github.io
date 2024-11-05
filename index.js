const read_more = document.getElementById("read_more");
const extra = document.getElementsByClassName("extra");

read_more.addEventListener("click", () => {
        switch (extra.style.display) {
                case "none":
                        extra.style.display = "block";
                        read_more.textContent = "Read Less";
                        break;
                default:
                        extra.style.display = "none"
                        read_more.textContent = "Read More"
                        break;
        }
})
