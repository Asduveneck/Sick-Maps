import { color } from 'd3';

const d3 = require('d3');
require('topojson-client');

const baseMapDrawer = () => {
  let path = d3.geoPath()
    .projection(d3.geoAlbersUsa());
    // .translate([960/ 2, 500 / 2])  ;

  let svg = d3.select("body").append("svg")
    .attr("width", "100vw")
    .attr("height", "100vh");

  let g = svg.append("g")
  .call(
    d3.zoom()
      .scaleExtent([1, 10])
      .on("zoom", zoomHandler)
  );


  
  // LOAD IN DATA
  let testGoog = d3.map();
  const usMap = d3.json('../assets/us_states_topo.json');
  const googData = d3.csv('../assets/Initial_data/Raw/test_search.csv', function (d) {testGoog.set(d.state, +d.search)});

  const cRed = '#d2222d';
  const cAmber = '#ffbf00';
  const cGreen = '#007000';


  Promise.all([usMap, googData]).then(function(res){
    console.log("FINDME", res); // TODO: REMOVE THIS LATER when data loaded successfully
    const us = res["0"];
    const testG = res["1"];

    console.log(testG);
    console.log(us);

    g.insert("path")
      .datum(
        topojson.feature(
          us,
          us.objects.land
        )
      )
      .attr("class", "land")
      .attr("d", path);

    g.selectAll("path.state")
      .data(
        topojson.feature(
          us,
          us.objects.states
        ).features
      )
      .enter()
      .append("path")
      .attr("class", "state") // add in the data here
      .attr("fill", function(d) { return color(d.search = testGoog.get(d.state)); } )
      .attr("d", path);

    g.append("path")
      .attr("class", "state-borders")
      .attr(
        "d",
        path(
          topojson.mesh(
            us,
            us.objects.states,
            function(a, b) {
              return a !== b;
            }
          )
        )
      );
  })  
  function zoomHandler() {
    let transform = d3.event.transform;
    g.attr('transform', `translate(${transform.x}, ${transform.y})scale(${transform.k})`)

  }

}

export default baseMapDrawer;