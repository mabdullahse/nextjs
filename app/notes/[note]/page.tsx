
async function fetchNote(id: string) {
  const notes = await fetch('https://jsonplaceholder.typicode.com/todos/'+id)
  return notes.json()
}

interface INote {
  title: string;
  userId: number
}
export async function generateStaticParams(){
  return [
    {note: '1'},
    {note: '2'},
    {note: '3'},
  ]
}

export default async function Page({ params }: { params: { note: string } }) {
    const note: INote = await fetchNote(params.note)
    return <div>My Post: {note.title}</div>
  }