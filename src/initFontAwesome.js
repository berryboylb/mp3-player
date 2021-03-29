import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faWhatsapp, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faWhatsapp, faLinkedin, faGithub);
}
export default initFontAwesome;