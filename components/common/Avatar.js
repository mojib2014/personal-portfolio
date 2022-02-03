import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        alt={name}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="text-xl font-bold ml-2">@{name}</div>
    </div>
  );
}
