var vg_1 = "rate_per_100.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "offence_div.vg.json";
vegaEmbed("#group_bar", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "scatterplot.vg.json";
vegaEmbed("#scatterplot", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "stacked_bar.vg.json";
vegaEmbed("#stacked_bar", vg_4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);