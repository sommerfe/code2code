import CodeSnippet from "@/app/code-snippet"

const notes = [
  {id: 1, title: 'a'},
  {id: 2, title: 'b'},
  {id: 3, title: 'c'},
  {id: 4, title: 'd'}
]

const noteMap = new Map(notes.map((obj) => [obj.id, obj]))

async function getNote (id: number): Promise<any> {

    // console.log('id', id, noteMap.get(id))
    // console.log(notes.map((obj) => [obj.id, obj]));
    return noteMap.get(id)
}


export default async function NotePage({params}: any) {
    const note = await getNote(parseInt(params.id))
    return (
        <div>
            <CodeSnippet language={'javascript'} code={'const test = 123'}/>
            <p>{note.id}</p>
            <p>{note.title}</p>
        </div>
    )
}
