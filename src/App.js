// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react'
import '@gooddata/react-components/styles/css/main.css'

import "./App.scss"

import MonthViewChart from "./components/monthViewChart"
import YearViewChart from "./components/yearViewChart"

const App = () => {
    return (
        <div id="App">
            <main className="container">
                <div style={{ height: '530px' }}>
                    <MonthViewChart />
                </div>
                <h2>$ Gross Profit - All Months</h2>
                <div style={{ height: '530px' }}>
                    <YearViewChart />
                </div>
            </main>
        </div>
    )
}

export default App
