import Form from "@/app/components/Form";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const id = context.params.id;
  return (
    <>
      <Form />
    </>
  );
}
