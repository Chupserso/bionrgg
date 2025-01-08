import "../../styles/ErrorPage.css";

export const ErrorPage = (props) => {
    const {setIsHeader} = props;
    setIsHeader(true);

    return (
        <div className="error-page">
            <h1 className="error-title">Цей профіль не існує...</h1>
        </div>
    );
}