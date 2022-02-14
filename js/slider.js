let sliderIndex = 0

const arrayOfImages = ['images/slider__item-1.jpg', 'images/slider__item-2.jpg', 'images/slider__item-3.jpg', 'images/slider__item-4.jpg', 'images/slider__item-5.jpg', 'images/slider__item-6.jpg']

function nextSlide() {
    if (sliderIndex < arrayOfImages.length - 1) {
        sliderIndex++
        return
    }
    sliderIndex = 0
}

function prevSlide() {
    sliderIndex = sliderIndex - 1
}

const goToSlide = (index) => {
    sliderIndex = index
    const imgs = document.getElementsByClassName("slider__item-img")
    const img = imgs[0]
    const nextImage = arrayOfImages[sliderIndex]
    img.setAttribute('src', nextImage)
}

const autoSlide = () => {
    goToSlide(sliderIndex)
    console.log(sliderIndex, 'sliderIndex')
    nextSlide()
}

setInterval(autoSlide, 3000)