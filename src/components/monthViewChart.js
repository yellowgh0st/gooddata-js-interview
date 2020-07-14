// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState, useEffect } from 'react'
import { projectId } from "../common/defaults"

import { ColumnChart } from '@gooddata/react-components'

export const Select = (props) => {
        return (
            <select defaultValue="1" onChange={props.onChange}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        )
}

const MonthViewChart = (props) => {

    const [ initalized, setInitalized ] = useState(true)
    const [ measures, setMeasures ] = useState(null)
    const [ filter, setFilter ] = useState(null)

    const [ year ] = useState(2016)
    const [ month ] = useState(1)
    const [ dayFrom ] = useState(1)
    const [ dayTo ] = useState(31)

    const chartData = [{
        measure: {
            localIdentifier: 'm1',
            definition: {
                measureDefinition: {
                    item: {
                        uri: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877'
                    }
                }
            },
            alias: '$ Gross Profit'
        }
    }]

    useEffect(() => {
        initData(chartData)
        setFilter([{
            absoluteDateFilter: {
                dataSet: {
                    uri: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180'
                },
                from: `${year}-${month}-${dayFrom}`,
                to: `${year}-${month}-${dayTo}`
            }
        }])
    }, [])

    const initData = async (data) => {
        try {
            setMeasures(data)
        } catch (e) {
            setInitalized(false)
            console.log(e)
        }
    }

    const onMonthChange = (e) => {
        const value = e.target.value
        const data = [{
            absoluteDateFilter: {
                dataSet: {
                    uri: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180'
                },
                from: `${year}-${value}-${dayFrom}`,
                to: `${year}-${value}-${dayTo}`
            }
        }]
        setFilter(data)
    }

    return (
        <div style={props.style}>
            <h2>$ Gross Profit in month <Select onChange={onMonthChange}/> 2016</h2>
            {initalized &&
                <ColumnChart projectId={projectId} measures={measures} filters={filter}  style={{ display: 'block' }} />
            }
            {!initalized &&
                <div style={{ textAlign: 'center' }}>
                    <h3>No Data Found</h3>
                    <p>We're sorry, but we have got no data.
                    You might want to try to reload first.</p>
                    <button onClick={() => initData(chartData)}>Reload</button>
                </div>
            }
        </div>
    )
}

export default MonthViewChart
