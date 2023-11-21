//@include "crProject.jsx"

/**
 * @class
 * 总管理类
 */
function Creator() {
  this.version = "0.0.1";
  
}

/**
 * 创建一个新项目
 * @param {string} projectName 项目名称
 * @param {string} [filePath] 可选，项目存储路径，默认为当前目录
 * @param {boolean} [closeNowProject] 可选，是否关闭当前项目，默认为true
 * @returns CrProject 项目对象
 */
Creator.prototype.createProject = function (projectName, filePath, closeNowProject) {
  
  //处理默认参数
  if (filePath == undefined) {
    filePath = "../" + projectName;
  }
  if (closeNowProject == undefined) {
    closeNowProject = true;
  }

  if (closeNowProject) {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
  }
  var project = new CrProject(projectName, filePath);

  return project;
}