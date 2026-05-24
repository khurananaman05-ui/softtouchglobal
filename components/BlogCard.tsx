import Image from "next/image";
import { BlogPost } from "@/data/site";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-ink/8 bg-white shadow-soft transition duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden bg-cloud">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-ocean/50" />
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-ocean/50" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-2xl font-semibold text-ink">{post.title}</h3>
        <p className="text-sm leading-6 text-slateText/80">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ocean">
          Sample Article
          <span aria-hidden="true">-&gt;</span>
        </span>
      </div>
    </article>
  );
}
