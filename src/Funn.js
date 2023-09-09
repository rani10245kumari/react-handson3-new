import React from "react";

const Formfun = ({ value, value1 }) => {
    return (
        <div className="parent">
            {value.map((element) => (
                <div key={element.id} className="child">
                    <p className="para">
                        Name of Student: {element.name} || Department:{" "}
                        {element.department} || Rating: {element.rating}
                    </p>
                </div>
            ))}
            <button onClick={value1} className="back">
                Go Back
            </button>
        </div>
    );
};

export default Formfun;

