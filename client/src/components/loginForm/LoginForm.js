import { useState } from "react";
import "../../styles/LoginForm.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const LoginForm = (props) => {
    const navigate = useNavigate();

    const [usernameInput, setUsernameInput] = useState("");
    const permittedChars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    const {isLoginPage, setIsRegistered} = props;

    let btnText = "";
    if (isLoginPage == true) {
        btnText = "Увійти"
    } else {
        btnText = "Створити";
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameInput;
        const password = e.target.password.value;

        let regx = /[а-яА-ЯёЁ]/g;
        if (username.search(regx) !=  -1) {
            return false;
        } else {
            let action;

            switch (isLoginPage) {
                case true:
                    action = "login";
                    break;
                case false:
                    action = "register";
                    break;
            }
            const data = {
                action,
                username,
                password,
            }
    
            fetch("http://bionrgg/server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({data})
            })
            .then(response => response.text())
            .then(response => {
                if (response == "Error" || response == "") {
                    Swal.fire({
                        icon: "error",
                        title: "Упс...",
                        text: "Ви ввели невірну інформацію",
                    });
                } else {
                    const user = JSON.parse(response);
                    setIsRegistered(true);
                    localStorage.setItem("userID", user[0]);
                    localStorage.setItem("password", user[1]);
                    navigate("/");
                }
            });
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <br />
            <br />
            <label className="login-label">Нікнейм на англ:</label>
            <br /><input type="text" placeholder="..." value={usernameInput} onChange={(e) => {
                const str = e.target.value;
                if (str == "") {
                    setUsernameInput("");
                }

                const condition = permittedChars.includes(str[str.length - 1]);
                if (condition) {
                    setUsernameInput(str);
                }
            }} name="username" className="login-textfield" required />
            <br /><label className="login-label">Пароль:</label>
            <br /><input type="text" placeholder="..." name="password" className="login-textfield" required />
            <br /><input type="submit" value={btnText} className="login-btn" required />
        </form>
    );
}