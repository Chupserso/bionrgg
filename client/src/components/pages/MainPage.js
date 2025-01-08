import "../../styles/MainPage.css";
import { Footer } from "../footer/Footer";
import { SearchForm } from "../searchForm/SearchForm";
import { Link } from "react-router-dom";

export const MainPage = (props) => {
    const {setIsHeader} = props;
    setIsHeader(true);

    return (
        <div className="main-page">
            <div className="subheader">
                <h1><span>Bionrgg</span> — створіть свій стильний профіль, зберіть усі посилання та поділіться ним безкоштовно</h1>
            </div>
            <div className="tutorial">
                <h2>Як створити свій профіль?</h2>
                <ol>
                    <li>Натисніть «Створити профіль»</li>
                    <li>Заповніть усі поля</li>
                    <li>Користуйтеся із задоволенням :)</li>
                </ol>
            </div>
            <SearchForm />
            <Link className="profiles-link" to={"/profiles"}>Таблиця лідерів</Link>
            <Footer />
        </div>
    );
}