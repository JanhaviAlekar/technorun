import React from "react";
const CashPrice = () =>{
 return (

    <div className="tables-conatiner">
      <div className="table-wrapper">
      <h1 className="table-title">Above 15 years</h1>
    <div className="cashprize">
<table>
      <thead>
        <tr>
          <th>Prize</th>
          <th>Male</th>
          <th>Female</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1st</td>
          <td>Rs.10000</td>
          <td>Rs.10000</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>Rs.5000</td>
          <td>Rs.5000</td>

        </tr>
        <tr>
          <td>3rd</td>
          <td>Rs.3000</td>
          <td>Rs.3000</td>

        </tr>
        <tr>
        </tr>
      </tbody>
    </table>

    </div>
    </div>
    <div className="table-wrapper">
      <h1 className="table-title">Below 15 years</h1>
   <div className="cashprize">

    <table >
      <thead>
        <tr>
        <th>Prize</th>
          <th>Male</th>
          <th>Female</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1st</td>
          <td>Rs.10000</td>
          <td>Rs.10000</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>Rs.5000</td>
          <td>Rs.5000</td>

        </tr>
        <tr>
          <td>3rd</td>
          <td>Rs.3000</td>
          <td>Rs.3000</td>

        </tr>
      </tbody>
    </table>
   </div>
    </div>
    </div>

  );
};
export default CashPrice;
