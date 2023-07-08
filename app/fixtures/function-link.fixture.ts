import { FunctionLink } from '@/domain/function-link'
import { tagMap, tagSpread } from './tag.fixture'
import { languageFunctionJavascriptSpread, languageFunctionPythonSpread } from './language-function.fixture'

export const functionLinkSpread = (args?: FunctionLink): FunctionLink => ({
  id: '1',
  tags: [tagSpread()],
  languageFunctions: [
    languageFunctionJavascriptSpread(),
    languageFunctionPythonSpread()
  ],
  ...args
})

export const functionLinkMap = (args?: FunctionLink): FunctionLink => ({
  id: '2',
  tags: [tagMap()],
  languageFunctions: [
    languageFunctionJavascriptSpread(),
    languageFunctionPythonSpread()
  ],
  ...args
})