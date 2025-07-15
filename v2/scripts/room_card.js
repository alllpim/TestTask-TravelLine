document.addEventListener('DOMContentLoaded', function () {
    if (isMobileDevice()) {
        document.querySelectorAll('.room-card').forEach(card => {
            if (isDuplexCard(card) && !card.querySelector('.room-card__btn').disabled) {
                card.querySelector('.room-card__best-price').style.visibility = 'visible';
            }
        });
    }

    document.querySelectorAll('.room-card__btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const card = this.closest('.room-card');
            const removeBestPriceMark = () => {
                if (isDuplexCard(card)) {
                    card.querySelector('.room-card__best-price').style.visibility = 'hidden';
                }

            }
            const showBookedElements = () => {
                card.querySelector('.room-card__booked-text').style.visibility = 'visible';
                card.querySelector('.room-card__booked--cover').style.visibility = 'visible';
            };

            if (isMobileDevice()) {
                showBookedElements();
                removeBestPriceMark();
            } else {
                const handleMouseLeave = () => {
                    showBookedElements();
                    removeBestPriceMark();
                    card.removeEventListener('mouseleave', handleMouseLeave);
                };
                card.addEventListener('mouseleave', handleMouseLeave);
            }

            this.disabled = true;
        });
    });

    document.querySelectorAll('.room-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.classList.contains('room-card__btn')) return;

            const bookedDiv = this.querySelector('.room-card__booked-text');
            if (bookedDiv.style.visibility === 'visible') {
                bookedDiv.style.visibility = 'hidden';
                this.querySelector('.room-card__booked--cover').style.visibility = 'hidden';
                this.querySelector('.room-card__btn').disabled = false;

                if (isDuplexCard(this)) {
                    this.querySelector('.room-card__best-price').style.visibility =
                        isMobileDevice() ? 'visible' : 'hidden';
                }
            }
        });
    });

    if (!isMobileDevice()) {
        document.querySelectorAll('.room-card').forEach(card => {
            if (isDuplexCard(card)) {
                const bestPriceMark = card.querySelector('.room-card__best-price');

                card.addEventListener('mousemove', function () {
                    if (!this.querySelector('.room-card__btn').disabled) {
                        bestPriceMark.style.visibility = 'visible';
                    }
                });

                card.addEventListener('mouseleave', function () {
                    bestPriceMark.style.visibility = 'hidden';
                });
            }
        });
    }

    document.querySelectorAll('.room-card').forEach(card => {
        if (!isDuplexCard(card)) {
            card.querySelector('.room-card__best-price').style.visibility = 'hidden';
        }
    });
});

function isDuplexCard(card) {
    return card.querySelector('.room-card__description--link').textContent.trim() === 'Дуплекс';
}

function isMobileDevice() {
    return window.matchMedia("(max-width: 768px)").matches;
}