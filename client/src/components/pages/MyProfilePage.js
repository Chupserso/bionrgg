import "../../styles/MyProfilePage.css";
import { MyProfile } from "../profile/MyProfile";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const MyProfilePage = (props) => {
    const {setIsHeader, setIsRegistered, isRegistered} = props;
    setIsHeader(false);

    const navigate = useNavigate();

    const myPersonalLink = `http://localhost:3000/${localStorage.getItem("userID")}`;

    $('.input-file input[type=file]').on('change', function(){
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    const [userInfo, setUserInfo] = useState({
        username: localStorage.getItem("userID"),
        password: localStorage.getItem("password"),
        descr: null,
        inst: "",
        discord: "",
        fb: "",
        steam: "",
        twitch: "",
        tiktok: "",
        tg: "",
        avatar: null,
        views: 0,
        color: "",
        bg: "",
        colorText: "",
        linkedin: "",
        youtube: "",
        olx: "",
        amazon: "",
        prom: "",
        github: "",
        binance: "",
        fhunt: "",
        upwork: "",
        fiverr: "",
        x: "",
        whatsapp: "",
        reddit: "",
        site: "",
        djinni: "",
        dou: ""
    });

    useEffect(() => {
        const data = {
            action: "check",
            username: userInfo.username,
            password: userInfo.password
        }
        fetch("http://bionrgg/server.php", {
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({data})
        })
        .then(response => response.text())
        .then(response => {
            if (response == "User is correct") {
                const ok = "ok";
            } else {
                localStorage.removeItem("userID");
                localStorage.removeItem("password");
                setIsRegistered(false);
            }
        });
    }, []);

    useEffect(() => {
        Swal.fire({
            title: "Профіль завантажується...",
            didOpen: () => {
                Swal.showLoading();
                const data = {action: "get", username: localStorage.getItem("userID")};
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
                    userArray = JSON.parse(response);
                    setUserInfo({
                        username: localStorage.getItem("userID"), descr: userArray[1], inst: userArray[2], fb: userArray[3], discord: userArray[4], steam: userArray[5], views: Number(userArray[6]), avatar: "data:image/jpeg;base64," + userArray[7], twitch: userArray[8], tiktok: userArray[9], tg: userArray[10], color: userArray[11], bg: "data:image/jpeg;base64," + userArray[12], colorText: userArray[13], linkedin: userArray[14], youtube: userArray[15], olx: userArray[16], amazon: userArray[17], prom: userArray[18], github: userArray[19], binance: userArray[20], fhunt: userArray[21], upwork: userArray[22], fiverr: userArray[23], x: userArray[24], whatsapp: userArray[25], reddit: userArray[26], site: userArray[27], djinni: userArray[28], dou: userArray[29]
                    });
                    Swal.hideLoading();
                    Swal.close();
                });
            }
        });
    }, [])


    if (isRegistered != true) {
        navigate("/");
    }

    const onExitBtn = () => {
        localStorage.removeItem("userID");
        setIsRegistered(false);
    }

    const onDeleteBtn = () => {
        const data = {action: "delete", username: userInfo.username};
        Swal.fire({
            title: "Ви точно хочете видалити свій акаунт?",
            showDenyButton: true,
            confirmButtonText: "Так",
            denyButtonText: `Ні`
          }).then((result) => {
            if (result.isConfirmed) {
                fetch("http://bionrgg/server.php", {
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: JSON.stringify({data})
                })
                .then(response => response.text())
                .then(response => {
                    localStorage.removeItem("userID");
                    navigate("/");
                });
            } else if (result.isDenied) {
              return false;
            }
          });
    }

    const onFileAvatar = async (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setUserInfo({...userInfo, avatar: file});
        const formData = new FormData()
        formData.append("username", localStorage.getItem("userID"));
        formData.append("image", e.target.files[0]);
        const res = await fetch("http://bionrgg/server.php", {
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData
        })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            const image = "data:image/jpeg;base64," + response;
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });
    }

    const onFileBg = async (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setUserInfo({...userInfo, bg: file});
        const formData = new FormData()
        formData.append("username", localStorage.getItem("userID"));
        formData.append("bg", e.target.files[0]);
        const res = await fetch("http://bionrgg/server.php", {
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData
        })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            const image = "data:image/jpeg;base64," + response;
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });
    }

    const onForm = (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("file", userInfo.avatar)

        const data = {
            action: "change",
            ...userInfo
        };

        fetch("http://bionrgg/server.php", {
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({data})
        })
        .then(response => response.text())
        .then(response => {
            Swal.fire({
                title: "Гарна робота!",
                text: "Ви зберегли свої зміни",
                icon: "success"
            });
        });
    }

    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    };

    return (
        <div className="profile-page" style={{background: `url(${userInfo.bg}) center center/cover no-repeat`}}>
            <div className="toolbar">
                <Link to="/">На головну сторінку</Link>
                <h2 className="toolbar-title">Панель інструментів</h2>
                <form className="profile-form" onSubmit={onForm} method="post">
                    <label>Моє особисте посилання: <br /><Link target="blank" to={myPersonalLink}>{myPersonalLink}</Link></label>
                    <br />
                    <br />
                    <label>Опис</label>
                    <br />
                    <input maxLength="200" type="text" value={userInfo.descr} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, descr: e.target.value})} />
                    <br />
                    <label>Колір тексту</label>
                    <br />
                    <input type="color" value={userInfo.color} onChange={(e) => {
                        const color = e.target.value;
                        setUserInfo({...userInfo, colorText: color});
                    }} />
                    <br />
                    <br />
                    <label>Колір головного блоку</label>
                    <br />
                    <input type="color" value={userInfo.color} onChange={(e) => {
                        const color = e.target.value;
                        const [r, g, b] = hexToRgb(color);
                        setUserInfo({...userInfo, color: `rgba(${r}, ${g}, ${b}, 0.6)`});
                    }} />
                    <br />
                    <br />
                    <label>Посилання на інстаграм</label>
                    <br />
                    <input type="text" value={userInfo.inst} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, inst: e.target.value})} />
                    <br />
                    <label>Посилання на діскорд</label>
                    <br />
                    <input type="text" value={userInfo.discord} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, discord: e.target.value})} />
                    <br />
                    <label>Посилання на фейсбук</label>
                    <br />
                    <input type="text" value={userInfo.fb} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, fb: e.target.value})} />
                    <br />
                    <label>Посилання на стім</label>
                    <br />
                    <input type="text" value={userInfo.steam} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, steam: e.target.value})} />

                    <br />
                    <label>Посилання на твіч</label>
                    <br />
                    <input type="text" value={userInfo.twitch} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, twitch: e.target.value})} />
                    <br />
                    <label>Посилання на тік ток</label>
                    <br />
                    <input type="text" value={userInfo.tiktok} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, tiktok: e.target.value})} />
                    <br />
                    <label>Посилання на телеграм</label>
                    <br />
                    <input type="text" value={userInfo.tg} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, tg: e.target.value})} />

                    <br />
                    <label>Посилання на Djinni</label>
                    <br />
                    <input type="text" value={userInfo.djinni} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, djinni: e.target.value})} />
                    <br />

                    <br />
                    <label>Посилання на Dou</label>
                    <br />
                    <input type="text" value={userInfo.dou} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, dou: e.target.value})} />
                    <br />

                    <br />
                    <label>Посилання на linkedIn</label>
                    <br />
                    <input type="text" value={userInfo.linkedin} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, linkedin: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Youtube</label>
                    <br />
                    <input type="text" value={userInfo.youtube} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, youtube: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Olx</label>
                    <br />
                    <input type="text" value={userInfo.olx} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, olx: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Amazon</label>
                    <br />
                    <input type="text" value={userInfo.amazon} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, amazon: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Prom.ua</label>
                    <br />
                    <input type="text" value={userInfo.prom} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, prom: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Github</label>
                    <br />
                    <input type="text" value={userInfo.github} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, github: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Binance</label>
                    <br />
                    <input type="text" value={userInfo.binance} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, binance: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Freelancehunt</label>
                    <br />
                    <input type="text" value={userInfo.fhunt} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, fhunt: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Upwork</label>
                    <br />
                    <input type="text" value={userInfo.upwork} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, upwork: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Fiverr</label>
                    <br />
                    <input type="text" value={userInfo.fiverr} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, fiverr: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на X.com</label>
                    <br />
                    <input type="text" value={userInfo.x} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, x: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на WhatsApp</label>
                    <br />
                    <input type="text" value={userInfo.whatsapp} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, whatsapp: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на Reddit</label>
                    <br />
                    <input type="text" value={userInfo.reddit} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, reddit: e.target.value})} />
                    <br />
                    <br />
                    <label>Посилання на мій особистий сайт</label>
                    <br />
                    <input type="text" value={userInfo.site} placeholder="..." className="profile-input" onChange={(e) => setUserInfo({...userInfo, site: e.target.value})} />
                    <br />

                    <input type="submit" className="save-btn" value="Зберегти все" />
                    <br />
                    <br />
                    <label>Аватар</label>
                    <br />
                    <label className="input-file">
                        <input type="file" name="file" accept="image/*,.png,.jpg,.gif,.web" onChange={onFileAvatar} />		
                        <span>Виберіть файл</span>
                    </label>
                    <br />
                    <br />
                    <label>Фон страницы</label>
                    <br />
                    <label className="input-file">
                        <input type="file" name="file" accept="image/*,.png,.jpg,.gif,.web" onChange={onFileBg} />		
                        <span>Виберіть файл</span>
                    </label>
                </form>
                <br /><input type="submit" className="delete-btn" value="Видалити" onClick={onDeleteBtn} />
                <br /><input type="submit" className="logout-btn" value="Вийти" onClick={onExitBtn} />
            </div>
            <MyProfile djinni={userInfo.djinni} dou={userInfo.dou} site={userInfo.site} linkedin={userInfo.linkedin} youtube={userInfo.youtube} olx={userInfo.olx} amazon={userInfo.amazon} prom={userInfo.prom} github={userInfo.github} fhunt={userInfo.fhunt} binance={userInfo.binance} fiverr={userInfo.fiverr} upwork={userInfo.upwork} x={userInfo.x} whatsapp={userInfo.whatsapp} reddit={userInfo.reddit} colorText={userInfo.colorText} color={userInfo.color} bg={userInfo.bg} avatar={userInfo.avatar} views={userInfo.views} descr={userInfo.descr} inst={userInfo.inst} fb={userInfo.fb} steam={userInfo.steam} discord={userInfo.discord} twitch={userInfo.twitch} tiktok={userInfo.tiktok} tg={userInfo.tg} />
        </div>
    );
}