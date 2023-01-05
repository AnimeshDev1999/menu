import React from "react";
import "./Table.css";

const Table = (props) => {
  return (
    <React.Fragment>
      {props.item.map((cur) => (
        <table className="items">
          <tr>
            <td>{cur.name}</td>
            <td>{cur.price + "/-"}</td>
          </tr>
        </table>
      ))}
    </React.Fragment>
    // <table className="items">
    //   <tr>
    //     <td>{props.item[0].name}</td>
    //     <td>{props.item[0].price + "/-"}</td>
    //   </tr>
    // </table>
  );
};

export default Table;
