import React, { useState } from "react";
import Tab from "./tab";
import CoffeeCard from "./CoffeeCard";

const Tabs = ({ tabs, data }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="coffee-grid">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} onClick={() => handleTabClick(index)} isActive={index === activeTab} />
                ))}
            </div>
            {activeTab === 0 &&
                data &&
                data.filter((coffee) => coffee.available).map((coffee) => <CoffeeCard key={coffee.id} coffee={coffee} />)}
            {activeTab === 1 && data && data.map((coffee) => <CoffeeCard key={coffee.id} coffee={coffee} />)}
        </div>
    );
};

export default Tabs;
