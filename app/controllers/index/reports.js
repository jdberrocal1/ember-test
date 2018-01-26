import Controller from '@ember/controller';
import Dates from '../../utils/dates';

export default Controller.extend({
  today: '',
  init() {
    this._super();
    let today = new Date();
    Dates.getDateString(today);
    this.set('today', Dates.getDateString(today))
  },
  actions: {
    getCurrentDate() {

    }
  }
});
