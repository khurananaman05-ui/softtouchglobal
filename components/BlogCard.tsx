import Image from "next/image";

type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
};

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-ink/8 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden bg-cloud">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ocean">
            {post.category}
          </p>
        </div>
      </div>

      <div className="space-y-5 p-7">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean/80">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-ocean/40" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="font-display text-[30px] leading-[1.2] text-ink transition duration-300 group-hover:text-ocean">
          {post.title}
        </h3>

        <p className="text-[16px] leading-8 text-slateText/82">
          {post.excerpt}
        </p>

        <div className="pt-2">
          <button className="rounded-full border border-ink/10 px-5 py-3 text-sm font-semibold tracking-[0.12em] text-ink transition duration-300 hover:border-ocean hover:bg-ocean hover:text-white">
            Read Article
          </button>
        </div>
      </div>
    </article>
  );
}