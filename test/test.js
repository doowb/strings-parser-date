
/**
 * Assemble <http://www.assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Assemble.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;
var moment = require('moment');
var Strings = require('strings');
var date = require('../');
var path = require('strings-parser-path');


describe('parser', function() {
  describe('dates', function() {
    var now = new Date();
    var formatter = function(f) {
      return moment(now).format(f);
    };

    var strings = null;
    var filepath = 'test/actual/structure_date/index.html';

    before(function(){
      strings = new Strings();
      strings.parser('date', date());
      strings.parser('path', path());
    });

    // YYYY/MM/DD
    it('should replace :date', function() {
      var expected = formatter("YYYY/MM/DD");
      var actual = strings.template(':date', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    it('should replace :date and :ext', function() {
      var expected = formatter("YYYY/MM/DD") + '/index.html';
      var actual = strings.template(':date/index:ext', ['date', 'path'], {date: now, filepath: filepath});
      expect(actual).to.eql(expected);
    });

    // Long date formats
    // MM/DD/YYYY
    it('should replace :L', function() {
      var expected = formatter("MM/DD/YYYY");
      var actual = strings.template(':L', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // M/D/YYYY
    it('should replace :1', function() {
      var expected = formatter("M/D/YYYY");
      var actual = strings.template(':1', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Year (2013, 13)
    it('should replace :year', function() {
      var expected = formatter("YYYY");
      var actual = strings.template(':year', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,          slugified(formatter("YYYY"), slugify)),
    it('should replace :YYYY', function() {
      var expected = formatter("YYYY");
      var actual = strings.template(':YYYY', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("YY"), slugify)),
    it('should replace :YY', function() {
      var expected = formatter("YY");
      var actual = strings.template(':YY', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Month name (January, Jan)
    //\b/,slugified(formatter("MMMM"), slugify)),
    it('should replace :monthname', function() {
      var expected = formatter("MMMM");
      var actual = strings.template(':monthname', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,          slugified(formatter("MMMM"), slugify)),
    it('should replace :MMMM', function() {
      var expected = formatter("MMMM");
      var actual = strings.template(':MMMM', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,            slugified(formatter("MMM"), slugify)),
    it('should replace :MMM', function() {
      var expected = formatter("MMM");
      var actual = strings.template(':MMM', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Month number (1, 01)
    //\b/,        slugified(formatter("MM"), slugify)),
    it('should replace :month', function() {
      var expected = formatter("MM");
      var actual = strings.template(':month', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("MM"), slugify)),
    it('should replace :MM', function() {
      var expected = formatter("MM");
      var actual = strings.template(':MM', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("MM"), slugify)),
    it('should replace :mo', function() {
      var expected = formatter("MM");
      var actual = strings.template(':mo', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("M"), slugify)),
    it('should replace :M', function() {
      var expected = formatter("M");
      var actual = strings.template(':M', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Day of the year
    //\b/,          slugified(formatter("DDDD"), slugify)),
    it('should replace :DDDD', function() {
      var expected = formatter("DDDD");
      var actual = strings.template(':DDDD', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,            slugified(formatter("DDD"), slugify)),
    it('should replace :DDD', function() {
      var expected = formatter("DDD");
      var actual = strings.template(':DDD', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Day of the month
    //\b/,            slugified(formatter("DD"), slugify)),
    it('should replace :day', function() {
      var expected = formatter("DD");
      var actual = strings.template(':day', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("DD"), slugify)),
    it('should replace :DD', function() {
      var expected = formatter("DD");
      var actual = strings.template(':DD', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("D"), slugify)),
    it('should replace :D', function() {
      var expected = formatter("D");
      var actual = strings.template(':D', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Day of the week (wednesday/wed)
    //\b/,          slugified(formatter("dddd"), slugify)),
    it('should replace :dddd', function() {
      var expected = formatter("dddd");
      var actual = strings.template(':dddd', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,            slugified(formatter("ddd"), slugify)),
    it('should replace :ddd', function() {
      var expected = formatter("ddd");
      var actual = strings.template(':ddd', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("dd"), slugify)),
    it('should replace :dd', function() {
      var expected = formatter("dd");
      var actual = strings.template(':dd', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("d"), slugify)),
    it('should replace :d', function() {
      var expected = formatter("d");
      var actual = strings.template(':d', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Hour
    //\b/,          slugified(formatter("HH"), slugify)),
    it('should replace :hour', function() {
      var expected = formatter("HH");
      var actual = strings.template(':hour', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("HH"), slugify)),
    it('should replace :HH', function() {
      var expected = formatter("HH");
      var actual = strings.template(':HH', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("H"), slugify)),
    it('should replace :H', function() {
      var expected = formatter("H");
      var actual = strings.template(':H', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("hh"), slugify)),
    it('should replace :hh', function() {
      var expected = formatter("hh");
      var actual = strings.template(':hh', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("h"), slugify)),
    it('should replace :h', function() {
      var expected = formatter("h");
      var actual = strings.template(':h', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Minute
    //\b/,      slugified(formatter("mm"), slugify)),
    it('should replace :minute', function() {
      var expected = formatter("mm");
      var actual = strings.template(':minute', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,            slugified(formatter("mm"), slugify)),
    it('should replace :min', function() {
      var expected = formatter("mm");
      var actual = strings.template(':min', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("mm"), slugify)),
    it('should replace :mm', function() {
      var expected = formatter("mm");
      var actual = strings.template(':mm', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("m"), slugify)),
    it('should replace :m', function() {
      var expected = formatter("m");
      var actual = strings.template(':m', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // Second
    //\b/,      slugified(formatter("ss"), slugify)),
    it('should replace :second', function() {
      var expected = formatter("ss");
      var actual = strings.template(':second', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,            slugified(formatter("ss"), slugify)),
    it('should replace :sec', function() {
      var expected = formatter("ss");
      var actual = strings.template(':sec', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,              slugified(formatter("ss"), slugify)),
    it('should replace :ss', function() {
      var expected = formatter("ss");
      var actual = strings.template(':ss', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("s"), slugify)),
    it('should replace :s', function() {
      var expected = formatter("s");
      var actual = strings.template(':s', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    // AM/PM, am/pm
    //\b/,                slugified(formatter("A"), slugify)),
    it('should replace :A', function() {
      var expected = formatter("A");
      var actual = strings.template(':A', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("a"), slugify)),
    it('should replace :a', function() {
      var expected = formatter("a");
      var actual = strings.template(':a', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("P"), slugify)),
    it('should replace :P', function() {
      var expected = formatter("P");
      var actual = strings.template(':P', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

    //\b/,                slugified(formatter("p"), slugify)),
    it('should replace :p', function() {
      var expected = formatter("p");
      var actual = strings.template(':p', 'date', {date: now});
      expect(actual).to.eql(expected);
    });

  });

});
