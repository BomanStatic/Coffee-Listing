import React, { useEffect, useState } from "react";
import "./App.css";
import bgCafe from "./assets/bg-cafe.jpg";
import vector from "../public/vector.svg";
import Tabs from "./components/tabs";

function App() {
    const [data, setData] = useState(null);
    const tabData = [{ label: "Available Now" }, { label: "All products" }];

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        )
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (
        <main>
            <img src={bgCafe} alt="cartoonish cafe" />
            <div className="coffee-listing__container">
                <section className="coffee-listing">
                    <img className="coffee-listing__art" src={vector} alt="vector art" />
                    <h1 className="coffee-listing__title">Our Collection</h1>
                    <p className="coffee-listing__description">
                        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly
                        roasted in small batches and shipped fresh weekly.
                    </p>
                </section>
                <section className="coffee-grid">
                    <Tabs tabs={tabData} data={data} />
                    {/* {data && data.map((coffee) => <CoffeeCard key={coffee.id} coffee={coffee} />)} */}
                </section>
            </div>
        </main>
    );
}
// https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json
export default App;
