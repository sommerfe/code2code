import { functionLinkSpread } from "@/app/fixtures/function-link.fixture"
import FunktionLinkComponent from "@/app/function-link"
import { FunctionLink } from "@/domain/function-link"

const functions: FunctionLink[] = [
    functionLinkSpread()
]

const functionsMap = new Map(functions.map((obj) => [obj.id, obj]))

async function getFunctions (id: string): Promise<FunctionLink> {
    return functionsMap.get(id)!
}


export default async function FunctionPage({params}: any) {
    const functionLink: FunctionLink = await getFunctions(params.id)
    return (
        <FunktionLinkComponent functionLink={functionLink}/>
    )
}

{/* <CodeSnippet language={'javascript'} code={'const test = 123'}/> */}
