import Card from "./Components/Card";
import Heading from "./Components/Heading";
import Table from "./Components/Table";
import Button from "./Components/Button";
import React from "react";
import Footer from "./Components/Footer";

function App() {
  const Data = [
    {
      cat: "Desi Ghee Item",
      itm: [
        { name: "Rawa Shahi Dosa", price: 170 },
        { name: "Rawa Shahi Mushroom Dosa", price: 190 },
        { name: "Rawa Paneer Dosa", price: 170 },
        { name: "Shahi Mushroom Dosa", price: 180 },
      ],
    },
    {
      cat: "South Indian",
      itm: [
        { name: "Rawa Mushroom Dosa", price: 165 },
        { name: "Rawa Dosa", price: 150 },
      ],
    },
    {
      cat: "Chowmein",
      itm: [
        { name: "Veg. Chow Mein", price: 180 },
        { name: "Mix Chow Mein", price: 220 },
        { name: "Cheese Chow Mein", price: 210 },
        { name: "Singapuri Chow Mein", price: 205 },
      ],
    },
    {
      cat: "Sabji",
      itm: [
        { name: "Shahi Paneer", price: 260 },
        { name: "Paneer Butter Masala", price: 250 },
        { name: "Kadhai Paneer", price: 250 },
      ],
    },
  ];

  console.log(Data[0].itm);

  return (
    <React.Fragment>
      <h2>Rajesh Sweets | Menu</h2>
      {Data.map((cur) => (
        <Card>
          <Heading>{cur.cat}</Heading>
          <Table item={cur.itm} />
        </Card>
      ))}
      <Button></Button>
      <Footer></Footer>
      {/* <Card>
        <Heading>{Data[0].cat}</Heading>
        <Table item={Data[0].itm} />
      </Card> */}
    </React.Fragment>
  );
}

export default App;
