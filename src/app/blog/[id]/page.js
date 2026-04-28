import Image from "next/image";
import { getBlogById } from "../../../../lib/endpoints/server";
import BlogCarousel from "../../../../components/BlogCarousel";

function renderBlock(block, index) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-white/90 mb-6"
        >
          {block.text}
        </p>
      );

    case "image":
      return (
        <div
          key={index}
          className="relative w-full h-64 sm:h-80 md:h-96 my-8 rounded-xl overflow-hidden"
        >
          <Image
            src={block.src}
            alt={block.alt || ""}
            fill
            className="object-cover"
          />
        </div>
      );

    case "carousel":
      return <BlogCarousel key={index} images={block.images} />;

    case "heading":
      return (
        <h2 key={index} className="text-2xl sm:text-3xl font-bold mt-10 mb-4">
          {block.text}
        </h2>
      );

    default:
      return null;
  }
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const blog = await getBlogById(id);

  return (
    <div className="w-full h-auto bg-black text-white">
      {/* Hero — unchanged */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] overflow-hidden">
        <Image
          src={blog.img ? blog.img : "/logo1.jpg"}
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

      {/* Dynamic content blocks */}
      <div className="w-full px-6 py-12 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {blog.blocks?.map((block, i) => renderBlock(block, i))}
        </div>
      </div>
    </div>
  );
}
