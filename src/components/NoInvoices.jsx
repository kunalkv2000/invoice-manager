import React from "react";
import { Link } from "react-router-dom";
import { BiPlus, BiShow } from "react-icons/bi";
/**
 * Renders a component to display when no invoices are found.
 * @returns {JSX.Element} The NoInvoices component.
 */
const NoInvoices = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="./nothing1.png"
        alt="Nothing left"
        width="400px"
        height="auto"
        style={{ marginTop: "2rem" }}
      />

      <h1>You don't have any invoices</h1>
      <p className="text-body-secondary text-center">
        There are no invoices to display at the moment.
      </p>
      <Link
        to="/create"
        type="button"
        className="btn btn-primary rounded-pill shadow-lg"
      >
        <BiPlus /> Add Invoice
      </Link>
    </div>
  );
};

export default NoInvoices;
