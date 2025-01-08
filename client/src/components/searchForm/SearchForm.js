import "../../styles/SearchForm.css";
import { useState } from "react";

export const SearchForm = () => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(username, '_blank', 'noopener,noreferrer');
    }

    const onChange = (e) => {
        setUsername(e.target.value);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <h2 className="search-title">Знайдіть профіль</h2>
            <div className="search">
                <input className="search-textfield" type="text" onChange={onChange} placeholder="..." />
                <input className="search-btn" type="submit" value="Пошук" />
            </div>
        </form>
    );
}