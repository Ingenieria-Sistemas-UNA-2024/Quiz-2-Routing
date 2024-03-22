type Params = {
    user: string
}

export default function Page(context: {params: Params}) {
    const user = context.params.user
    return (
        <h1>Account {user}</h1>
    )
  }