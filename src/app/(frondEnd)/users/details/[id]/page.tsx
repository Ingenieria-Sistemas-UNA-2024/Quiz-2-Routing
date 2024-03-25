import ProfileDetails from "@/components/ProfileDetails";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const id = context.params.id;
  return (
    <>
      <ProfileDetails />
    </>
  );
}
