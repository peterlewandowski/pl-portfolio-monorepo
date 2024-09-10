interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MetricForm = ({ handleInputChange }: Props) => {
    return (
        <div className="flex items-start justify-start gap-6 self-stretch">
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <div className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                    Height
                </div>
                <div className="flex items-center justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
                    <input
                        name="height"
                        type="number"
                        placeholder="0"
                        className="input input-ghost w-full max-w-xs"
                        onChange={handleInputChange}
                    />
                    <div className="font-['Inter'] text-2xl font-semibold text-blue-600">cm</div>
                </div>
            </div>
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <div className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                    Weight
                </div>
                <div className="flex items-center justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
                    <input
                        name="weight"
                        type="number"
                        placeholder="0"
                        className="input input-ghost w-full max-w-xs"
                        onChange={handleInputChange}
                    />
                    <div className="font-['Inter'] text-2xl font-semibold text-blue-600">kg</div>
                </div>
            </div>
        </div>
    );
};
