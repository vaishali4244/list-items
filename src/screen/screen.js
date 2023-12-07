import { useState } from "react";


const Screen = () => {
    const [titles, setTitles] = useState([]);
    const [descriptions, setDescriptions] = useState("");
    const [addTitle, setAddTitle] = useState("");
    const [addDescription, setAddDescription] = useState("");

    //function to add items in the present list
    const addItemFunc = (title, description) => {
        setTitles([...titles, title]);
        setDescriptions([...descriptions, description])
    };

    //function to add new items and clear the input fields
    const handleAddItem = () => {
        if (addTitle.trim() !== "" && addDescription.trim() !== "") {
            addItemFunc(addTitle, addDescription);
            setAddTitle("");
            setAddDescription("");
        }
    };

    return (
        <div className="container">
            <h1> Your List</h1>
            <div className="content">
                <div className="title-content">
                    <h4>Title</h4>
                    <input
                        type="text"
                        placeholder="add title"
                        onChange={(e) => setAddTitle(e?.target?.value)}
                        value={addTitle}
                    />
                </div>
                <div className="desc-content">
                    <h4>Description</h4>
                    <textarea placeholder="add description"
                        onChange={(e) => setAddDescription(e?.target?.value)}
                        value={addDescription}
                        rows="4"
                        cols="50"
                    />
                </div>
                <button onClick={handleAddItem}>Submit</button>
            </div>
            <ol>
                {titles?.map((item, i) => (
                    <li key={i} >
                        <h4>Title : {item}</h4>
                        <p>Description : {descriptions[i]}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Screen;