import Ember from 'ember'
import {
  select
} from 'd3-selection'
import {
  scaleLinear,
  scaleBand
} from 'd3-scale'

export default Ember.Component.extend({

  things_we_like: [{
    name: 'Ice Crean',
    count: 15
  }, {
    name: 'Bacon',
    count: 42
  }, {
    name: 'Books',
    count: 23
  }, {
    name: 'Running',
    count: 27
  }, {
    name: 'Learning',
    count: 43
  }],

  didInsertElement () {
    let dataArr = this.get('things_we_like')
    let dataCounts = dataArr.map(thing => thing.count)

    let chartHeight = 150
    let chartWidth = 300

    let yScale = scaleLinear()
      .domain([0, Math.max(...dataCounts)])
      .range([0, chartHeight])

    let xScale = scaleBand()
      .domain(dataArr.map(thing => thing.name))
      .range([0, chartWidth])
      .paddingInner(0.10)

    let svg = select(this.$('svg')[0])

    svg.selectAll('rect')
      .data(dataArr)
      .enter()
      .append('rect')
      .attr('width', xScale.bandwidth())
      .attr('height', thing => yScale(thing.count))
      .attr('x', thing => xScale(thing.name))
      .attr('y', thing => chartHeight - yScale(thing.count))
  }

})
