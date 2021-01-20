//git包
const downLoad = require("download-git-repo");
//动画
const ora = require("ora");
let url = "http://gitlab.leidishidai.com/ldsd-common-system/ldsd-system-ui";
let clone = false;
let downGit = name => {
  const spinner = ora("正在拉取模板...");
  spinner.start();
  downLoad(
    url,
    name,
    {
      clone
    },
    err => {
      spinner.stop();
      console.log(err ? err : "项目创建成功");
      process.exit(1);
    }
  );
};
module.exports = downGit;
