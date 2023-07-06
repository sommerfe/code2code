export interface LanguageFunction {
    name: string
    description: string
    version?: string
    examples: Example[]
}

export interface Example {
    code: string
}