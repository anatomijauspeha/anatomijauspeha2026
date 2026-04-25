import Image from "next/image";
import { getBlogById } from "../../../../lib/endpoints/server";

export default async function BlogPost({params}) {
  const {id} = params;
  const blog = await getBlogById(id);
  return (
    <div className="w-full h-auto bg-black text-white">
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] overflow-hidden">
        <Image
          src={blog.img}
          alt="Blog post background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end px-6 pb-8 sm:px-10 md:px-16 lg:px-24">
          <div className="w-full max-w-4xl bg-black/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-12 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
}
