import { Language } from './language'

export interface LanguageFunction {
    id: string
    name: string
    description: string
    version?: string
    language: Language
    examples: LanguageFunction.Example[]
}

export namespace LanguageFunction {
    export interface Example {
        id: string
        code: string
        comment: string
    }
}

