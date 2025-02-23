import "../../styles/MainPage.css";
import { Footer } from "../footer/Footer";
import { SearchForm } from "../searchForm/SearchForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const MainPage = (props) => {
    const { setIsHeader } = props;
    setIsHeader(true);

    return (
        <div className="main-page">
            {/* SEO-оптимізація */}
            <Helmet>
                <title>Bionrgg – Створіть стильну цифрову візитку</title>
                <meta name="description" content="Створіть цифрову візитку на Bionrgg, додайте всі свої соцмережі та поділіться ними в один клік. Ідеально для блогерів, геймерів та підприємців!" />
                <meta name="keywords" content="Bionrgg, цифрова візитка, блогери, геймери, підприємці, посилання на соцмережі, біолінк" />
                <meta name="robots" content="index, follow" /> 

                {/* Open Graph для соцмереж */}
                <meta property="og:title" content="Bionrgg – створіть стильну цифрову візитку" />
                <meta property="og:description" content="Об’єднайте всі свої соцмережі в один профіль і поділіться ним у будь-який момент!" />
                <meta property="og:image" content="%PUBLIC_URL%/favicon.ico" /> {/* Додай реальне зображення */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bionrgg.com" />
            </Helmet>

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
};