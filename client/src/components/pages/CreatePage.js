import { LoginForm } from "../loginForm/LoginForm";
import { Footer } from "../footer/Footer";

export const CreatePage = (props) => {
    const {setIsHeader, setIsRegistered} = props;
    setIsHeader(true);

    return (
        <div className="create-page">
            <h1 className="default-title">Створи свій профіль</h1>
            <LoginForm setIsRegistered={setIsRegistered} isLoginPage={false} />
            <Footer />
        </div>
    );
}