import React from "react";
import Home from "./Components/Home";
import './App.css';
import DataProvider from "./Context/DataProvider";


export default function App() {
    return (
        <div className="App">
            <DataProvider>
                <Home />
            </DataProvider>
        </div>
    )
}