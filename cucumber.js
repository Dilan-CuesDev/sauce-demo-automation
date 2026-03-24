module.exports = {
  default: {
    paths: ["src/features/**/*.feature"],
    require: [
      "src/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "allure-cucumberjs/reporter"  // para reporte de allure
    ],
    formatOptions: {
      resultsDir: "allure-results"
    }
  }
};