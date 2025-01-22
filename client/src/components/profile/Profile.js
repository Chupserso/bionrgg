import "../../styles/Profile.css";
import instaImg from "../../resources/img/insta.png";
import discordImg from "../../resources/img/discord.png";
import facebookImg from "../../resources/img/facebook.png";
import steamImg from "../../resources/img/steam.png";
import twitchImg from "../../resources/img/twitch.png";
import tiktokImg from "../../resources/img/tiktok.png";
import tgImg from "../../resources/img/tg.png";
import profileImg from "../../resources/img/profile.png";
import linkedinImg from "../../resources/img/linkedin.png";
import youtubeImg from "../../resources/img/youtube.png";
import olxImg from "../../resources/img/olx.png";
import amazonImg from "../../resources/img/amazon.png";
import promImg from "../../resources/img/prom.png";
import githubImg from "../../resources/img/github.png";
import binanceImg from "../../resources/img/binance.png";
import fhuntImg from "../../resources/img/fhunt.png";
import upworkImg from "../../resources/img/upwork.png";
import fiverrImg from "../../resources/img/fiverr.png";
import xImg from "../../resources/img/x.png";
import whatsappImg from "../../resources/img/whatsapp.png";
import redditImg from "../../resources/img/reddit.png";
import siteImg from "../../resources/img/site.png";
import djinniImg from "../../resources/img/dj.png";
import douImg from "../../resources/img/dou.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileLink } from "../profileLink/ProfileLink";
import Swal from "sweetalert2";

export const Profile = (props) => {
    const {username} = props;

    const [user, setUser] = useState({username: "", descr: "", inst: "", fb: "", discord: "", steam: "", views: 0, avatar: "", color: "", bg: "", colorText: "", linkedin: "", youtube: "", olx: "", amazon: "", prom: "", github: "", binance: "", fhunt: "", upwork: "", fiverr: "", x: "", whatsapp: "", reddit: "", site: "", djinni: "", dou: ""});

    const navigate = useNavigate();

    useEffect(() => {
        Swal.fire({
            title: "Профіль завантажується...",
            didOpen: () => {
                Swal.showLoading();
                const data = {action: "get", username: username};
                let userArray;
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
                            username: userArray[0], descr: userArray[1], inst: userArray[2], fb: userArray[3], discord: userArray[4], steam: userArray[5], views: Number(userArray[6]), avatar: "data:image/jpeg;base64," + userArray[7], twitch: userArray[8], tiktok: userArray[9], tg: userArray[10], color: userArray[11], bg: "data:image/jpeg;base64," + userArray[12], colorText: userArray[13], linkedin: userArray[14], youtube: userArray[15], olx: userArray[16], amazon: userArray[17], prom: userArray[18], github: userArray[19], binance: userArray[20], fhunt: userArray[21], upwork: userArray[22], fiverr: userArray[23], x: userArray[24], whatsapp: userArray[25], reddit: userArray[26], site: userArray[27], djinni: userArray[28], dou: userArray[29]
                        });
                        Swal.hideLoading();
                        Swal.close();
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

    const linkedinBlock = user.linkedin != "" ? <ProfileLink img={linkedinImg} url={user.linkedin} /> : null;
    const youtubeBlock = user.youtube != "" ? <ProfileLink img={youtubeImg} url={user.youtube} /> : null;
    const olxBlock = user.olx != "" ? <ProfileLink img={olxImg} url={user.olx} /> : null;
    const amazonBlock = user.amazon != "" ? <ProfileLink img={amazonImg} url={user.amazon} /> : null;
    const promBlock = user.prom != "" ? <ProfileLink img={promImg} url={user.prom} /> : null;
    const githubBlock = user.github != "" ? <ProfileLink img={githubImg} url={user.github} /> : null;
    const binanceBlock = user.binance != "" ? <ProfileLink img={binanceImg} url={user.binance} /> : null;
    const fhuntBlock = user.fhunt != "" ? <ProfileLink img={fhuntImg} url={user.fhunt} /> : null;
    const upworkBlock = user.upwork != "" ? <ProfileLink img={upworkImg} url={user.upwork} /> : null;
    const fiverrBlock = user.fiverr != "" ? <ProfileLink img={fiverrImg} url={user.fiverr} /> : null;
    const xBlock = user.x != "" ? <ProfileLink img={xImg} url={user.x} /> : null;
    const whatsappBlock = user.whatsapp != "" ? <ProfileLink img={whatsappImg} url={user.whatsapp} /> : null;
    const redditBlock = user.reddit != "" ? <ProfileLink img={redditImg} url={user.reddit} /> : null;
    const siteBlock = user.site != "" ? <ProfileLink img={siteImg} url={user.site} /> : null;
    const djinniBlock = user.djinni != "" ? <ProfileLink img={djinniImg} url={user.djinni} /> : null;
    const douBlock = user.dou != "" ? <ProfileLink img={douImg} url={user.dou} /> : null;

    const avatar = user.avatar == "data:image/jpeg;base64," ? <img src={profileImg} /> : <img src={user.avatar} />;

    return (
        <div className="profile" style={{background: user.color}}>
            <span className="views">Переглядів: {user.views}</span>
            <div className="profile-main">
                <div className="logo">
                    {avatar}
                </div>
                <h1 className="profile-title" style={{color: user.colorText}}>{user.username}</h1>
                <div className="profile-descr" style={{color: user.colorText}}>
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
                    {linkedinBlock}
                    {youtubeBlock}
                    {olxBlock}
                    {amazonBlock}
                    {promBlock}
                    {githubBlock}
                    {binanceBlock}
                    {fhuntBlock}
                    {upworkBlock}
                    {fiverrBlock}
                    {xBlock}
                    {whatsappBlock}
                    {redditBlock}
                    {siteBlock}
                    {djinniBlock}
                    {douBlock}
                </div>
            </div>
        </div>
    );
}