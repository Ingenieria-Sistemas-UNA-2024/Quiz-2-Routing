import SearchForm from "@/app/components/SearchForm";
import TableUser from "@/app/components/TableUser";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const id = context.params.id;
  return (
    <>
      <SearchForm />
      <TableUser />
    </>
  );
}
