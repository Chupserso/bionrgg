import "../../styles/Header.css";
import img from "../../resources/img/favicon.png";
import { Link } from "react-router-dom";

export const Header = (props) => {
    const {isRegistered} = props;

    return (
        <header className="header">
            <Link to="/">
                <img src={img} className="header-logo" alt="Bionrgg логотип" />
            </Link>
            <div className="menu">
                {
                    isRegistered == true ? <Link to={"/my-profile"}>Мій профіль</Link> : <><Link to={"/create-profile"}>Створити профіль</Link><Link to={"/sign-in"}>Увійти</Link></>
                }
                <Link target="blank" to="https://discord.gg/78QDABXM">Діскорд</Link>
                <Link target="blank" to="https://www.instagram.com/chupserso/">Інстаграм</Link>
            </div>
        </header>
    );
}