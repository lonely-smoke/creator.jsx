/**
 * @class
 * Util工具类，包含常用静态函数
 */
function Util(){

}


/**
 * 该方法用于读取属性组中的所有属性名称
 * @param {PropertyGroup} propertyGroup 
 */
Util.showAllPropertiesName = function(propertyGroup){
  var msg = "Show all properties:\r\n";
  msg += "num:" + propertyGroup.numProperties + "\r\n";
  for(var i = 1; i <= propertyGroup.numProperties; i++){
    msg += i + "->" + propertyGroup.property(i).name + "\r\n";
  }
  alert(msg);
}

/**
 * 该方法用于读取属性组中的所有属性的匹配名称
 * @param {PropertyGroup} propertyGroup 
 */
Util.showAllPropertiesMatchName = function(propertyGroup){
  var msg = "Show all properties:\r\n";
  msg += "num:" + propertyGroup.numProperties + "\r\n";
  for(var i = 1; i <= propertyGroup.numProperties; i++){
    msg += i + "->" + propertyGroup.property(i).matchName + "\r\n";
  }
  alert(msg);
}

Util.colorHexRGB2Ae = function(colorHex){
  return Util.colorRGB2Ae([colorHex >> 16, (colorHex & 0x00FF00) >> 8, colorHex & 0x0000FF]);
}

Util.colorHexRGBA2Ae = function(colorHex){
  return Util.colorRGBA2Ae([colorHex >> 24, (colorHex & 0x00FF0000) >> 16, (colorHex & 0x0000FF00) >> 8, colorHex & 0x000000FF]);
}

Util.colorRGBA2Ae = function(colorRGBA){
  return colorRGBA / 255;
}

Util.colorRGB2Ae = function(colorRGBA){
  return colorRGBA / 255;
}