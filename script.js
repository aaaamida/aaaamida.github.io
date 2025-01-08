let current_slide = 0
const slides = document.querySelectorAll(".slide")

const update_slides = () => {
        slides.forEach((slide, index) => {
                slide.classList.toggle("active", index === current_slide)
        })
}

const move_slide = (direction) => {
        current_slide = (current_slide + direction + slides.length) % slides.length
        update_slides()
}

update_slides()
