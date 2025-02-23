import { Helmet } from "react-helmet";
import { LoginForm } from "../loginForm/LoginForm";
import { Footer } from "../footer/Footer";

export const LoginPage = (props) => {
    const { setIsHeader, setIsRegistered } = props;
    setIsHeader(true);

    return (
        <div className="login-page">
            {/* SEO-оптимізація */}
            <Helmet>
                <title>Авторизація | Bionrgg – вхід у профіль</title>
                <meta name="description" content="Увійдіть у свій профіль на Bionrgg, щоб керувати своєю цифровою візиткою та ділитися всіма своїми соцмережами." />
                <meta name="keywords" content="Bionrgg, вхід, авторизація, цифрова візитка, соцмережі, блогери, підприємці, геймери" />
                <meta name="robots" content="noindex, follow" /> 
                <meta property="og:title" content="Вхід у Bionrgg" />
                <meta property="og:description" content="Авторизуйтесь, щоб керувати своєю цифровою візиткою та додавати посилання на соцмережі." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bionrgg.com/sign-in" />
            </Helmet>

            <h1 className="default-title">Увійти в Bionrgg</h1>
            <p className="intro-text">Керуйте своєю цифровою візиткою та об’єднуйте всі соцмережі в одному місці.</p>

            <LoginForm setIsRegistered={setIsRegistered} isLoginPage={true} />
            <Footer />
        </div>
    );
}