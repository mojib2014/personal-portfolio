import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center pt-4">
      <Image
        src={picture}
        alt={name}
        width={60}
        height={60}
        className="w-12 h-12 rounded-full mr-4 block object-cover"
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
