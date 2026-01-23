export const BlogOverview = ({ data, title }: { data: string[]; title: string }) => {
    return (
        <div>
            <h1 className="font-ibmPlexSans font-semibold text-3xl">{title}</h1>
            <ul className="flex flex-col mt-4 pl-10">
                {data?.map((item, i) => (
                    <li className="text-muted-foreground leading-loose list-disc" key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
