import Component from '@ember/component';

export default Component.extend({
  factors: [
    'Balance of recently delinquent commercial accounts',
    'Balance of commercial accounts at worst delinquency',
    'Commercial account delinquency in the last 6 months'
  ],
  showCalculations: false,
  actions:{
    toggleCalculationsContainer(){
      this.toggleProperty('showCalculations');
    }
  }
});
