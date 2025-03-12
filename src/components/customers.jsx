import React from "react";
import CustomerOpinion from "./customer-opinion";
import CustomersData from "./customers-data";

function Customers() {

    const customers = [...CustomersData]

    return (
        <div className="customers__container flex flex-col items-center m-6 justify-center ">

            <p className="text-3xl text-center mb-6">What our customers say</p>

            {customers.map((CustomersData) => (
                <CustomerOpinion
                key={CustomersData.id}
                name={CustomersData.name}
                picture={CustomersData.picture}
                text={CustomersData.text}
                />
            ))}
        </div>
    );
}

export default Customers