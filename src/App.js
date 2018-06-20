// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { AfmComponents } from '@gooddata/react-components';

const { ColumnChart } = AfmComponents;

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInYears = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2005';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';


class App extends Component {
    getAfmMeasures() {
        return {
            measures: [
                {
                    localIdentifier: 'm1',
                    definition: {
                        measure: {
                            item: {
                                uri: grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            ]
        }
    }

    getAfm() {
        return {
            ...this.getAfmMeasures(),
            filters: [
                {
                    absoluteDateFilter: {
                        dataSet: {
                            uri: dateAttribute
                        },
                        from: '2016-01-01',
                        to: '2016-12-31'
                    }
                }
            ]
        };
    }

    getAfmForAllYears() {
        return {
            ...this.getAfmMeasures(),
            attributes: [
                {
                    displayForm: {
                        uri: dateAttributeInYears
                    },
                    localIdentifier: 'a1'
                }
            ]
        }
    }

    renderDropdown() {
        return (
            <select defaultValue="2016">
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
            </select>
        )
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const afm = this.getAfm();
        const afmAllYears = this.getAfmForAllYears();

        return (
            <div className="App">
                <h1>$ Gross Profit in Year {this.renderDropdown()}</h1>
                <div>
                    <ColumnChart
                        afm={afm}
                        projectId={projectId}
                    />
                </div>
                <h1>$ Gross Profit - All years</h1>
                <div>
                    <ColumnChart
                        afm={afmAllYears}
                        projectId={projectId}
                    />
                </div>
         </div>
      );
   }
}

export default App;
