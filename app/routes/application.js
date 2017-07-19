import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    let sample_data = [{
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
    }, {
      name: 'Writing Code',
      count: 66
    }]

    return sample_data
  }
})
