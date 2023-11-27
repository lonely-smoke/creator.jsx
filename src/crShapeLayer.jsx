//@include "crLayer.jsx"
//@include "util.jsx"

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
  /**
   * @type {Layer}
   */
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
 * @param {number} [options.roundness] 圆角：数值 0为无圆角
 * @param {number} [options.shapeDirection 反转路径方向：1：不反转；3：反转
 * @param {boolean} [options.fill] 是否填充
 * @param {number} [options.fillBlendMode] 填充混合模式
 * @param {number} [options.fillComposite] 填充合成：1：在同组前一个之下；2：在同组前一个之上
 * @param {number} [options.fillRule] 填充规则：1：非零环绕；2：奇偶
 * @param {number} [options.fillColor] 填充颜色：三维数组[red, green, blue]或Hex值
 * @param {number} [options.fillOpacity] 填充不透明度：数值 0-100
 * @param {boolean} [options.stroke] 是否描边
 * @param {number} [options.strokeBlendMode] 描边混合模式
 * @param {number} [options.strokeComposite] 描边合成：1：在同组前一个之下；2：在同组前一个之上
 * @param {number} [options.strokeColor] 描边颜色：三维数组[red, green, blue]或Hex值
 * @param {number} [options.strokeOpacity] 描边不透明度：数值 0-100
 * @param {number} [options.strokeWidth] 描边描边宽度：数值
 * @param {number} [options.strokeLineCap] 描边线段端点：1：平头端点；2：圆头端点；3：矩形端点
 * @param {number} [options.strokeJoin] 描边线段连接：1：斜接连接；2：圆角连接；3：斜面连接
 * @param {number} [options.strokeMiterLimit] 描边尖角限制：数值 默认为4
 * @param {number} [options.strokeDashDash1] 描边虚线：数值
 * @param {number} [options.strokeDashGap1] 描边间隙：数值
 * @param {number} [options.strokeDashDash2] 描边虚线：数值
 * @param {number} [options.strokeDashGap2] 描边间隙：数值
 * @param {number} [options.strokeDashDash3] 描边虚线：数值
 * @param {number} [options.strokeDashGap3] 描边间隙：数值
 * @param {number} [options.strokeDashOffset] 描边虚线偏移：数值
 * @param {number} [options.strokeTaperLengthUnits] 描边锥度长度单位：1：百分比；2：像素
 * @param {number} [options.strokeTaperStartLength] 描边锥度起始长度：数值 0-100【只有长度单位为百分比时可用】
 * @param {number} [options.strokeTaperEndLength] 描边锥度结束长度：数值 0-100【只有长度单位为百分比时可用】
 * @param {number} [options.strokeTaperStartWidth] 描边锥度开始宽度：数值 0-100
 * @param {number} [options.strokeTaperEndWidth] 描边锥度末端宽度：数值 0-100
 * @param {number} [options.strokeTaperStartEase] 描边锥度开始缓和：数值 0-100
 * @param {number} [options.strokeTaperEndEase] 描边锥度结束缓和：数值 0-100
 * @param {number} [options.strokeTaperStartLengthPx] 描边锥度起始长度：数值【只有长度单位为像素时可用】
 * @param {number} [options.strokeTaperEndLengthPx] 描边锥度结束长度：数值【只有长度单位为像素时可用】
 * @param {number} [options.strokeWaveAmount] 描边波形数量：数值 0-100
 * @param {number} [options.strokeWaveUnits] 描边波形单位：1：像素；2：周期
 * @param {number} [options.strokeWaveWaveLength] 描边波形波长：数值【只有单位为像素时可用】
 * @param {number} [options.strokeWaveCycles] 描边波形环形：数值【只有单位为周期时可用】
 * @param {number} [options.strokeWavePhase] 描边波形相位：数值
 */
CrShapeLayer.prototype.addRectShape = function(shapeName, options) {
  var rectShape = this.aeLayer
    .property("ADBE Root Vectors Group")
    .addProperty("ADBE Vector Group"); //这个是添加的矩形属性组，应该内含：路径、描边、填充、变换(默认含有)

  rectShape.name = shapeName;

  var shapeVectors = rectShape.property("ADBE Vectors Group");//内容组
  //以下为内容组内容

  //矩形路径
  var rect = shapeVectors.addProperty("ADBE Vector Shape - Rect");

  if(options == undefined){
    return;
  }

  if("size" in options){  rect.size.setValue(options.size);}
  if("position" in options){  rect.position.setValue(options.position);}
  if("roundness" in options){ rect.roundness.setValue(options.roundness);}
  if("shapeDirection" in options){  rect.shapeDirection.setValue(options.shapeDirection);}

  this.setVectorsContents(shapeVectors, options);
  
}

// TODO: 添加路径的函数

//TODO: 添加星形的函数
CrShapeLayer.prototype.add

// TODO: 添加椭圆的函数

// TODO: 修剪路径放到动画处理部分里做

/**
 * 为内容组设置描边和填充
 * @param {PropertyGroup} shapeVectors 内容组shapeVectors，从Layer.property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group")获得
 * @param {Object} options 可选参数
 * @param {boolean} [options.fill] 是否填充
 * @param {number} [options.fillBlendMode] 填充混合模式
 * @param {number} [options.fillComposite] 填充合成：1：在同组前一个之下；2：在同组前一个之上
 * @param {number} [options.fillRule] 填充规则：1：非零环绕；2：奇偶
 * @param {number} [options.fillColor] 填充颜色：三维数组[red, green, blue]或Hex值
 * @param {number} [options.fillOpacity] 填充不透明度：数值 0-100
 * @param {boolean} [options.stroke] 是否描边
 * @param {number} [options.strokeBlendMode] 描边混合模式
 * @param {number} [options.strokeComposite] 描边合成：1：在同组前一个之下；2：在同组前一个之上
 * @param {number} [options.strokeColor] 描边颜色：三维数组[red, green, blue]或Hex值
 * @param {number} [options.strokeOpacity] 描边不透明度：数值 0-100
 * @param {number} [options.strokeWidth] 描边描边宽度：数值
 * @param {number} [options.strokeLineCap] 描边线段端点：1：平头端点；2：圆头端点；3：矩形端点
 * @param {number} [options.strokeJoin] 描边线段连接：1：斜接连接；2：圆角连接；3：斜面连接
 * @param {number} [options.strokeMiterLimit] 描边尖角限制：数值 默认为4
 * @param {number} [options.strokeDashDash1] 描边虚线：数值
 * @param {number} [options.strokeDashGap1] 描边间隙：数值
 * @param {number} [options.strokeDashDash2] 描边虚线：数值
 * @param {number} [options.strokeDashGap2] 描边间隙：数值
 * @param {number} [options.strokeDashDash3] 描边虚线：数值
 * @param {number} [options.strokeDashGap3] 描边间隙：数值
 * @param {number} [options.strokeDashOffset] 描边虚线偏移：数值
 * @param {number} [options.strokeTaperLengthUnits] 描边锥度长度单位：1：百分比；2：像素
 * @param {number} [options.strokeTaperStartLength] 描边锥度起始长度：数值 0-100【只有长度单位为百分比时可用】
 * @param {number} [options.strokeTaperEndLength] 描边锥度结束长度：数值 0-100【只有长度单位为百分比时可用】
 * @param {number} [options.strokeTaperStartWidth] 描边锥度开始宽度：数值 0-100
 * @param {number} [options.strokeTaperEndWidth] 描边锥度末端宽度：数值 0-100
 * @param {number} [options.strokeTaperStartEase] 描边锥度开始缓和：数值 0-100
 * @param {number} [options.strokeTaperEndEase] 描边锥度结束缓和：数值 0-100
 * @param {number} [options.strokeTaperStartLengthPx] 描边锥度起始长度：数值【只有长度单位为像素时可用】
 * @param {number} [options.strokeTaperEndLengthPx] 描边锥度结束长度：数值【只有长度单位为像素时可用】
 * @param {number} [options.strokeWaveAmount] 描边波形数量：数值 0-100
 * @param {number} [options.strokeWaveUnits] 描边波形单位：1：像素；2：周期
 * @param {number} [options.strokeWaveWaveLength] 描边波形波长：数值【只有单位为像素时可用】
 * @param {number} [options.strokeWaveCycles] 描边波形环形：数值【只有单位为周期时可用】
 * @param {number} [options.strokeWavePhase] 描边波形相位：数值
 */
CrShapeLayer.prototype.setVectorsContents = function(shapeVectors, options){
  //填充
  if ("fill" in options && options.fill == true) {
    var fill = shapeVectors.addProperty("ADBE Vector Graphic - Fill");
    if ("fillBlendMode" in options) { fill.blendMode.setValue(options.fillBlendMode); }
    if ("fillComposite" in options) { fill.composite.setValue(options.fillComposite); }
    if ("fillRule" in options) { fill.fillRule.setValue(options.fillRule); }
    if ("fillColor" in options) {
      if (options.fillColor instanceof Array) {
        fill.color.setValue(Util.colorRGB2Ae(options.fillColor));
      } else {
        fill.color.setValue(Util.colorHexRGB2Ae(options.fillColor));
      }
    }
    if ("fillOpacity" in options) { fill.opacity.setValue(options.fillOpacity); }
  }

  //描边
  if ("stroke" in options && options.stroke == true) {
    var stroke = shapeVectors.addProperty("ADBE Vector Graphic - Stroke");
    if ("strokeBlendMode" in options) { stroke.blendMode.setValue(options.strokeBlendMode); }
    if ("strokeComposite" in options) { stroke.composite.setValue(options.strokeComposite); }
    if ("strokeColor" in options) {
      if (options.strokeColor instanceof Array) {
        stroke.color.setValue(Util.colorRGB2Ae(options.strokeColor));
      } else {
        stroke.color.setValue(Util.colorHexRGB2Ae(options.strokeColor));
      }
    }
    if ("strokeOpacity" in options) { stroke.opacity.setValue(options.strokeOpacity); }
    if ("strokeWidth" in options) { stroke.strokeWidth.setValue(options.strokeWidth); }
    if ("strokeLineCap" in options) { stroke.lineCap.setValue(options.strokeLineCap); }
    if ("strokeLineJoin" in options) { stroke.lineJoin.setValue(options.strokeLineJoin); }
    if ("strokeMiterLimit" in options) { stroke.miterLimit.setValue(options.strokeMiterLimit); }
    //虚线
    if ("strokeDashDash1" in options) {
      var dash1 = stroke.dash.addProperty("ADBE Vector Stroke Dash 1");
      dash1.setValue(options.strokeDashDash1);
    }
    if ("strokeDashDash2" in options) {
      var dash2 = stroke.dash.addProperty("ADBE Vector Stroke Dash 2");
      dash2.setValue(options.strokeDashDash2);
    }
    if ("strokeDashDash3" in options) {
      var dash3 = stroke.dash.addProperty("ADBE Vector Stroke Dash 3");
      dash3.setValue(options.strokeDashDash3);
    }
    if ("strokeDashGap1" in options) {
      var gap1 = stroke.dash.addProperty("ADBE Vector Stroke Gap 1");
      gap1.setValue(options.strokeDashGap1);
    }
    if ("strokeDashGap2" in options) {
      var gap2 = stroke.dash.addProperty("ADBE Vector Stroke Gap 2");
      gap2.setValue(options.strokeDashGap2);
    }
    if ("strokeDashGap3" in options) {
      var gap3 = stroke.dash.addProperty("ADBE Vector Stroke Gap 3");
      gap3.setValue(options.strokeDashGap3);
    }
    if ("strokeDashOffset" in options) {
      var offset = stroke.dash.addProperty("ADBE Vector Stroke Offset");
      offset.setValue(options.strokeDashOffset);
    }
    //锥度
    if ("strokeTaperLengthUnits" in options) { stroke.taper.lengthUnits.setValue(options.strokeTaperLengthUnits); }
    if (stroke.taper.lengthUnits.value == 1) {  //长度单位为百分比
      if ("storkeTaperStartLength" in options) { stroke.taper.startLength.setValue(options.storkeTaperStartLength); }
      if ("strokeTaperEndLength" in options) { stroke.taper.endLength.setValue(options.strokeTaperEndLength); }
    } else {  //长度单位为像素
      if ("strokeTaperStartLengthPx" in options) { stroke.taper.property("ADBE Vector Taper StartWidthPx").setValue(options.strokeTaperStartLengthPx); }
      if ("strokeTaperEndLengthPx" in options) { stroke.taper.property("ADBE Vector Taper EndWidthPx").setValue(options.strokeTaperEndLengthPx); }
    }
    if ("strokeTaperStartEase" in options) { stroke.taper.startEase.setValue(options.strokeTaperStartEase); }
    if ("strokeTaperEndEase" in options) { stroke.taper.endEase.setValue(options.strokeTaperEndEase) }
    if ("strokeTaperStartWidth" in options) { stroke.taper.startWidth.setValue(options.strokeTaperStartWidth); }
    if ("strokeTaperEndWidth" in options) { stroke.taper.endWidth.setValue(options.strokeTaperEndWidth); }
    //波形
    if ("strokeWaveAmount" in options) { stroke.wave.amount.setValue(options.strokeWaveAmount); }
    if ("strokeWaveUnits" in options) { stroke.wave.units.setValue(options.strokeWaveUnits); }
    if (stroke.wave.units.value == 1) { //单位像素
      if ("strokeWaveWaveLength" in options) {
        stroke.wave.wavelength.setValue(options.strokeWaveWaveLength);
      }
    } else {  //单位周期
      if ("strokeWaveCycles" in options) {
        stroke.wave.cycles.setValue(options.strokeWaveCycles);
      }
    }
    if ("strokeWavePhase" in options) { stroke.wave.phase.setValue(options.strokeWavePhase); }
  }
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
