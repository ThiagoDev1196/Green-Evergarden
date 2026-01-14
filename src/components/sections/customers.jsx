import CustomerOpinion from "./customer-opinion";
import CustomersData from "../data/customers-data";

function Customers() {

    const customers = [...CustomersData]

    return (
        <div id="customers" className="customers__container flex flex-col items-center scroll-mt-10 md:scroll-mt-45 pt-5   m-6 justify-center ">

            <p className="text-3xl text-center mb-2 mt-5">What our customers say</p>

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