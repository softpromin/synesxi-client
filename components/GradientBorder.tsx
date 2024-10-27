const GradientBorder = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="bg-custom-gradient p-[1px] rounded-md">
            {children}
        </div>
    );
};

export default GradientBorder;