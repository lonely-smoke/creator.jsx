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


/**
 * 添加矩形
 * @param {string} shapeName 形状名称
 * @param {object} [options] 可选参数
 * @param {number[]} [options.size] 大小，二维数组
 * @param {number[]} [options.position] 位置，二维数组
 */
CrShapeLayer.prototype.addRectShape = function(shapeName, options) {
  var rectShape = this.aeLayer
    .property("ADBE Root Vectors Group")
    .addProperty("ADBE Vector Group"); //这个是添加的矩形属性组，应该内含：路径、描边、填充、变换(默认含有)

  rectShape.name = shapeName;

  var shapeTransform = rectShape.property("ADBE Vector Transform Group");//变换属性组
  //拥有7个属性
  shapeTransform.anchorPoint.setValue([0.5, 0.5]);
  shapeTransform.position.setValue([112, 150]);
  shapeTransform.scale.setValue([100, 150]);
  shapeTransform.skew.setValue(15);
  shapeTransform.skewAxis.setValue(51);
  shapeTransform.rotation.setValue(50);
  shapeTransform.opacity.setValue(50);

  var shapeBlendMode = rectShape.property("ADBE Vector Blend Mode");//混合模式
  shapeBlendMode.setValue(3);

  var shapeVectors = rectShape.property("ADBE Vectors Group");//内容组
  //以下为内容组内容
  //初始拥有0个属性，可以添加
  //矩形：4个属性
  var rect = shapeVectors.addProperty("ADBE Vector Shape - Rect");
  rect.size.setValue([15, 56]);
  rect.position.setValue([74, 6]);
  rect.roundness.setValue(7)
  rect.shapeDirection.setValue(3);

  //填充
  var shapeFill = shapeVectors.addProperty("ADBE Vector Graphic - Fill");

  alert(shapeFill.numProperties);
  for(var i = 1; i <= shapeFill.numProperties; i++){
    alert(i + "->" + shapeFill.property(i).name);
  }
  /**
   * @todo 写一个查看属性组中属性数量和每个的名字的方法
   */
  // alert(shapeBlendMode.value);



  // var rectShapeContent = rectShape.property("ADBE Vectors Group");

  // rectShape.property("ADBE Vector Transform Group").scale.setValue([200, 200]);

  // for (temp in rectShape.property("ADBE Vector Transform Group")) {
  //   if (temp == "scale") {
  //     alert(temp);
  //   }
  // }

  // // //当您将新属性添加到索引组时，索引组将从头开始重新创建，从而使所有现有的属性引用无效
  // var rectPath = rectShapeContent.addProperty("ADBE Vector Shape - Rect");
  // if ("size" in options) {
  //   rectPath.property("ADBE Vector Rect Size").setValue(options.size);
  // }
  // if ("position" in options) {
  //   rectPath.property("ADBE Vector Rect Position").setValue(options.position);
  // }

  // var rectFill = rectShapeContent.addProperty("ADBE Vector Graphic - Fill");
}

/**
 * 设置图层的属性
 * @param {Object} options 属性组
 * @param {number[]} options.position 位置
 * @param {number[]} options.xPosition
 * @param {number[]} options.yPosition
 * @param {number[]} options.zPosition
 * @param {number[]} options.anchorPoint
 * @param {number[]} options.scale
 * @param {number[]} options.rotation
 * @param {number[]} options.opacity
 */
CrShapeLayer.prototype.setProperty = function(options){
  CrLayer.prototype.setProperty.call(this, options);
}
