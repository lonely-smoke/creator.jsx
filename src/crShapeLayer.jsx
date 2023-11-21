//@include "crLayer.jsx"

/**
 * (内部)CrShapeLayer构造方法
 * @param {string} layerName 图层名称
 * @param {CrComp} comp 要创建图层的父级合成对象
 * @class
 * @extends CrLayer
 */
function CrShapeLayer(layerName, comp) {
  //调用父类构造方法
  CrLayer.call(this);

  //初始化
  this.aeLayer = comp.aeCompItem.layers.addShape();
  this.aeLayer.name = layerName;
}

//继承自CrLayer
CrShapeLayer.prototype.__proto__ = CrLayer.prototype;


