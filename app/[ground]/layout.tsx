export default async function GroundSegmentLayout({
  children,
  page,
}: {
  children?: React.ReactNode;
  page?: React.ReactNode;
}) {
  return (
    <>
      {page}
      {children}
    </>
  );
}
