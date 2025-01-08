export const ProfilesItem = (props) => {
    const {username, descr, views} = props;

    const redirectToProfile = () => {
        window.open(username, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="profiles-item" onClick={redirectToProfile}>
            <div className="profiles-bio">
                <h2 className="profiles-title">{username}</h2>
                <br /><div className="profiles-descr">
                    {descr}
                </div>
            </div>
            <div className="profiles-info">
                <br />
                <div className="profiles-views">Переглядів: {views}</div>
            </div>
        </div>
    );
}