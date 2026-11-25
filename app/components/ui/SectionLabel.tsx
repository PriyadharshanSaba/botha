// Chapter divider: 15px uppercase gold label with a gold underline. With an id it is also a scroll target.
export default function SectionLabel({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className ? `ui-chapter ${className}` : "ui-chapter"}>
      <h2 className="ui-chapter-label">{children}</h2>
    </section>
  );
}
