const configuration = {
    paths: ['./test/acceptance/'],
    import: ['./test/steps/'],
    formatOptions: {"theme":{"feature keyword":["magenta","bold"],"scenario keyword":["magenta","bold"],"step keyword":["bold"]}},
    format: ['@cucumber/pretty-formatter'],
    requireModule: ["ts-node/register"],
    publishQuiet: true,
    parallel: 0,
    require: ['./test/steps/*.ts']
  }

module.exports = {
  default: configuration
}