/**
 * @class
 * 图层基类
 */
function CrLayer(){

  /**
   * @type {Layer}
   */
  this.aeLayer = null;

}

/**
 * 设置图层的属性
 * @param {Object} options 属性组
 * @param {number[]} options.position 位置
 * @param {number} options.xPosition
 * @param {number} options.yPosition
 * @param {number} options.zPosition
 * @param {number[]} options.anchorPoint
 * @param {number[]} options.scale
 * @param {number} options.rotation
 * @param {number} options.opacity
 * @param {CrLayer} option.mask
 */
CrLayer.prototype.setProperty = function(options){
  if("position" in options){
    this.aeLayer.position.setValue(options.position);
  }
  if("xPosition" in options){
    var nowPosition = this.aeLayer.position.value;
    this.aeLayer.position.setValue([options.xPosition, nowPosition[1], nowPosition[2]]);
  }
  if("yPosition" in options){
    var nowPosition = this.aeLayer.position.value;
    this.aeLayer.position.setValue([nowPosition[0], options.yPosition, nowPosition[2]]);
  }
  if("zPosition" in options){
    var nowPosition = this.aeLayer.position.value;
    this.aeLayer.position.setValue([nowPosition[0], nowPosition[1], options.zPosition]);
  }
  if("anchorPoint" in options){
    this.aeLayer.anchorPoint.setValue(options.anchorPoint);
  }
  if("scale" in options){
    this.aeLayer.scale.setValue(options.scale);
  }
  if("rotation" in options){
    this.aeLayer.rotation.setValue(options.rotation);
  }
  if("opacity" in options){
    this.aeLayer.opacity.setValue(options.opacity);
  }
}