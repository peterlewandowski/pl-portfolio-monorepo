import { ReactComponent as Logo } from "../images/logo.svg";

export const Hero = () => {
    return (
        <section id="hero" className="relative">
            <div className="absolute -z-50 h-[46.0625rem] w-[61.125rem] rounded-bl-3xl rounded-br-3xl bg-gradient-to-r from-blue-50 to-cyan-100" />
            <div className="px-36">
                <div className="pt-20">
                    <Logo />
                </div>
                <div className="mt-7 flex gap-4 [&>*]:basis-1/2">
                    <div className="*******">
                        <h1 className="text-heading-xl">Body Mass Index Calculator</h1>
                        <div className="text-body-m text-electricBlue">
                            Better understand your weight in relation to your height using our body
                            mass index (BM) calculator. While BMI is not the sole determinant of a
                            healthy weight, it offers a valuable starting point to evaluate your
                            overall health and well-being.
                        </div>
                    </div>
                    <div className="inline-flex h-96 w-96 flex-col items-start justify-start gap-8 rounded-2xl bg-white p-8 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)]">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <div className="font-['Inter'] text-2xl font-semibold text-slate-800">
                                Enter your details below
                            </div>
                        </div>
                        <div className="inline-flex items-start justify-start gap-6 self-stretch">
                            <div className="flex h-8 shrink grow basis-0 items-center justify-start gap-4">
                                <div className="relative h-8 w-8">
                                    <div className="absolute left-0 top-0 h-8 w-8 rounded-full border bg-blue-600 bg-opacity-20" />
                                    <div className="absolute left-[8px] top-[8px] h-3.5 w-3.5 rounded-full bg-blue-600" />
                                </div>
                                <div className="font-['Inter'] text-base font-semibold leading-normal text-slate-800">
                                    Metric
                                </div>
                            </div>
                            <div className="flex h-8 shrink grow basis-0 items-center justify-start gap-4">
                                <div className="h-8 w-8 rounded-full border border-zinc-200 bg-white" />
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
                                <div className="inline-flex items-start justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
                                    <div className="shrink grow basis-0 font-['Inter'] text-2xl font-semibold text-slate-800">
                                        185
                                    </div>
                                    <div className="font-['Inter'] text-2xl font-semibold text-blue-600">
                                        cm
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                                <div className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                                    Weight
                                </div>
                                <div className="inline-flex items-start justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
                                    <div className="shrink grow basis-0 font-['Inter'] text-2xl font-semibold text-slate-800">
                                        80
                                    </div>
                                    <div className="font-['Inter'] text-2xl font-semibold text-blue-600">
                                        kg
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex items-center justify-center gap-6 self-stretch rounded-tl-2xl rounded-tr-full rounded-bl-2xl rounded-br-full bg-gradient-to-r from-blue-600 to-indigo-500 p-8">
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
                                    Your BMI suggests you’re a healthy weight. Your ideal weight is
                                    between{" "}
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
                </div>
            </div>
        </section>
    );
};
