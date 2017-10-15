import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame } from 'semiotic';
import { curveBasis } from 'd3-shape';

var lbs = [
  {date:'2014-03-24',lbs:166.5},
  {date:'2014-03-25',lbs:163},
  {date:'2014-03-26',lbs:159.5},
  {date:'2014-03-26',lbs:161},
  {date:'2014-03-27',lbs:159.5},
  {date:'2014-03-28',lbs:159.5},
  {date:'2014-03-28',lbs:161},
  {date:'2014-03-29',lbs:164.5},
  {date:'2014-03-30',lbs:166},
  {date:'2014-03-31',lbs:160},
  {date:'2014-04-01',lbs:163},
  {date:'2014-04-02',lbs:161.5},
  {date:'2014-04-03',lbs:163},
  {date:'2014-04-04',lbs:161},
  {date:'2014-04-05',lbs:161},
  {date:'2014-04-09',lbs:162},
  {date:'2014-04-11',lbs:160},
  {date:'2014-04-24',lbs:161},
  {date:'2014-05-04',lbs:164.5},
  {date:'2014-05-05',lbs:164.5},
  {date:'2014-05-06',lbs:163.5},
  {date:'2014-05-08',lbs:163.5},
  {date:'2014-05-14',lbs:160.5},
  {date:'2014-05-21',lbs:163},
  {date:'2014-06-10',lbs:162},
  {date:'2014-07-28',lbs:164.5},
  {date:'2014-10-27',lbs:164.4},
  {date:'2014-10-28',lbs:162},
  {date:'2014-10-30',lbs:160.4},
  {date:'2014-10-31',lbs:160.8},
  {date:'2014-11-02',lbs:162},
  {date:'2014-11-03',lbs:163.8},
  {date:'2014-11-05',lbs:162.2},
  {date:'2014-11-08',lbs:161.4},
  {date:'2014-11-12',lbs:160.8},
  {date:'2014-11-16',lbs:163.4},
  {date:'2014-12-16',lbs:164},
  {date:'2014-12-14',lbs:163.2},
  {date:'2014-12-30',lbs:164.4},
  {date:'2015-01-05',lbs:163.4},
  {date:'2015-01-06',lbs:163.2},
  {date:'2015-01-07',lbs:161.8},
  {date:'2015-01-08',lbs:161.4},
  {date:'2015-01-10',lbs:164},
  {date:'2015-01-12',lbs:164},
  {date:'2015-01-13',lbs:161.4},
  {date:'2015-01-14',lbs:162},
  {date:'2015-01-15',lbs:164.4},
  {date:'2015-01-16',lbs:162.6},
  {date:'2015-01-21',lbs:165.4},
  {date:'2015-01-26',lbs:165},
  {date:'2015-02-25',lbs:163.4},
  {date:'2015-03-31',lbs:163.6},
  {date:'2015-04-07',lbs:165.2},
  {date:'2015-04-13',lbs:165},
  {date:'2015-04-16',lbs:164.6},
  {date:'2015-04-20',lbs:166},
  {date:'2015-04-21',lbs:164.6},
  {date:'2015-04-24',lbs:163.8},
  {date:'2015-04-27',lbs:166.4},
  {date:'2015-04-28',lbs:165.8},
  {date:'2015-04-29',lbs:165.8},
  {date:'2015-04-30',lbs:165.4},
  {date:'2015-05-01',lbs:163.6},
  {date:'2015-05-04',lbs:166.4},
  {date:'2015-05-05',lbs:167.2},
  {date:'2015-05-07',lbs:165.8},
  {date:'2015-05-08',lbs:164},
  {date:'2015-05-11',lbs:167.4},
  {date:'2015-05-12',lbs:165.6},
  {date:'2015-05-13',lbs:167.6},
  {date:'2015-05-16',lbs:165.2},
  {date:'2015-06-01',lbs:169},
  {date:'2015-05-19',lbs:165.2},
  {date:'2015-05-20',lbs:166.8},
  {date:'2015-05-21',lbs:166},
  {date:'2015-05-22',lbs:165.4},
  {date:'2015-05-31',lbs:169.4},
  {date:'2015-06-02',lbs:166.2},
  {date:'2015-06-09',lbs:168.4},
  {date:'2015-06-11',lbs:167.6},
  {date:'2015-06-12',lbs:167.2},
  {date:'2015-06-15',lbs:167.8},
  {date:'2015-06-17',lbs:169},
  {date:'2015-06-18',lbs:167.2},
  {date:'2015-07-18',lbs:165.8},
  {date:'2015-09-18',lbs:165.2},
  {date:'2015-09-27',lbs:165.4},
  {date:'2015-10-06',lbs:165},
  {date:'2015-10-23',lbs:164.6},
  {date:'2015-10-29',lbs:164},
  {date:'2015-11-09',lbs:166.8},
  {date:'2015-11-10',lbs:163.8},
  {date:'2015-11-12',lbs:162.6},
  {date:'2015-11-13',lbs:162.6},
  {date:'2015-11-15',lbs:161.6},
  {date:'2015-11-16',lbs:161.6},
  {date:'2015-11-18',lbs:161.8},
  {date:'2015-11-19',lbs:161.8},
  {date:'2015-11-20',lbs:161.2},
  {date:'2015-11-21',lbs:159.4},
  {date:'2015-11-22',lbs:161},
  {date:'2015-11-23',lbs:160.2},
  {date:'2015-11-24',lbs:158.2},
  {date:'2015-11-25',lbs:159},
  {date:'2015-11-29',lbs:161.2},
  {date:'2015-12-01',lbs:159.4},
  {date:'2015-12-02',lbs:158.6},
  {date:'2015-12-03',lbs:159.2},
  {date:'2015-12-04',lbs:160},
  {date:'2015-12-05',lbs:159.2},
  {date:'2015-12-06',lbs:161.2},
  {date:'2015-12-09',lbs:159.2},
  {date:'2015-12-10',lbs:157.4},
  {date:'2015-12-11',lbs:159.8},
  {date:'2015-12-12',lbs:157.4},
  {date:'2015-12-13',lbs:158.2},
  {date:'2015-12-14',lbs:157.2},
  {date:'2015-12-15',lbs:157.4},
  {date:'2015-12-17',lbs:157.6},
  {date:'2015-12-18',lbs:155.6},
  {date:'2015-12-19',lbs:157},
  {date:'2015-12-20',lbs:157},
  {date:'2015-12-21',lbs:158.6},
  {date:'2015-12-23',lbs:155.4},
  {date:'2015-12-26',lbs:159.4},
  {date:'2015-12-27',lbs:157.2},
  {date:'2015-12-28',lbs:159.2},
  {date:'2015-12-30',lbs:158.8},
  {date:'2016-01-03',lbs:159},
  {date:'2016-01-04',lbs:157.6},
  {date:'2016-01-05',lbs:157.4},
  {date:'2016-01-06',lbs:155.6},
  {date:'2016-01-07',lbs:157.6},
  {date:'2016-01-08',lbs:157},
  {date:'2016-01-11',lbs:159},
  {date:'2016-01-12',lbs:158.2},
  {date:'2016-01-13',lbs:155.6},
  {date:'2016-01-14',lbs:157.6},
  {date:'2016-01-15',lbs:160},
  {date:'2016-01-20',lbs:159},
  {date:'2016-01-27',lbs:160.2},
  {date:'2016-02-01',lbs:160},
  {date:'2016-02-14',lbs:161.8},
  {date:'2016-03-02',lbs:158.6},
  {date:'2016-03-17',lbs:156},
  {date:'2016-03-23',lbs:158},
  {date:'2016-03-25',lbs:158.2},
  {date:'2016-03-29',lbs:157.8},
  {date:'2016-04-03',lbs:159},
  {date:'2016-04-04',lbs:159.6},
  {date:'2016-04-05',lbs:158.2},
  {date:'2016-04-07',lbs:158},
  {date:'2016-04-08',lbs:157.2},
  {date:'2016-04-13',lbs:156},
  {date:'2016-04-25',lbs:158.8},
  {date:'2016-05-03',lbs:156.6},
  {date:'2016-05-05',lbs:156.4},
  {date:'2016-05-06',lbs:156.8},
  {date:'2016-05-10',lbs:157.6},
  {date:'2016-05-11',lbs:156.4},
  {date:'2016-05-12',lbs:156.8},
  {date:'2016-05-13',lbs:157.6},
  {date:'2016-05-16',lbs:158.2},
  {date:'2016-05-18',lbs:157.2},
  {date:'2016-05-19',lbs:155},
  {date:'2016-06-08',lbs:155.4},
  {date:'2016-06-11',lbs:156},
  {date:'2016-06-13',lbs:158},
  {date:'2016-06-15',lbs:157.6},
  {date:'2016-07-05',lbs:160.2},
  {date:'2016-07-08',lbs:159.2},
  {date:'2016-07-16',lbs:158.6},
  {date:'2016-07-22',lbs:159.6},
  {date:'2016-07-27',lbs:158.8},
  {date:'2016-08-03',lbs:159.6},
  {date:'2016-08-10',lbs:159.8},
  {date:'2016-08-23',lbs:160},
  {date:'2016-08-30',lbs:160.2},
  {date:'2016-09-04',lbs:160.2},
  {date:'2016-09-14',lbs:159.2},
  {date:'2016-09-19',lbs:161},
  {date:'2016-09-20',lbs:157.2},
  {date:'2016-09-24',lbs:158.2},
  {date:'2016-09-25',lbs:158.2},
  {date:'2016-09-26',lbs:158.6},
  {date:'2016-09-27',lbs:159},
  {date:'2016-09-30',lbs:158.6},
  {date:'2016-10-03',lbs:158},
  {date:'2016-10-04',lbs:156.8},
  {date:'2016-10-05',lbs:157.4},
  {date:'2016-10-06',lbs:159.2},
  {date:'2016-10-08',lbs:159},
  {date:'2016-10-13',lbs:156.8},
  {date:'2016-10-14',lbs:158.2},
  {date:'2016-10-15',lbs:157.6},
  {date:'2016-10-17',lbs:159.2},
  {date:'2016-10-18',lbs:158.6},
  {date:'2016-10-20',lbs:158.8},
  {date:'2016-10-25',lbs:157},
  {date:'2016-10-31',lbs:160.4},
  {date:'2016-11-01',lbs:158.8},
  {date:'2016-11-03',lbs:157.4},
  {date:'2016-11-04',lbs:156.8},
  {date:'2016-11-10',lbs:157.8},
  {date:'2016-11-19',lbs:160},
  {date:'2016-11-20',lbs:160},
  {date:'2016-11-21',lbs:160.4},
  {date:'2016-11-28',lbs:159.8},
  {date:'2016-11-29',lbs:158.8},
  {date:'2016-12-01',lbs:157.8},
  {date:'2016-12-06',lbs:159.4},
  {date:'2016-12-07',lbs:158.8},
  {date:'2016-12-02',lbs:159.8},
  {date:'2016-12-23',lbs:159.4},
  {date:'2016-12-29',lbs:162.2},
  {date:'2017-01-03',lbs:161.2},
  {date:'2017-01-04',lbs:160},
  {date:'2017-01-09',lbs:160},
  {date:'2017-01-13',lbs:161.8},
  {date:'2017-01-17',lbs:162.2},
  {date:'2017-01-19',lbs:159.8},
  {date:'2017-01-20',lbs:160},
  {date:'2017-01-21',lbs:159.2},
  {date:'2017-01-23',lbs:162.2},
  {date:'2017-01-24',lbs:158.8},
  {date:'2017-01-26',lbs:159.6},
  {date:'2017-01-30',lbs:159.2},
  {date:'2017-02-04',lbs:158},
  {date:'2017-02-08',lbs:158.8},
  {date:'2017-02-14',lbs:159.6},
  {date:'2017-02-16',lbs:159.6},
  {date:'2017-02-17',lbs:159.2},
  {date:'2017-02-20',lbs:161.6},
  {date:'2017-02-21',lbs:160.8},
  {date:'2017-02-24',lbs:157.8},
  {date:'2017-02-28',lbs:159.4},
  {date:'2017-03-01',lbs:160},
  {date:'2017-03-02',lbs:159.8},
  {date:'2017-03-05',lbs:157.8},
  {date:'2017-03-07',lbs:157.6},
  {date:'2017-03-08',lbs:157.8},
  {date:'2017-03-09',lbs:159.6},
  {date:'2017-03-20',lbs:158.8},
  {date:'2017-03-24',lbs:158.2},
  {date:'2017-03-28',lbs:160},
  {date:'2017-03-30',lbs:162},
  {date:'2017-03-31',lbs:159.2},
  {date:'2017-04-04',lbs:158.6},
  {date:'2017-04-05',lbs:160},
  {date:'2017-04-06',lbs:160.2},
  {date:'2017-04-07',lbs:162},
  {date:'2017-04-26',lbs:163.4},
  {date:'2017-04-28',lbs:162},
  {date:'2017-04-29',lbs:161.2},
  {date:'2017-05-01',lbs:163},
  {date:'2017-05-02',lbs:160.8},
  {date:'2017-05-05',lbs:159.6},
  {date:'2017-05-09',lbs:161.6},
  {date:'2017-05-10',lbs:160},
  {date:'2017-05-11',lbs:159.8},
  {date:'2017-05-12',lbs:160.2},
  {date:'2017-05-13',lbs:159.4},
  {date:'2017-05-15',lbs:161.4},
  {date:'2017-05-16',lbs:159.6},
  {date:'2017-05-18',lbs:159.8},
  {date:'2017-05-22',lbs:162.2},
  {date:'2017-05-25',lbs:159.6},
  {date:'2017-05-26',lbs:159.8},
  {date:'2017-06-02',lbs:162.6},
  {date:'2017-06-06',lbs:162},
  {date:'2017-06-07',lbs:160},
  {date:'2017-06-08',lbs:160.4},
  {date:'2017-06-09',lbs:161.2},
  {date:'2017-06-12',lbs:162.6},
  {date:'2017-06-13',lbs:163},
  {date:'2017-06-14',lbs:163},
  {date:'2017-06-16',lbs:162.2},
  {date:'2017-06-22',lbs:164.6},
  {date:'2017-07-06',lbs:166},
  {date:'2017-07-08',lbs:165.2},
  {date:'2017-07-10',lbs:163.2},
  {date:'2017-07-11',lbs:162},
  {date:'2017-07-13',lbs:162.2},
  {date:'2017-07-14',lbs:162},
  {date:'2017-07-15',lbs:162.4},
  {date:'2017-07-16',lbs:162.4},
  {date:'2017-07-18',lbs:162.4},
  {date:'2017-07-19',lbs:163.4},
  {date:'2017-08-08',lbs:162.2},
  {date:'2017-08-16',lbs:163.4},
  {date:'2017-08-22',lbs:162.4},
  {date:'2017-08-29',lbs:163},
  {date:'2017-09-05',lbs:165},
  {date:'2017-09-06',lbs:164.4},
  {date:'2017-09-07',lbs:163.2},
  {date:'2017-09-08',lbs:162.4},
  {date:'2017-09-11',lbs:163.4},
  {date:'2017-09-12',lbs:162.0},
  {date:'2017-09-13',lbs:161.0},
  {date:'2017-09-14',lbs:162.4},
  {date:'2017-09-15',lbs:162.2},
  {date:'2017-09-16',lbs:162.0},
  {date:'2017-09-17',lbs:163.0},
  {date:'2017-09-18',lbs:162.4},
  {date:'2017-09-19',lbs:163.4},
  {date:'2017-09-20',lbs:160.2},
  {date:'2017-09-21',lbs:161.0},
  {date:'2017-09-22',lbs:159.8},
  {date:'2017-09-23',lbs:158.6},
  {date:'2017-09-24',lbs:159.2},
  {date:'2017-09-25',lbs:159.8},
  {date:'2017-09-26',lbs:159.4},
  {date:'2017-09-27',lbs:157.8},
  {date:'2017-09-28',lbs:158.2},
  {date:'2017-09-29',lbs:157.4},
  {date:'2017-09-30',lbs:156.4},
  {date:'2017-10-01',lbs:158.0},
  {date:'2017-10-02',lbs:157.6},
  {date:'2017-10-03',lbs:157.2},
  {date:'2017-10-04',lbs:158.2},
  {date:'2017-10-05',lbs:157.2},
  {date:'2017-10-06',lbs:158.2},
  {date:'2017-10-07',lbs:157.2},
  {date:'2017-10-08',lbs:158.6},
  {date:'2017-10-09',lbs:157.2},
  {date:'2017-10-10',lbs:157.4},
  {date:'2017-10-11',lbs:155.6},
  {date:'2017-10-12',lbs:157.6},
  {date:'2017-10-13',lbs:156.4},
  {date:'2017-10-14',lbs:158.0},
  {date:'2017-10-15',lbs:157.4}
];

var floating = [];
var window = 7;
for(var i=window; i<lbs.length; i++) {
  var value = 0;
  for(var j=window-1; j>=0; j--) {
    value += lbs[i-j].lbs;
  }
  floating.push({date: lbs[i].date, lbs: value/window});
}

var display = [
  {data: lbs, color: '#DDDDFF', strokeWidth: "1px"},
  {data: floating, color: '#00a2ce', strokeWidth: "2px"}
];

ReactDOM.render(
  <XYFrame
    size={[1400,400]}
    lines={display}
    yExtent={[145]}
    margin={{top: 5, bottom: 25, left: 55, right: 5}}
    lineDataAccessor={d => d.data}
    xAccessor={d => new Date(d.date)}
    yAccessor={d => d.lbs}
    hoverAnnotation={true}
    lineStyle={(d) => ({ stroke: d.color, strokeWidth: d.strokeWidth })}
    lineType={{ type: 'line', interpolator: curveBasis }}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'left', tickFormat: d => d },
      { orient: 'bottom', tickFormat: d => new Date(d).toDateString(), ticks: 6 }
    ]}
  />,
  document.getElementById('container')
);
