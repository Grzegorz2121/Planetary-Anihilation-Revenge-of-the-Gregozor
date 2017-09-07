var themesetting = api.settings.isSet('ui','legionMenuThemeFunction',true) || 'ON';
if(themesetting === "ON"){
    //load legion theme
    loadCSS("coui://ui/mods/com.pa.legion-expansion/css/legion_buttons.css");
    loadCSS("coui://ui/mods/com.pa.legion-expansion/css/legion_shared.css");
    loadCSS("coui://ui/mods/com.pa.legion-expansion/css/background_no_logo.css");
    loadCSS("coui://ui/mods/com.pa.legion-expansion/css/load_planet.css");    
    $('body').addClass("legion");
}