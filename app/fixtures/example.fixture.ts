import { LanguageFunction } from "@/domain/language-function"

export const example1Javascript = (args?: LanguageFunction.Example): LanguageFunction.Example => ({
    id: '1',
    code: 'const test = 123',
    comment: 'output example 1',
    ...args
})

export const example2Javascript = (args?: LanguageFunction.Example): LanguageFunction.Example => ({
    id: '2',
    code: 'const bla = { a: 123 }',
    comment: 'output example 2',
    ...args
})

export const example1Python = (args?: LanguageFunction.Example): LanguageFunction.Example => ({
    id: '3',
    code: 'numbers = [1, 2, 3, 4, 5]',
    comment: 'output example 1',
    ...args
})

export const example2Python = (args?: LanguageFunction.Example): LanguageFunction.Example => ({
    id: '4',
    code: `fruits = {'apple': 1, 'banana': 2, 'orange': 3}\nprint(*fruits)  # Unpacks the dictionary keys\n# Output: apple banana orange`,
    comment: 'output example 2',
    ...args
})