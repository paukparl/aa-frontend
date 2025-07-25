export default async function Tipin2SegmentLayout({
  children,
  page,
}: {
  children?: React.ReactNode;
  page: React.ReactNode;
}) {
  return (
    <>
      {page}
      {children}
    </>
  );
}
