import { Link } from "react-router-dom";
import promImg from "../../resources/img/prom.png";

export const ProfileLink = (props) => {
    const {url, img} = props

    let styles;

    if (img == promImg) {
        styles = {borderRadius: "100%"}
    }

    return (
        <div className="profile-link">
            <Link to={url} target="blank">
                <img src={img} alt="profile-link" style={styles} />
            </Link>
        </div>
    );
}