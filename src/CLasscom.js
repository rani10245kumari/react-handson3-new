import React, { Component } from "react";
import DataStore from "./Display";
import "../App.css";
class Formpage extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Department: "",
            Rating: "",
            pageDirect: true,
            empDataStore: [],
        };
    }
    generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const tempobj = {
            id: this.generateUniqueId(),
            name: this.state.Name,
            department: this.state.Department,
            rating: this.state.Rating,
        };

        if (
            tempobj.name.length > 0 &&
            tempobj.department.length > 0 &&
            tempobj.rating.length > 0
        ) {
            this.setState((prevState) => ({
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

    toggleFun = () => {
        this.setState({ pageDirect: !this.state.pageDirect });
    };

    render() {
        return (
            <>
                <h1 className="head">!! Employee Feedback Form !!</h1>
                {this.state.pageDirect ? (
                    <form>
                        <label className="label" htmlFor="name">
                            Name:{" "}
                        </label>
                        <input
                            className="input1"
                            type="text"
                            id="name"
                            name="Name"
                            value={this.state.Name}
                            placeholder="Enter Your Name"
                            onChange={this.handleChange}
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
                            value={this.state.Department}
                            placeholder="Enter Department Name"
                            onChange={this.handleChange}
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
                            value={this.state.Rating}
                            placeholder="Give Rating"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <br />
                        <br />
                        <button className="btn" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </form>
                ) : (
                    <DataStore value={this.state.empDataStore} value1={this.toggleFun} />
                )}
            </>
        );
    }
}

export default Formpage;