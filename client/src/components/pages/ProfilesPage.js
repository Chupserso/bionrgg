import "../../styles/ProfilesPage.css";
import { ProfilesItem } from "../profilesItem/ProfilesItem";
import { Footer } from "../footer/Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

export const ProfilesPage = (props) => {
    const {setIsHeader} = props;
    setIsHeader(true);
    
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        Swal.fire({
            title: "Профілі завантажуються...",
            didOpen: () => {
                Swal.showLoading();
                const data = {action: "leaderboard"};
                fetch("http://bionrgg/server.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: JSON.stringify({data})
                })
                .then(response => response.text())
                .then(response => {
                    setProfiles(JSON.parse(response));
                    Swal.hideLoading();
                    Swal.close();
                });
            }
        });
    }, []);

    const items = profiles.map(item => {
        return <ProfilesItem username={item.username} descr={item.descr} views={item.views} />
    })

    return (
        <div className="profiles-page">
            <Helmet>
                <title>Топ 5 профілів | Bionrgg – Таблиця лідерів</title>
                <meta name="description" content="Перегляньте найпопулярніші цифрові візитки на платформі Bionrgg. Лідери за кількістю переглядів!" />
                <meta name="keywords" content="Bionrgg, цифрова візитка, топ профілі, блогери, геймери, підприємці, рейтинг" />
                <meta name="robots" content="index, follow" /> 
                
                {/* Open Graph для соцмереж */}
                <meta property="og:title" content="Топ 5 профілів | Bionrgg – Таблиця лідерів" />
                <meta property="og:description" content="Перегляньте найпопулярніші цифрові візитки на Bionrgg. Лідери за кількістю переглядів!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bionrgg.com/profiles" />
            </Helmet>
            <h1 className="default-title">ТАБЛИЦЯ ЛІДЕРІВ | ТОП 5</h1>
            <h2 className="profiles-subtitle">Таблиця лідерів на основі переглядів</h2>
            <div className="profiles-list">
                {items}
            </div>
            <Footer />
        </div>
    );
}