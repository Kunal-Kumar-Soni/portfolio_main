export const BlogOverview = ({ data, title }: { data: string[]; title: string }) => {
    return (
        <div className="space-y-4">
            <h1 className="font-ibmPlexSans font-semibold text-3xl">{title}</h1>
            <div className="space-y-4 text-muted-foreground">
                {data.map((d, i) => <p key={i} className='leading-loose tracking-wide' >{d}</p>)}
            </div>
        </div>
    );
};
