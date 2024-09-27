import { cn } from "@pl-portfolio-monorepo/utils";

export type ContainerProps = {
    children?: React.ReactNode;
    className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className={cn(["mx-auto px-28", className])}>{children}</div>;
};
