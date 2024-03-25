import FormAdmin from "../../../components/FormAdmin";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const id = context.params.id;
  return (
    <>
      <FormAdmin />
    </>
  );
}
