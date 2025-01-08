import "../../styles/Profile.css";
import instaImg from "../../resources/img/insta.png";
import discordImg from "../../resources/img/discord.png";
import facebookImg from "../../resources/img/facebook.png";
import steamImg from "../../resources/img/steam.png";
import twitchImg from "../../resources/img/twitch.png";
import tiktokImg from "../../resources/img/tiktok.png";
import tgImg from "../../resources/img/tg.png";
import profileImg from "../../resources/img/profile.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileLink } from "../profileLink/ProfileLink";
import Swal from "sweetalert2";

export const Profile = (props) => {
    const {username} = props;

    const [user, setUser] = useState({username: "", descr: "", inst: "", fb: "", discord: "", steam: "", views: 0, avatar: ""});

    const navigate = useNavigate();

    useEffect(() => {
        let timerInterval;
        Swal.fire({
            title: "Профіль завантажується...",
            html: "Я закриюся через <b></b> мілісекунд.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    }, []);

    const data = {action: "get", username: username};
    let userArray;
    useEffect(() => {
        fetch("http://bionrgg/server.php", {
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({data})
        })
        .then(response => response.text())
        .then(response => {
            if (response == "") {
                navigate("/error-profile");
            } else {
                userArray = JSON.parse(response);
                setUser({
                    username: userArray[0], descr: userArray[1], inst: userArray[2], fb: userArray[3], discord: userArray[4], steam: userArray[5], views: Number(userArray[6]), avatar: "data:image/jpeg;base64," + userArray[7], twitch: userArray[8], tiktok: userArray[9], tg: userArray[10]
                });
                const viewsData = {action: "views", username: username};
                fetch("http://bionrgg/server.php", {
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: JSON.stringify({viewsData})
                })
                .then(response => response.text())
                .then(response => {
                    console.log(response);
                });
            }
        });
    }, []);

    const instBlock = user.inst != "" ? <ProfileLink img={instaImg} url={user.inst} /> : null;
    const discordBlock = user.discord != "" ? <ProfileLink img={discordImg} url={user.discord} /> : null;
    const fbBlock = user.fb != "" ? <ProfileLink img={facebookImg} url={user.fb} /> : null;
    const steamBlock = user.steam != "" ? <ProfileLink img={steamImg} url={user.steam} /> : null;

    const twitchBlock = user.twitch != "" ? <ProfileLink img={twitchImg} url={user.twitch} /> : null;
    const tiktokBlock = user.tiktok != "" ? <ProfileLink img={tiktokImg} url={user.tiktok} /> : null;
    const tgBlock = user.tg != "" ? <ProfileLink img={tgImg} url={user.tg} /> : null;

    const avatar = user.avatar == "data:image/jpeg;base64," ? <img src={profileImg} /> : <img src={user.avatar} />;

    return (
        <div className="profile">
            <span className="views">Переглядів: {user.views}</span>
            <div className="profile-main">
                <div className="logo">
                    {avatar}
                </div>
                <h1 className="profile-title">{user.username}</h1>
                <div className="profile-descr">
                    {user.descr}
                </div>
                <div className="profile-links">
                    {instBlock}
                    {discordBlock}
                    {fbBlock}
                    {steamBlock}
                    {twitchBlock}
                    {tiktokBlock}
                    {tgBlock}
                </div>
            </div>
        </div>
    );
}