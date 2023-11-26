//@include "crShapeLayer.jsx"
/**
 * @class
 * (内部)CrComp构造函数
 * 禁止直接调用
 * @param {string} compName 合成名称
 * @param {number} width 合成宽度
 * @param {number} height 合成高度
 * @param {number} pixelAspect 像素长宽比
 * @param {number} duration 持续时间
 * @param {number} frameRate 帧速率
 * @private
 */
function CrComp(compName, duration, width, height, pixelAspect, frameRate) {
  this.compName = compName;
  this.duration = duration;
  this.width = width;
  this.height = height;
  this.pixelAspect = pixelAspect;
  this.frameRate = frameRate;
  this.aeCompItem = app.project.items.addComp(compName, width, height, pixelAspect, duration, frameRate);
}

/**
 * 添加形状图层
 * @param {string} layerName 图层名称
 * @param {Object} options 可选参数：属性组
 * @param {number[]} options.position 位置
 * @param {number} options.xPosition x位置
 * @param {number} options.yPosition y位置
 * @param {number} options.zPosition z位置
 * @param {number[]} options.anchorPoint 锚点
 * @param {number[]} options.scale 缩放
 * @param {number} options.rotation 旋转
 * @param {number} options.opacity 不透明度
 * @param {CrLayer} option.mask 蒙版
 * @returns 
 */
CrComp.prototype.addShapeLayer = function(layerName, options){
  var shaperLayer = new CrShapeLayer(layerName, this);
  shaperLayer.setProperty(options);
  return shaperLayer;
}

CrComp.prototype.openInViewer = function(){
  this.aeCompItem.openInViewer();
}
