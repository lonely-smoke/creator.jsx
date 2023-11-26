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
 * @param {number} options.xPosition x位置
 * @param {number} options.yPosition y位置
 * @param {number} options.zPosition z位置
 * @param {number[]} options.anchorPoint 锚点
 * @param {number[]} options.scale 缩放
 * @param {number} options.rotation 旋转
 * @param {number} options.opacity 不透明度
 * @param {CrLayer} option.mask 蒙版
 * @todo 暂不考虑3D支持
 */
CrLayer.prototype.setProperty = function(options){

  if(options == undefined){
    return;
  }

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