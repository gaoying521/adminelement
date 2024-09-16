module.exports = {
  // 使用的提交规范类型
  types: [
    { value: 'feat', name: '新功能' },
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
  scopes: [{ name: '项目名' }],
  // 是否允许范围为空
  allowEmptyScopes: false,
  // 是否允许自定义范围
  allowCustomScopes: true,
  // 提交的文本输入设置
  messages: {
    type: '请选择要进行的更改类型:',
    customScope: '请输入修改范围(例如组件名):',
    subject: '简述更改(必填):',
    body: '详细描述更改(可选).\n',
    footer: '关闭的问题(可选).\n',
    confirmCommit: '确认以上信息正确无误?'
  },
  // 是否在提交时检查有效性
  subjectLimit: 100,
  breaklines: true,
  skipQuestions: ['body', 'footer'],
  // 重写某些问题的默认提示
  footerPrefix: '关闭问题: '
}
