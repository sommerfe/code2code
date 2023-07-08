import Link from "next/link"

async function getNotes (): Promise<any> {
    return [
        { id:1, title: 'a', },
        { id:2, title: 'b'},
        { id:3, title: 'c'},
        { id:4, title: 'd'}
    ]
}


export default async function NotesPage() {
    const notes = await getNotes()


    return (
        <div>
            {
                notes?.map((note: any) => {
                    return <Note key={note.id} note={note}/>
                })
            }
            <h1>HI</h1>
        </div>
    )

    function Note({note}: any) {
        const { id, title } = note || {}

        return (
            <Link href={`/notes/${id}`}>
                <div>{title}</div>
            </Link>
        )
    }
}