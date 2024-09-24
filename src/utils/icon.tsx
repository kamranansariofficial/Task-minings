
const importAll = (requireContext: any) => {
  const icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {};
  requireContext.keys().forEach((key: string) => {
    const iconName = key.replace('./', '').replace('.svg', '');
    icons[iconName] = requireContext(key).default;
  });
  return icons;
};

const svgs = importAll((require as any)?.context('@public/static/icons', false, /\.svg$/));
// make component to load icon
const Icon = ({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) => {
  const Component = svgs[name];
  return Component ? <Component {...props} /> : null;
};
export default Icon;