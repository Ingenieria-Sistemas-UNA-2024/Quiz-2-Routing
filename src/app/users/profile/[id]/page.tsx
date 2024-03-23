import ProfileCard from "@/app/components/ProfileCard";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const id = context.params.id;
  return (
    <>
      <ProfileCard />
    </>
  );
}
