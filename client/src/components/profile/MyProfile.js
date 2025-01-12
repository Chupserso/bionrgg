import "../../styles/Profile.css";
import instaImg from "../../resources/img/insta.png";
import discordImg from "../../resources/img/discord.png";
import facebookImg from "../../resources/img/facebook.png";
import steamImg from "../../resources/img/steam.png";
import twitchImg from "../../resources/img/twitch.png";
import tiktokImg from "../../resources/img/tiktok.png";
import tgImg from "../../resources/img/tg.png";
import profileImg from "../../resources/img/profile.png";
import linkedinImg from "../../resources/img/linkedin.png"
import youtubeImg from "../../resources/img/youtube.png"
import olxImg from "../../resources/img/olx.png"
import amazonImg from "../../resources/img/amazon.png"
import promImg from "../../resources/img/prom.png"
import githubImg from "../../resources/img/github.png"
import binanceImg from "../../resources/img/binance.png"
import fhuntImg from "../../resources/img/fhunt.png"
import upworkImg from "../../resources/img/upwork.png"
import fiverrImg from "../../resources/img/fiverr.png"
import xImg from "../../resources/img/x.png"
import whatsappImg from "../../resources/img/whatsapp.png"
import redditImg from "../../resources/img/reddit.png"
import siteImg from "../../resources/img/site.png"
import { ProfileLink } from "../profileLink/ProfileLink";

export const MyProfile = (props) => {
    const username = localStorage.getItem("userID");

    const {colorText, avatar, descr, inst, fb, steam, discord, views, twitch, tiktok, tg, color, linkedin, youtube, olx, amazon, prom, github, binance, fhunt, upwork, fiverr, x, whatsapp, reddit, site} = props;

    const instBlock = inst != "" ? <ProfileLink img={instaImg} url={inst} /> : null;
    const discordBlock = discord != "" ? <ProfileLink img={discordImg} url={discord} /> : null;
    const fbBlock = fb != "" ? <ProfileLink img={facebookImg} url={fb} /> : null;
    const steamBlock = steam != "" ? <ProfileLink img={steamImg} url={steam} /> : null;

    const twitchBlock = twitch != "" ? <ProfileLink img={twitchImg} url={twitch} /> : null;
    const tiktokBlock = tiktok != "" ? <ProfileLink img={tiktokImg} url={tiktok} /> : null;
    const tgBlock = tg != "" ? <ProfileLink img={tgImg} url={tg} /> : null;

    const linkedinBlock = linkedin != "" ? <ProfileLink img={linkedinImg} url={linkedin} /> : null;
    const youtubeBlock = youtube != "" ? <ProfileLink img={youtubeImg} url={youtube} /> : null;
    const olxBlock = olx != "" ? <ProfileLink img={olxImg} url={olx} /> : null;
    const amazonBlock = amazon != "" ? <ProfileLink img={amazonImg} url={amazon} /> : null;
    const promBlock = prom != "" ? <ProfileLink img={promImg} url={prom} /> : null;
    const githubBlock = github != "" ? <ProfileLink img={githubImg} url={github} /> : null;
    const binanceBlock = binance != "" ? <ProfileLink img={binanceImg} url={binance} /> : null;
    const fhuntBlock = fhunt != "" ? <ProfileLink img={fhuntImg} url={fhunt} /> : null;
    const upworkBlock = upwork != "" ? <ProfileLink img={upworkImg} url={upwork} /> : null;
    const fiverrBlock = fiverr != "" ? <ProfileLink img={fiverrImg} url={fiverr} /> : null;
    const xBlock = x != "" ? <ProfileLink img={xImg} url={x} /> : null;
    const whatsappBlock = whatsapp != "" ? <ProfileLink img={whatsappImg} url={whatsapp} /> : null;
    const redditBlock = reddit != "" ? <ProfileLink img={redditImg} url={reddit} /> : null;
    const siteBlock = site != "" ? <ProfileLink img={siteImg} url={site} /> : null;

    const img = avatar == "data:image/jpeg;base64," ? profileImg : avatar;

    return (
        <div className="profile" style={{background: color}}>
            <span className="views">Переглядів: {views}</span>
            <div className="profile-main">
                <div className="logo">
                    <img src={img} />
                </div>
                <h1 className="profile-title" style={{color: colorText}}>{username}</h1>
                <div className="profile-descr" style={{color: colorText}}>
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
                </div>
            </div>
        </div>
    );
}