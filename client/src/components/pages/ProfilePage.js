import { Link } from "react-router-dom";
import { Profile } from "../profile/Profile";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const ProfilePage = (props) => {
    const {setIsHeader, username} = props;
    setIsHeader(false);

    const [bg, setBg] = useState("");

    const data = {action: "get", username: localStorage.getItem("userID")};
    let userArray;
    useEffect(() => {
        fetch("http://bionrgg/server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({data})
        })
        .then(response => response.text())
        .then(response => {
            userArray = JSON.parse(response);
            setBg("data:image/jpeg;base64," + userArray[12]);
        });
    }, []);
    console.log(username);

    return (
        <div className="profile-page" style={{background: `url(${bg}) center center/cover no-repeat`}}>
            <Helmet>
                <title>Профіль користувача | Bionrgg</title>
                <meta name="description" content="Цифрова візитка на Bionrgg — створюйте та діліться своїм профілем." />
                <meta property="og:title" content={`Профіль користувача ${username} | Bionrgg`} />
                <meta property="og:description" content="Цифрова візитка на Bionrgg — створюйте та діліться своїм профілем." />
                <meta property="og:image" content={bg} />
            </Helmet>
            <Link to="/">На головну сторінку</Link>
            <Profile username={username} />
        </div>
    );
}