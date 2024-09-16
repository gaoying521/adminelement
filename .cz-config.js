module.exports = {
  // 使用的提交规范类型
  types: [
    { value: 'feat', name: ' feat:      新功能' },
    { value: 'fix', name: '修复' },
    { value: 'docs', name: '文档变更' },
    { value: 'style', name: '代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: '重构（即不是新增功能，也不是修改bug的代码变动）'
    },
    { value: 'perf', name: '性能优化' },
    { value: 'test', name: '增加测试' },
    { value: 'chore', name: '构建过程或辅助工具的变动' },
    { value: 'revert', name: '回退' },
    { value: 'build', name: '构建系统或外部依赖变更' }
  ],
  // 消息的范围
  //scopes: [{ name: '项目名' }],
  // 是否允许范围为空
  allowEmptyScopes: false,
  // 是否允许自定义范围
  allowCustomScopes: true,

  // 提交的文本输入设置
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择修改涉及范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入本次改动的范围（如：功能、模块等）:',
    subject: '简短说明:\n',
    body: '详细说明，使用"|"分隔开可以换行(可选)：\n',
    breaking: '非兼容性，破坏性变化说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  // 是否在提交时检查有效性
  subjectLimit: 100,
  breaklines: true,
  skipQuestions: ['body', 'footer'],
  // 重写某些问题的默认提示
  footerPrefix: '关闭问题: '
}
