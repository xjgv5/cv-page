document.addEventListener("DOMContentLoaded", (event) => {
   
    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = ` <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.981665633734!2d-98.23057142533612!3d19.020529553712603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc74e93723cbb%3A0x7af023f98f229c7!2sCalle%20Ignacio%20Zaragoza%201109%2C%20Mayorazgo%2C%2072492%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1722567291581!5m2!1ses-419!2smx"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }, 50000)
})