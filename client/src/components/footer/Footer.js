import "../../styles/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <h2>Інстаграм розробника Bionrgg:<Link target="blank" to="https://www.instagram.com/chupserso/">chupserso</Link></h2>
        </footer>
    );
}