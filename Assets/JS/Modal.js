/* If the Weather element is not equal to the none style, make the Modal element's style none and the Weather element set to flex */
function Modal() {
    /* Modal Element */
    const Modal = document.getElementById('Modal');

    /* Weather Element */
    const Weather = document.getElementById('Weather');

    if (Weather.style.display != 'none') {
        /* Modal Element */
        Modal.style.display = 'none';

        /* Weather Element */
        Weather.style.display = 'flex';
    };
}