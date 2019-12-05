const d3 = require('d3');
require('topojson-client');
// require('../')

const baseMapDrawer = () => {
  d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");


  let path = d3.geoPath() // <- A
    .projection(d3.geoAlbersUsa());

  let svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

    
  let g = svg.append("g")
  .call(
    d3.zoom()
      .scaleExtent([1, 10])
      .on("zoom", zoomHandler)
  );

  console.log("FINDME");
  // console.log(g);

  // const url = "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json"
  
  const us_map = d3.json('../assets/us_states_topo.json');

  Promise.all([us_map]).then(function(us){
    console.log("FINDME", us);
    g.insert("path") // <-B
      .datum(topojson.feature(us, us["0"].objects.land))
      .attr("class", "land")
      .attr("d", path);

    g.selectAll("path.state")
      .data(topojson.feature(us, us["0"].objects.states).features) // <-C
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", path);
  })

  // d3.json('../assets/us_states_topo.json', function(error, us) { //FINDME Not finding this part right here
  // // d3.json(url, function(error, us) { //FINDME Not finding this part right here
  //   console.log("FINDME", us); // NOT RUNNING. THIS IS JUST A PROMISE CALLBACK ISSUE since D3 v5 this is probably a promise now.

  //   g.insert("path") // <-B
  //     .datum(topojson.feature(us, us.objects.land))
  //     .attr("class", "land")
  //     .attr("d", path);

  //   g.selectAll("path.state")
  //     .data(topojson.feature(us, us.objects.states).features) // <-C
  //     .enter()
  //     .append("path")
  //     .attr("class", "state")
  //     .attr("d", path);
  // })
  // .then(res => console.log(res)); // So something did happen. Why isn't it rendering?
  
  function zoomHandler() {
    let transform = d3.event.transform;
    g.attr("transform", "translate(" +
        transform.x +
        "," +
        transform.y +
        ")scale(" +
        transform.k +
        ")"
    );
  }

}

export default baseMapDrawer;