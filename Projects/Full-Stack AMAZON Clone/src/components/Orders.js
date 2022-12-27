/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import db from "../firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <div className="orders">
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
