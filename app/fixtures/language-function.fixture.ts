import { Language } from '@/domain/language'
import { LanguageFunction } from '@/domain/language-function'
import { example1Javascript, example1Python, example2Javascript, example2Python } from './example.fixture'

export const languageFunctionJavascriptSpread = (args?: LanguageFunction): LanguageFunction => ({
    id: '1',
    name: 'exampleFunction',
    description: 'This is an example function',
    version: '1.0.0',
    language: Language.JAVASCRIPT,
    examples: [
      example1Javascript(),
      example2Javascript(),
    ],
    ...args
})

export const languageFunctionPythonSpread = (args?: LanguageFunction): LanguageFunction => ({
    id: '2',
    name: 'exampleFunction',
    description: 'This is an example function',
    version: '1.0.0',
    language: Language.PYTHON,
    examples: [
      example1Python(),
      example2Python(),
    ],
    ...args
})