import "../../styles/Profile.css";
import instaImg from "../../resources/img/insta.png";
import discordImg from "../../resources/img/discord.png";
import facebookImg from "../../resources/img/facebook.png";
import steamImg from "../../resources/img/steam.png";
import twitchImg from "../../resources/img/twitch.png";
import tiktokImg from "../../resources/img/tiktok.png";
import tgImg from "../../resources/img/tg.png";
import profileImg from "../../resources/img/profile.png";
import { ProfileLink } from "../profileLink/ProfileLink";

export const MyProfile = (props) => {
    const username = localStorage.getItem("userID");

    const {avatar, descr, inst, fb, steam, discord, views, twitch, tiktok, tg} = props;

    const instBlock = inst != "" ? <ProfileLink img={instaImg} url={inst} /> : null;
    const discordBlock = discord != "" ? <ProfileLink img={discordImg} url={discord} /> : null;
    const fbBlock = fb != "" ? <ProfileLink img={facebookImg} url={fb} /> : null;
    const steamBlock = steam != "" ? <ProfileLink img={steamImg} url={steam} /> : null;

    const twitchBlock = twitch != "" ? <ProfileLink img={twitchImg} url={twitch} /> : null;
    const tiktokBlock = tiktok != "" ? <ProfileLink img={tiktokImg} url={tiktok} /> : null;
    const tgBlock = tg != "" ? <ProfileLink img={tgImg} url={tg} /> : null;

    const img = avatar == "data:image/jpeg;base64," ? profileImg : avatar;

    return (
        <div className="profile">
            <span className="views">Переглядів: {views}</span>
            <div className="profile-main">
                <div className="logo">
                    <img src={img} />
                </div>
                <h1 className="profile-title">{username}</h1>
                <div className="profile-descr">
                    {descr}
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