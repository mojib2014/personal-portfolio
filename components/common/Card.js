import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";

export default function Card({ item }) {
  return (
    <div className="card border border-gray p-4 mb-5">
      <div className="image-container">
        <CoverImage item={item} width={700} height={400} />
      </div>
      <div className="card-body">
        <ul className="meta flex items-center justify-between mb-8">
          <li>
            <Avatar picture={item.author.picture} name={item.author.name} />
          </li>
          <li className="text-[#949393]">
            <DateFormatter dateString={item.date} />
          </li>
        </ul>
        <h2 className="font-bold text-3xl md:text-2xl">{item.title}</h2>
        <p className="text-[1.1rem] tracking-wide">{item.excerpt}</p>
      </div>
    </div>
  );
}
