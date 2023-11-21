//@include "crComp.jsx"
/**
 * @class
 * (内部)CrProject构造函数
 * 禁止直接调用
 * @param {string} name 项目名称
 * @param {string} filePath 项目保存路径
 * @private
 */
function CrProject(name, filePath) {

  //成员变量域
  this.name = name;
  this.filePath = filePath;
  this.aeProject = app.newProject();
  
  //对象初始化操作
  this.save();
}

/**
 * 保存项目
 * @param {string} [filePath] 可选，项目保存路径
 */
CrProject.prototype.save = function (filePath) {
  if (filePath == undefined) {
    filePath = this.filePath;
  }
  this.aeProject.save(new File(filePath));
}

/**
 * 创建合成，当后四个参数为可选时，将默认创建1920*1080，像素长宽比为1，帧速率60的合成
 * @param {string} compName 合成名称
 * @param {string} duration 持续时间，单位：秒
 * @param {number} [width] 可选，合成宽度
 * @param {number} [height] 可选，合成高度
 * @param {number} [pixelAspect] 可选，像素长宽比
 * @param {number} [frameRate] 可选，帧速率
 * @returns {CrComp} CrComp合成对象 
 */
CrProject.prototype.addComp = function (compName, duration, width, height, pixelAspect, frameRate) {

  if (width == undefined) {
    width = 1920;
  }
  if (height == undefined) {
    height = 1080;
  }
  if (pixelAspect == undefined) {
    pixelAspect = 1;
  }
  if (frameRate == undefined) {
    frameRate = 60;
  }


  var comp = new CrComp(compName, duration, width, height, pixelAspect, frameRate);
  return comp;
  
}
