more info on: https://github.com/jakubroztocil/rrule

usage:

js:
Template.demotemplate..helpers({
  demorule: function() {

    rule = new RRule({
      freq: RRule.WEEKLY,
      count: 6,
      byweekday: [RRule.TU, RRule.TH]
    });


    return rule.all();
  }
});
