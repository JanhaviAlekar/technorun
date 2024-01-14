import React, { useEffect } from "react";
import Sponsors from "../components/Sponsors";
const CashPrice = () =>{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 return (
  <>
<div className="ALL-Pages-height">
    <div className="tables-conatiner">
      <div className="table-wrapper">
      <h1 className="table-title">Cash Prizes</h1>
    <div className="cashprize">
<table>
      <thead>
        <tr>
          <th>Prize</th>
          <th>Male/Female(10 to 14 Years)</th>
          <th>Male/Female(14 to 18 Years)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1st</td>
          <td>Rs.5000</td>
          <td>Rs.5000</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>Rs.3000</td>
          <td>Rs.3000</td>

        </tr>
        <tr>
          <td>3rd</td>
          <td>Rs.2000</td>
          <td>Rs.2000</td>

        </tr>
        <tr>
        </tr>
      </tbody>
    </table>

    </div>
    </div>
    <div className="table-wrapper">
   <div className="cashprize">

    <table >
      <thead>
        <tr>
        <th>Prize</th>
          <th>Male/Female(18 to 25 Years)</th>
          <th>FUN RUN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1st</td>
          <td>Rs.5000</td>
          <td>Rs.3000</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>Rs.3000</td>
          <td>Rs.1000</td>

        </tr>
        <tr>
          <td>3rd</td>
          <td>Rs.2000</td>
          <td>Rs.1000</td>

        </tr>
      </tbody>
    </table>
   </div>
    </div>
    </div>
    </div>
    <Sponsors/>
    </>
  );
};
export default CashPrice;
