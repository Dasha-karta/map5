var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'Яндекс Спутник',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.927.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_1_2 = new ol.format.GeoJSON();
var features_1_2 = format_1_2.readFeatures(json_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_2.addFeatures(features_1_2);
var lyr_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_2, 
                style: style_1_2,
                popuplayertitle: "лр1",
                interactive: true,
                    title: '<img src="styles/legend/1_2.png" /> лр1'
                });
var format_1building_3 = new ol.format.GeoJSON();
var features_1building_3 = format_1building_3.readFeatures(json_1building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1building_3.addFeatures(features_1building_3);
var lyr_1building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1building_3, 
                style: style_1building_3,
                popuplayertitle: "лр1 — building",
                interactive: true,
                    title: '<img src="styles/legend/1building_3.png" /> лр1 — building'
                });
var format_1highway_4 = new ol.format.GeoJSON();
var features_1highway_4 = format_1highway_4.readFeatures(json_1highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1highway_4.addFeatures(features_1highway_4);
var lyr_1highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1highway_4, 
                style: style_1highway_4,
                popuplayertitle: "лр1 — highway",
                interactive: true,
                    title: '<img src="styles/legend/1highway_4.png" /> лр1 — highway'
                });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr_1_2.setVisible(true);lyr_1building_3.setVisible(true);lyr_1highway_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr_1_2,lyr_1building_3,lyr_1highway_4];
lyr_1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_1building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_1highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:ru': 'name:ru', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'ref': 'ref', });
lyr_1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_1building_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_1highway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name:ru': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', });
lyr_1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_1building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_1highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name:etymology:wikidata': 'no label', 'name:ru': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'ref': 'no label', });
lyr_1highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});