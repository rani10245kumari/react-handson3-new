import React, { Component } from "react";

class DataStore extends Component {
    render() {
        return (
            <div className="parent">
                {this.props.value.map((element) => (
                    <div key={element.id} className="child">
                        <p className="para">
                            Name of Student: {element.name} || Department:{" "}
                            {element.department} || Rating: {element.rating}
                        </p>
                    </div>
                ))}
                <button onClick={this.props.value1} className="go">
                    Go Back
                </button>
            </div>
        );
    }
}

export default DataStore;