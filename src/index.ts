import recommended from './configs/recommended.config.js'
import rules from './rules/index.js'
import { combineConfigs } from './utils/index.js'

const configs = {
  recommended,
}

const plugin: any = {
  configs,
  rules,
  combineConfigs,
}

export default plugin
