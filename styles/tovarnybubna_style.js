
                    var styleCache_tovarnybubna={}
                    var style_tovarnybubna = function(feature, resolution){
                        var value = ""
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), 
                        fill: new ol.style.Fill({color: "rgba(10,62,130,1.0)"})
                        })
                        ];
                        var labelText = feature.get("id");
                        var key = value + "_" + labelText

                        if (!styleCache_tovarnybubna[key]){
                            var text = new ol.style.Text({
                                  font: '13.0px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(255, 255, 255, 255)"
                                  }),
                                });
                            styleCache_tovarnybubna[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_tovarnybubna[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };