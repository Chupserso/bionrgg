import { MainPage, CreatePage, ErrorPage, LoginPage, ProfilesPage, MyProfilePage, ProfilePage } from "../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { useState } from "react";

export const RoutesBlock = (props) => {
    const {isRegistered, setIsRegistered} = props;

    if (localStorage.getItem("userID") != undefined) {
        setIsRegistered(true);
    } else {
        setIsRegistered(false);
    }

    const [isHeader, setIsHeader] = useState(true);

    const currentUrl = window.location.href.replace("http://localhost:3000/");
    let profileUsername;
    let isProfile;
    if (currentUrl != "/create-profile" || currentUrl != "/sign-in" || currentUrl != "/profiles" || currentUrl != "/my-profile" || currentUrl != "/error-profile") {
        isProfile = true
        profileUsername = currentUrl;
    } else {
        isProfile = false
    }

    profileUsername = profileUsername.replace("undefined", "");

    return (
        <Router>
            {
                isHeader == true ? <Header isRegistered={isRegistered} /> : null
            }
            <Routes>
                <Route path="/" element={<MainPage setIsHeader={setIsHeader} />} />
                <Route path="/create-profile" element={<CreatePage setIsRegistered={setIsRegistered} setIsHeader={setIsHeader} />} />
                <Route path="/sign-in" element={<LoginPage setIsRegistered={setIsRegistered} setIsHeader={setIsHeader} />} />
                <Route path="/profiles" element={<ProfilesPage setIsHeader={setIsHeader} />} />
                <Route path="/my-profile" element={<MyProfilePage setIsHeader={setIsHeader} setIsRegistered={setIsRegistered} isRegistered={isRegistered} />} />
                <Route path="/error-profile" element={<ErrorPage setIsHeader={setIsHeader} />} />
                {
                    isProfile == true ? <Route path={profileUsername} element={<ProfilePage username={profileUsername} setIsHeader={setIsHeader} />} /> : null
                }
                <Route path="*" element={<ErrorPage setIsHeader={setIsHeader} />} />
            </Routes>
        </Router>
    );
}