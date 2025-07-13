var unbookedFlag = true

function reservedRoom(button) {
        const card = button.closest('.room-card')
        const bookedDiv = card.querySelector('.room-card__booked-text')
        const bookedCover = card.querySelector('.room-card__booked--cover')

        card.addEventListener('mouseleave', (event) => {

        bookedDiv.style.visibility = 'visible'
        bookedCover.style.visibility = 'visible'
        unbookedFlag = false
        event.stopPropagation();

        bestPriceHover()

}, { once: true });

card.addEventListener('click', function () {
            bookedDiv.style.visibility = 'hidden';
            bookedCover.style.visibility = 'hidden';
            unbookedFlag = true

            bestPriceHover()
})
      
}

function bestPriceHover() {
  const roomCards = document.querySelectorAll('.room-card');

  roomCards.forEach(card => {
    const bestPriceMark = card.querySelector('.room-card__best-price');
    console.log('in func', unbookedFlag)
    
        card.addEventListener('mousemove', () => {
        if (unbookedFlag) {
        bestPriceMark.style.visibility = 'visible';}
        });
        
        card.addEventListener('mouseleave', () => {
        if (unbookedFlag) {
        bestPriceMark.style.visibility = 'hidden';}
        });
  });
}

document.addEventListener('DOMContentLoaded', bestPriceHover);
