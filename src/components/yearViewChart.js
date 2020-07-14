// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState, useEffect } from 'react'
import { projectId } from "../common/defaults"

import { ColumnChart } from '@gooddata/react-components'

const YearViewChart = (props) => {

    const [ initalized, setInitalized ] = useState(true)
    const [ measures, setMeasures ] = useState(null)
    const [ viewBy, setViewBy ] = useState(null)

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
        setView({
            visualizationAttribute:
                {
                    displayForm: {
                        uri: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142'
                    },
                    localIdentifier: 'a1'
                }
        })
    }, [])

    const initData = async (data) => {
        try {
            setMeasures(data)
        } catch (e) {
            setInitalized(false)
            console.log(e)
        }
    }

    const setView = (view) => {
        setViewBy(view)
    }

    return (
        <div style={props.style}>
            <h2>$ Gross Profit - All Months</h2>
            {initalized &&
                <ColumnChart projectId={projectId} measures={measures} viewBy={viewBy}/>
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

export default YearViewChart
