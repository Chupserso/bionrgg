import { Link } from "react-router-dom";
import { Profile } from "../profile/Profile";

export const ProfilePage = (props) => {
    const {setIsHeader, username} = props;
    setIsHeader(false);

    return (
        <div className="profile-page">
            <Link to="/">На головну сторінку</Link>
            <Profile username={username} />
        </div>
    );
}