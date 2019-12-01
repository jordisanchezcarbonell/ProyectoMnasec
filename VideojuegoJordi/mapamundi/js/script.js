/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
var x;
// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.size = 100;

polygonTemplate.tooltipText = " [font-size: 100px] {name} {radio} [/]";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];



// Create image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 30;
circle.fill = am4core.color("#B27799");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
clickable: true

circle.tooltipText = " [font-size: 100px] {title}[/]";

//Esto dentro de un for
 var dado=1;
circle.events.on("hit", function(event) {
    var data = event.target.dataItem.dataContext;
   
    if(dado==1){
    x=new Audio(data.radio)
    playPause(x);
     dado++;
   }
  else{
    dado=1;
    playStop(x);
  }
});
// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [{
  "id":1,
  "latitude": 48.856614,
  "longitude": 2.352222,
  "title": "Paris",
  "radio":"https://prisa-es.mc.tritondigital.com/PRISA_5940/media/podium/audio/multimedia/201911/12/20191112114233849_1573555432_audio_192.mp3?dl=1&dist=podium-web-podcast_download&csegid=22200"
}, {
  "id":2,
  "latitude": 40.712775,
  "longitude": -74.005973,
  "title": "New York",
  "radio":"https://21233.live.streamtheworld.com/LOS40AAC.aac?dist=onlineradiobox"
}, {
  "id":3,
  "latitude": 49.282729,
  "longitude": -123.120738,
  "title": "Vancouver",
  "radio":"http://podcastcdn-23.ivoox.com/audio/3/2/3/6/bigdatalarevolucionllegaalfutbol-felipeluismanero-ivoox44716323.mp3?secure=DHFF85Zf-TTHax3Dh_p4fQ==,1574778257"
}];

var audios = [];


for(var i =0;i<imageSeries.data.length;i++){
  var audiotest = audios.push(new Audio(imageSeries.data[i].radio));
}
// Add zoom control
//chart.zoomControl = new am4maps.ZoomControl();

// Add and configure small map
chart.smallMap = new am4maps.SmallMap();
chart.smallMap.series.push(polygonSeries);


function playPause(audio) { 
  audio.play();
} 

function playStop(audio) { 
  audio.pause();     
}