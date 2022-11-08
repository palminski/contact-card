import "./form";
import "./submit";

import "../css/index.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import { initDb } from "./database";




window.addEventListener('load', function () {
    initDb();
    this.document.getElementById('logo').src = Logo;
    this.document.getElementById('bearThumbnail').src = Bear;
    this.document.getElementById('dogThumbnail').src = Dog;
})