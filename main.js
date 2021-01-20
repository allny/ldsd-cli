const cmd = require("commander");
const chalk = require("chalk");
const downGit = require("./src/downLoad");

cmd
  .command("init")
  .description("初始化模块")
  .action(async args => {
    typeof args !== "string" &&
      (console.log(chalk.red("缺少必填参数")), process.exit(1));
    console.log(chalk.yellow("ldsd脚手架初始化模块"));
    //拉取
    await downGit(args);
  });
cmd.parse(process.argv);
