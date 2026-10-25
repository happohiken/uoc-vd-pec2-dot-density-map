var wms_layers = [];

var format_recintos_provinciales_inspire_peninbal_etrs89_0 = new ol.format.GeoJSON();
var features_recintos_provinciales_inspire_peninbal_etrs89_0 = format_recintos_provinciales_inspire_peninbal_etrs89_0.readFeatures(json_recintos_provinciales_inspire_peninbal_etrs89_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_recintos_provinciales_inspire_peninbal_etrs89_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recintos_provinciales_inspire_peninbal_etrs89_0.addFeatures(features_recintos_provinciales_inspire_peninbal_etrs89_0);
var lyr_recintos_provinciales_inspire_peninbal_etrs89_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_recintos_provinciales_inspire_peninbal_etrs89_0, 
                style: style_recintos_provinciales_inspire_peninbal_etrs89_0,
                popuplayertitle: 'recintos_provinciales_inspire_peninbal_etrs89',
                interactive: true,
                title: '<img src="styles/legend/recintos_provinciales_inspire_peninbal_etrs89_0.png" /> recintos_provinciales_inspire_peninbal_etrs89'
            });
var format_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1 = new ol.format.GeoJSON();
var features_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1 = format_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.readFeatures(json_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.addFeatures(features_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1);
var lyr_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1, 
                style: style_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1,
                popuplayertitle: 'empleados_publicos_provincias_EPSAP_2026_Empleados_publicos (1 dot = 1000)',
                interactive: true,
                title: '<img src="styles/legend/empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.png" /> empleados_publicos_provincias_EPSAP_2026_Empleados_publicos (1 dot = 1000)'
            });

lyr_recintos_provinciales_inspire_peninbal_etrs89_0.setVisible(true);lyr_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.setVisible(true);
var layersList = [lyr_recintos_provinciales_inspire_peninbal_etrs89_0,lyr_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1];
lyr_recintos_provinciales_inspire_peninbal_etrs89_0.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'COD_INE': 'COD_INE', 'empleados_publicos_provincias_EPSAP_2026_Provincia': 'empleados_publicos_provincias_EPSAP_2026_Provincia', 'empleados_publicos_provincias_EPSAP_2026_Empleados_publicos': 'empleados_publicos_provincias_EPSAP_2026_Empleados_publicos', });
lyr_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.set('fieldAliases', {});
lyr_recintos_provinciales_inspire_peninbal_etrs89_0.set('fieldImages', {'INSPIREID': 'Hidden', 'COUNTRY': 'Hidden', 'NATLEV': 'Hidden', 'NATLEVNAME': 'Hidden', 'NATCODE': 'Hidden', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'Hidden', 'CODNUT2': 'Hidden', 'CODNUT3': 'Hidden', 'COD_INE': 'Hidden', 'empleados_publicos_provincias_EPSAP_2026_Provincia': 'Hidden', 'empleados_publicos_provincias_EPSAP_2026_Empleados_publicos': 'Range', });
lyr_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.set('fieldImages', {});
lyr_recintos_provinciales_inspire_peninbal_etrs89_0.set('fieldLabels', {'NAMEUNIT': 'no label', 'empleados_publicos_provincias_EPSAP_2026_Empleados_publicos': 'no label', });
lyr_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.set('fieldLabels', {});
lyr_empleados_publicos_provincias_EPSAP_2026_Empleados_publicos1dot1000_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});