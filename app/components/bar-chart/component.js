import Ember from 'ember'
import {
  select
} from 'd3-selection'
import {
  scaleLinear,
  scaleBand
} from 'd3-scale'

export default Ember.Component.extend({

  didInsertElement () {
    let valueKey = this.get('valueKey')
    let labelKey = this.get('labelKey')
    let dataArr = this.get('data')
    let dataCounts = dataArr.map(item => item[valueKey])

    let chartHeight = 150
    let chartWidth = 300

    let yScale = scaleLinear()
      .domain([0, Math.max(...dataCounts)])
      .range([0, chartHeight])

    let xScale = scaleBand()
      .domain(dataArr.map(item => item[labelKey]))
      .range([0, chartWidth])
      .paddingInner(0.10)

    let svg = select(this.$('svg')[0])

    svg.selectAll('rect')
      .data(dataArr)
      .enter()
      .append('rect')
      .attr('width', xScale.bandwidth())
      .attr('height', item => yScale(item[valueKey]))
      .attr('x', item => xScale(item[labelKey]))
      .attr('y', item => chartHeight - yScale(item[valueKey]))
  }

})
