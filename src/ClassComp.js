import React, { useState } from "react";
import Formfun from "./Funn";
import "./App.css";

const Formpage = () => {
    const [state, setState] = useState({
        Name: "",
        Department: "",
        Rating: "",
        pageDirect: true,
        empDataStore: [],
    });

    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempobj = {
            id: generateUniqueId(),
            name: state.Name,
            department: state.Department,
            rating: state.Rating,
        };

        if (
            tempobj.name.length > 0 &&
            tempobj.department.length > 0 &&
            tempobj.rating.length > 0
        ) {
            setState((prevState) => ({
                empDataStore: [...prevState.empDataStore, tempobj],
                Name: "",
                Department: "",
                Rating: "",
                pageDirect: false,
            }));
            alert("Successfully Submitted");
        } else {
            alert("Not Accepted Yaar");
        }
    };

    const toggleFun = () => {
        setState({ ...state, pageDirect: !state.pageDirect });
    };

    return (
        <>
            <h1 className="head">
                !! Employee Feedback Form With All Details !!
            </h1>
            <br></br>
            {state.pageDirect ? (
                <form>
                    <label className="label" htmlFor="name">
                        Name:{" "}
                    </label>
                    <input
                        className="input1"
                        type="text"
                        id="name"
                        name="Name"
                        value={state.Name}
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <label className="label" htmlFor="depart">
                        Department:{" "}
                    </label>
                    <input
                        className="input1"
                        type="text"
                        id="depart"
                        name="Department"
                        value={state.Department}
                        placeholder="Enter Department Name"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <label className="label" htmlFor="rating">
                        Rating:{" "}
                    </label>
                    <input
                        className="input1"
                        type="number"
                        id="rating"
                        name="Rating"
                        value={state.Rating}
                        placeholder="Give Rating"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <br />
                    <button className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            ) : (
                <Formfun value={state.empDataStore} value1={toggleFun} />
            )}
        </>
    );
};

export default Formpage;