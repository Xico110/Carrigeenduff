var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SheepFleeceRolls31_1 = new ol.format.GeoJSON();
var features_SheepFleeceRolls31_1 = format_SheepFleeceRolls31_1.readFeatures(json_SheepFleeceRolls31_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SheepFleeceRolls31_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SheepFleeceRolls31_1.addFeatures(features_SheepFleeceRolls31_1);
var lyr_SheepFleeceRolls31_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SheepFleeceRolls31_1, 
                style: style_SheepFleeceRolls31_1,
                popuplayertitle: "Sheep Fleece Rolls (31)",
                interactive: true,
                title: '<img src="styles/legend/SheepFleeceRolls31_1.png" /> Sheep Fleece Rolls (31)'
            });
var format_SheepFleecePiles4_2 = new ol.format.GeoJSON();
var features_SheepFleecePiles4_2 = format_SheepFleecePiles4_2.readFeatures(json_SheepFleecePiles4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SheepFleecePiles4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SheepFleecePiles4_2.addFeatures(features_SheepFleecePiles4_2);
var lyr_SheepFleecePiles4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SheepFleecePiles4_2, 
                style: style_SheepFleecePiles4_2,
                popuplayertitle: "Sheep Fleece Piles (4)",
                interactive: true,
                title: '<img src="styles/legend/SheepFleecePiles4_2.png" /> Sheep Fleece Piles (4)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SheepFleeceRolls31_1.setVisible(true);lyr_SheepFleecePiles4_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SheepFleeceRolls31_1,lyr_SheepFleecePiles4_2];
lyr_SheepFleeceRolls31_1.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_SheepFleecePiles4_2.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_SheepFleeceRolls31_1.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_SheepFleecePiles4_2.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_SheepFleeceRolls31_1.set('fieldLabels', {'Name': 'header label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_SheepFleecePiles4_2.set('fieldLabels', {'Name': 'header label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_SheepFleecePiles4_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});