import React, { Component } from "react";

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, firstName: "Tannu", lastName: "Waghmare", university: "RKU", dob: "2002-01-15", branch: "CE" },
        { id: 2, firstName: "Aman", lastName: "Sharma", university: "RKU", dob: "2001-05-20", branch: "IT" },
        { id: 3, firstName: "Priya", lastName: "Singh", university: "DU", dob: "2002-11-02", branch: "CS" },
        { id: 4, firstName: "Rahul", lastName: "Verma", university: "RKU", dob: "2000-08-12", branch: "ME" },
        { id: 5, firstName: "Sita", lastName: "Patel", university: "GU", dob: "2003-03-30", branch: "CE" },
        { id: 6, firstName: "Raj", lastName: "Malhotra", university: "RKU", dob: "2001-12-10", branch: "IT" },
        { id: 7, firstName: "Sneha", lastName: "Rao", university: "MU", dob: "2002-04-25", branch: "CS" },
        { id: 8, firstName: "Karan", lastName: "Johar", university: "RKU", dob: "2001-09-15", branch: "EE" },
        { id: 9, firstName: "Neha", lastName: "Kakkar", university: "PU", dob: "2003-07-08", branch: "IT" },
        { id: 10, firstName: "Vijay", lastName: "Mallya", university: "RKU", dob: "2000-02-28", branch: "CE" },
      ],
      index: 0, 
    };
  }

  nextPage = () => {
    this.setState({ index: this.state.index + 1 });
  };

  prevPage = () => {
    this.setState({ index: this.state.index - 1 });
  };

  render() {
    const { items, index } = this.state;
    
    const student = items[index];

    return (
      <div style={{ padding: "40px", textAlign: "center", fontFamily: "Arial" }}>
        <h1>Student Profile</h1>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={cardStyle}>
            <h2 style={{ color: "#2c3e50", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
              {student.firstName} {student.lastName}
            </h2>
            <p><b>University:</b> {student.university}</p>
            <p><b>Date of Birth:</b> {student.dob}</p>
            <p><b>Branch:</b> {student.branch}</p>
            <p style={{ color: "gray" }}>ID: {student.id}</p>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button 
            disabled={index === 0} 
            onClick={this.prevPage}
            style={btnStyle}
          >
            Previous
          </button>

          <span style={{ margin: "0 20px", fontWeight: "bold" }}>
            Student {index + 1} of {items.length}
          </span>

          <button 
            disabled={index === items.length - 1} 
            onClick={this.nextPage}
            style={btnStyle}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  border: "2px solid #3498db",
  borderRadius: "15px",
  padding: "20px",
  width: "300px",
  textAlign: "left",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};

const btnStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "1px solid #3498db"
};

export default Exercise;