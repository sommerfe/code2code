import { LanguageFunction } from "./language-function"

export interface FunctionLink {
    id: string
    tags: FunctionLink.Tag[]
    languageFunctions: LanguageFunction[]
}

export namespace FunctionLink {
    export interface Tag {
        id: string
        name: string
    }
}
