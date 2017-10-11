import React from 'react';
import ReactDOM from 'react-dom';
import { NetworkFrame } from 'semiotic';
import { curveBasis } from 'd3-shape';

var network = {
  "nodes": [{
    "id": 0,
    "name": "Palpatine",
    "gender": "M",
    "lastName": "Palpatine",
    "birthDate": "1875-01-01T00:00:00.000Z",
    "deathDate": "1983-01-01T00:00:00.000Z"
  }, {
    "id": 1,
    "name": "Skywalker, Shmi",
    "gender": "F",
    "lastName": "Skywalker",
    "birthDate": "1905-01-01T00:00:00.000Z",
    "deathDate": "1955-01-01T00:00:00.000Z"
  }, {
    "id": 2,
    "name": "Skywalker, Anakin",
    "gender": "M",
    "lastName": "Skywalker",
    "birthDate": "1935-01-01T00:00:00.000Z",
    "deathDate": "1983-01-01T00:00:00.000Z"
  }, {
    "id": 3,
    "name": "Amidala, Padm� ",
    "gender": "F",
    "lastName": "Amidala",
    "birthDate": "1925-01-01T00:00:00.000Z",
    "deathDate": "1960-01-01T00:00:00.000Z"
  }, {
    "id": 4,
    "name": "Skywalker, Luke",
    "gender": "M",
    "lastName": "Skywalker",
    "birthDate": "1960-01-01T00:00:00.000Z",
    "deathDate": null
  }, {
    "id": 5,
    "name": "Organa, Leia",
    "gender": "F",
    "lastName": "Organa",
    "birthDate": "1960-01-01T00:00:00.000Z",
    "deathDate": null
  }, {
    "id": 6,
    "name": "Yoda",
    "gender": "M",
    "lastName": "Yoda",
    "birthDate": "1083-01-01T00:00:00.000Z",
    "deathDate": "1983-01-01T00:00:00.000Z"
  }, {
    "id": 7,
    "name": "Kenobi, Obi-Wan",
    "gender": "M",
    "lastName": "Kenobi",
    "birthDate": "1920-01-01T00:00:00.000Z",
    "deathDate": "1977-01-01T00:00:00.000Z"
  }, {
    "id": 8,
    "name": "C3PO",
    "gender": "M",
    "lastName": "C3PO",
    "birthDate": "1940-01-01T00:00:00.000Z",
    "deathDate": "-01-01T00:00:00.000Z"
  }, {
    "id": 9,
    "name": "R2D2",
    "gender": "M",
    "lastName": "R2D2",
    "birthDate": "1940-01-01T00:00:00.000Z",
    "deathDate": "-01-01T00:00:00.000Z"
  }, {
    "id": 10,
    "name": "Solo, Han",
    "gender": "M",
    "lastName": "Solo",
    "birthDate": "1942-01-01T00:00:00.000Z",
    "deathDate": "2015-01-01T00:00:00.000Z"
  }, {
    "id": 11,
    "name": "Chewbacca",
    "gender": "M",
    "lastName": "Chewbacca",
    "birthDate": "1777-01-01T00:00:00.000Z",
    "deathDate": null
  }],
  "links": [{
    "source": 2,
    "target": 3,
    "color": "#CC0",
    "relation": "spouse"
  }, {
    "source": 2,
    "target": 1,
    "color": "#F39",
    "relation": "mother"
  }, {
    "source": 3,
    "target": 2,
    "color": "#CC0",
    "relation": "spouse"
  }, {
    "source": 4,
    "target": 3,
    "color": "#F39",
    "relation": "mother"
  }, {
    "source": 4,
    "target": 2,
    "color": "#39F",
    "relation": "father"
  }, {
    "source": 5,
    "target": 10,
    "color": "#CC0",
    "relation": "spouse"
  }, {
    "source": 5,
    "target": 3,
    "color": "#F39",
    "relation": "mother"
  }, {
    "source": 5,
    "target": 2,
    "color": "#39F",
    "relation": "father"
  }, {
    "source": 8,
    "target": 2,
    "color": "#39F",
    "relation": "father"
  }, {
    "source": 10,
    "target": 5,
    "color": "#CC0",
    "relation": "spouse"
  }]
};

ReactDOM.render(
  <NetworkFrame
      size={[ 750, 500 ]}
      edges={network.links}
      nodes={network.nodes}
      margin={60}
      edgeStyle={() => ({ stroke: '#a91a1a', fill: '#a91a1a', fillOpacity: 0.25, strokeWidth: '1px' })}
      nodeStyle={d => ({ fill: d.createdByFrame ? '#1aa962' : "rgb(179, 51, 29)" })}
      networkType={{ type: 'force', iterations: 500, edgeStrength: 0.1 }}
      edgeType={'none'}
      nodeSizeAccessor={d => 3}
      zoomToFit={true}
  />,
  document.getElementById('container')
);
