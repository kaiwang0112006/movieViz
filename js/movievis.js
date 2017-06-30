function moviedraw(st, ed){
	d3.csv("data/topmovie.csv", function(error, data){
		    var svg = dimple.newSvg("#chartContainer", 800, 600);

		    var myChart = new dimple.chart(svg, data);
		    //myChart.setBounds(75, 30, 480, 330)

		    var x = myChart.addMeasureAxis("x", "box");
		    x.title = "Box (万元)";
		    x.fontSize = "auto";
		    var y = myChart.addMeasureAxis("y", "rate");
		    y.title = "Douban Rate";
		    y.fontSize = "auto";
		    myChart.addMeasureAxis("z", "size");

		    var s = myChart.addSeries(['movie','year',"director"], dimple.plot.bubble);

		    s.afterDraw = function (shp, d) {
		        var shape = d3.select(shp);
		        svg.append("text")
		            .attr("x", parseFloat(shape.attr("cx")))
		            .attr("y", parseFloat(shape.attr("cy")) + 4)
		            .style("text-anchor", "middle")
		            .style("font-size", "15px")
		            .style("font-family", "sans-serif")
		            .style("opacity", 0.7)
		            .text(d.aggField[0]);
		    };
		    myChart.addLegend(180, 10, 360, 20, "right");
		    myChart.draw();
		    document.getElementById('loading').innerHTML=""
	})
}