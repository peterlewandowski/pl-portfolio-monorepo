type Props = {
    icon: React.ReactNode;
    title: string;
    content: string;
};

export const Card: React.FC<Props> = ({ icon, title, content }) => {
    return (
        <div className="flex w-[22.8125rem] shrink-0 flex-col rounded-2xl bg-white p-8 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)]">
            <div className="flex flex-col">
                <div className="mb-4 flex items-center justify-start gap-4">
                    <div className="h-8 w-8">{icon}</div>
                    <div className="text-heading-s text-gunmetal">{title}</div>
                </div>
                <div className="text-electricBlue">{content}</div>
            </div>
        </div>
    );
};
