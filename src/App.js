import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { AfmComponents } from '@gooddata/react-components';
import catalogJson from './catalog.json';

const { ColumnChart } = AfmComponents;


class App extends Component {
    getAfmMeasures() {
        return {
            measures: [{
                id: '# of Activities',
                definition: {
                    baseObject: {
                        id: catalogJson.metrics['# of Activities'].identifier
                    }
                }
            }]
        }
    }

    getAfm() {
        return {
            ...this.getAfmMeasures(),
            filters: [{
                between: [-1, -1],
                granularity: 'year',
                id: catalogJson.dateDataSets['Date (Activity)'].identifier,
                intervalType: 'relative',
                type: 'date'
            }]
        };
    }

    getAfmForAllYears() {
        return {
            ...this.getAfmMeasures(),
            attributes: [{
                id: catalogJson.dateDataSets['Date (Activity)'].attributes['Year (Activity)'].defaultDisplayForm.identifier,
                type: 'attribute'
            }]
        }
    }

    renderDropdown() {
        return (
            <select defaultValue="2016">
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
            </select>
        )
    }

    render() {
        const projectId = 'la84vcyhrq8jwbu4wpipw66q2sqeb923';
        const afm = this.getAfm();
        const afmAllYears = this.getAfmForAllYears();

        return (
            <div className="App">
                <h1># of Activities: Year {this.renderDropdown()}</h1>
                <div>
                    <ColumnChart
                        afm={afm}
                        projectId={projectId}
                    />
                </div>
                <h1># of Activities: Overview (Year by Year)</h1>
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
