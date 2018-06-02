import React, {Component} from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data) {
    return _.round(_.sum(data)/data.length);
}

class Chart extends Component {
    render(){
        return (
            <div id='chart'>
            <Sparklines height={120} width={180} data={this.props.feature}>
                <SparklinesLine color={this.props.color} />
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div className="h4">{average(this.props.feature)}{this.props.unit}</div>
            </div>
        )
    }
}

export default Chart;