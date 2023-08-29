interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return <h1 className="mt-6 text-4xl sm:text-5xl text-[#2F4858]">{text}</h1>;
}
