type Params = {
    id: string
}

export default function Page(context: {params: Params}) {
    const id = context.params.id
    return (
        <h1>Info {id}</h1>
    )
  }