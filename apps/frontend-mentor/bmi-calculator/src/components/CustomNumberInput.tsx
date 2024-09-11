import { InputHTMLAttributes } from "react";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const CustomNumberInput = ({ name, ...props }: NumberInputProps) => {
    return (
        <div className="flex items-center justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
            <input
                name={name}
                type="number"
                placeholder="0"
                min="0"
                className="input input-ghost w-full max-w-xs"
                {...props}
            />
            <p className="text-2xl font-semibold text-blue-600">
                {name?.slice(0, 2)}
            </p>
        </div>
    );
};
