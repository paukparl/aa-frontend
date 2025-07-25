export default async function Tipin1SegmentLayout({
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
