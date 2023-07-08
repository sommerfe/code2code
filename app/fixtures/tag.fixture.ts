import { FunctionLink } from "@/domain/function-link"

export const tagMap = (args?: FunctionLink.Tag): FunctionLink.Tag => ({
    id: '1',
    name: 'map',
    ...args
})

export const tagSpread = (args?: FunctionLink.Tag): FunctionLink.Tag => ({
    id: '2',
    name: '...',
    ...args
})
