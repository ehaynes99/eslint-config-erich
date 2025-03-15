import mainConfig from './configs/eslint-config.js'
import rules from './rules/index.js'
import { combineConfigs } from './utils/index.js'

const configs = {
  mainConfig,
}

const plugin: any = {
  configs,
  rules,
  combineConfigs,
}

export default plugin
