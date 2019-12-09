const d3 = require('d3');
require('topojson-client');

const baseMapDrawer = () => {
  let path = d3.geoPath()
    .projection(d3.geoAlbersUsa());

  let svg = d3.select("body").append("svg")
    .attr("width", "100vw")
    .attr("height", "100vh");

  let g = svg.append("g")
  .call(
    d3.zoom()
      .scaleExtent([1, 10])
      .on("zoom", zoomHandler)
  );

  // console.log("FINDME"); // TODO: REMOVE THIS LATER when data loaded successfully

  const us_map = d3.json('../assets/us_states_topo.json');

  Promise.all([us_map]).then(function(us){
    // console.log("FINDME", us); // TODO: REMOVE THIS LATER when data loaded successfully
    g.insert("path")
      .datum(
        topojson.feature(
          us["0"],
          us["0"].objects.land
        )
      )
      .attr("class", "land")
      .attr("d", path);

    g.selectAll("path.state")
      .data(
        topojson.feature(
          us["0"],
          us["0"].objects.states
        ).features
      )
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", path);

    g.append("path")
      .attr("class", "state-borders")
      .attr(
        "d",
        path(
          topojson.mesh(
            us["0"],
            us["0"].objects.states,
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