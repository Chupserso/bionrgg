import "../../styles/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            Інстаграм розробника:<Link target="blank" to="https://www.instagram.com/chupserso/">chupserso</Link>
        </footer>
    );
}