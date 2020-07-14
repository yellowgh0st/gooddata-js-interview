// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState, useEffect } from 'react'
import { projectId } from "../common/defaults"

import { ColumnChart } from '@gooddata/react-components'

const MonthViewChart = (props) => {

    const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877'
    const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142'
    const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180'

    const [ initalized, setInitalized ] = useState(true)
    const [ measures, setMeasures ] = useState(null)
    const [ filter, setFilter ] = useState(null)

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
    }, [])

    const initData = async (data) => {
        try {
            setMeasures(data)
        } catch (e) {
            setInitalized(false)
            console.log(e)
        }
    }

    return (
        <div style={props.style}>
            <h1>$ Gross Profit in month 2016</h1>
            {initalized &&
                <ColumnChart projectId={projectId} measures={measures} style={'block'} />
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
