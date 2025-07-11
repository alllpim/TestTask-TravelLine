    function reservedRoom(button) {
            const container = button.closest('.room-card__price--container');
            const priceContainer = button.closest('.room-card__price--container'); 
            const cover = document.getElementsByClassName('.room-card__cover')

            // TODO: Add styles for span's vertical align
            container.innerHTML = `
                <section class="room-card__booked">
                    <span class="room-card__booked--text">Номер зарезервирован</span>
                    <br>
                    <span class="room-card__booked--text">Перейти к</span>
                    <a class="room-card__booked--pay-link">оплате</a>
                </section>
            `;
            priceContainer.style.padding = '0'
}