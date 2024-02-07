export const BmiCalculator = () => {
    return (
        <div className="inline-flex h-[30rem] w-96 flex-col items-start justify-start gap-8 rounded-2xl bg-white p-8 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)]">
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="font-['Inter'] text-2xl font-semibold text-slate-800">
                    Enter your details below
                </div>
            </div>
            <div className="inline-flex items-start justify-start gap-6 self-stretch">
                <div className="flex h-8 shrink grow basis-0 items-center justify-start gap-4">
                    <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-600"
                        defaultChecked
                    />

                    <div className="font-['Inter'] text-base font-semibold leading-normal text-slate-800">
                        Metric
                    </div>
                </div>
                <div className="flex h-8 shrink grow basis-0 items-center justify-start gap-4">
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-600" />
                    <div className="font-['Inter'] text-base font-semibold leading-normal text-slate-800">
                        Imperial
                    </div>
                </div>
            </div>
            <div className="inline-flex items-start justify-start gap-6 self-stretch">
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                    <div className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                        Height
                    </div>
                    <div className="inline-flex items-center justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
                        <input
                            type="number"
                            placeholder="0"
                            className="input input-ghost w-full max-w-xs"
                        />
                        <div className="font-['Inter'] text-2xl font-semibold text-blue-600">
                            cm
                        </div>
                    </div>
                </div>
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                    <div className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                        Weight
                    </div>
                    <div className="inline-flex items-center justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
                        <input
                            type="number"
                            placeholder="0"
                            className="input input-ghost w-full max-w-xs"
                        />
                        <div className="font-['Inter'] text-2xl font-semibold text-blue-600">
                            kg
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center justify-center gap-6 self-stretch rounded-l-2xl rounded-r-[10rem] bg-gradient-to-r from-blue-600 to-indigo-500 p-8">
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2">
                    <div className="self-stretch font-['Inter'] text-base font-semibold leading-normal text-white">
                        Your BMI is...
                    </div>
                    <div className="font-['Inter'] text-6xl font-semibold leading-10 text-white">
                        23.4
                    </div>
                </div>
                <div className="shrink grow basis-0">
                    <span className="font-['Inter'] text-sm font-normal leading-tight text-white">
                        Your BMI suggests you’re a healthy weight. Your ideal weight is between{" "}
                    </span>
                    <span className="font-['Inter'] text-sm font-bold leading-tight text-white">
                        63.3kgs - 85.2kgs
                    </span>
                    <span className="font-['Inter'] text-sm font-normal leading-tight text-white">
                        .
                    </span>
                </div>
            </div>
        </div>
    );
};
