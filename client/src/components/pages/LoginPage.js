import { LoginForm } from "../loginForm/LoginForm";
import { Footer } from "../footer/Footer";

export const LoginPage = (props) => {
    const {setIsHeader, setIsRegistered} = props;
    setIsHeader(true);

    return (
        <div className="create-page">
            <h1 className="default-title">Увійти в профіль</h1>
            <LoginForm setIsRegistered={setIsRegistered} isLoginPage={true} />
            <Footer />
        </div>
    );
}