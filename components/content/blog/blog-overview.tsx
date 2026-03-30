export const BlogOverview = ({
  data,
  title,
}: {
  data: string[];
  title: string;
}) => {
  return (
    <div className="space-y-4">
      <h1 className="font-hankenGrotesk text-3xl font-semibold">{title}</h1>
      <div className="text-muted-foreground space-y-4">
        {data.map((d, i) => (
          <p key={i} className="text-lg tracking-wide">
            {d}
          </p>
        ))}
      </div>
    </div>
  );
};
