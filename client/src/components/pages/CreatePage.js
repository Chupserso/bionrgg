import Helmet from "react-helmet"
import { LoginForm } from "../loginForm/LoginForm"; 
import { Footer } from "../footer/Footer";
import "../../styles/FormPage.css";

export const CreatePage = (props) => {
    const { setIsHeader, setIsRegistered } = props;
    setIsHeader(true);

    return (
        <div className="create-page">
            {/* SEO: Додаємо мета-теги */}
            <Helmet>
                <title>Реєстрація | Bionrgg – твоя цифрова візитка</title>
                <meta name="description" content="Створи профіль у Bionrgg та об'єднай всі соцмережі в одній цифровій візитці. Ідеально для блогерів, геймерів та підприємців." />
                <meta name="keywords" content="Bionrgg, цифрова візитка, соцмережі, блогери, геймери, підприємці, реєстрація" />
                <meta name="robots" content="noindex, follow" /> 
                <meta property="og:title" content="Bionrgg – Створи свою цифрову візитку" />
                <meta property="og:description" content="Єдине місце для всіх твоїх соцмереж. Реєструйся зараз!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bionrgg.com/create-profile" />
            </Helmet>

            <h1 className="default-title">Створи цифрову візитку за 1 хвилину</h1>
            <p className="intro-text">Приєднуйся до Bionrgg – об’єднуй всі свої соцмережі в одному профілі.</p>

            <LoginForm setIsRegistered={setIsRegistered} isLoginPage={false} />
            <Footer />
        </div>
    );
}