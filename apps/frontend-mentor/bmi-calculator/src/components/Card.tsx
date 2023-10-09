type Props = {
    icon: React.ReactNode;
    title: string;
    content: string;
};

export const Card: React.FC<Props> = ({ icon, title, content }) => {
    return (
        <div className="inline-flex w-[22.8125rem] flex-col items-start justify-start gap-8 rounded-2xl bg-white p-8 shadow">
            <div className="flex h-40 flex-col">
                <div className="inline-flex items-center justify-start gap-4 self-stretch">
                    <div className="relative h-8 w-8">{icon}</div>
                    <div className="text-heading-s text-gunmetal">{title}</div>
                </div>
                <div className="text-electricBlue">{content}</div>
            </div>
        </div>
    );
};
