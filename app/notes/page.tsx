async function fetchNotes() {
    const notes = await fetch('https://jsonplaceholder.typicode.com/todos')
    return notes.json()
}

interface INote {

    title: string;
    userId: number
}

export default async function Page(){
     const notes = await fetchNotes()
    return <div>

        <h1>Lost of Notes</h1>

        <ul>
            {notes.map((note:INote)=>{
                return (
                    <li key={note.userId}>{note.title}</li>
                )
            })}
        </ul>
    </div>
}