import { Link } from "react-router-dom";

export const ProfileLink = (props) => {
    const {url, img} = props

    return (
        <div className="profile-link">
            <Link to={url} target="blank">
                <img src={img} alt="profile-link" />
            </Link>
        </div>
    );
}