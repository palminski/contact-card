import "./form";
import "./submit";

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function () {
    this.document.getElementById('logo').src = Logo;
    this.document.getElementById('bearThumbnail').src = Bear;
    this.document.getElementById('dogThumbnail').src = Dog;
})