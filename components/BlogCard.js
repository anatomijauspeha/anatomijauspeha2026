import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogCard({id}) {
    const router = useRouter();
    const navigateToPost = () => {
        router.push(`/blog/${id}`);
    }

  return (
    <div onClick={navigateToPost} className="relative w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-2xl overflow-hidden cursor-pointer">
      <Image
        src="/logo1.jpg"
        alt="Blog post image"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 bg-black/50 backdrop-blur-sm z-10">
        <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 text-white">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
            TITLE BLOG POST
          </h3>

          <p className="font-text line-clamp-3 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-xl">
            LOREM IPSUM TEXT BLA BLA BLA LOREM IPSUM TEXT BLA BLA BLA LOREM
            IPSUM TEXT BLA BLA BLA LOREM BLA BLA lorem ipsum blas
          </p>
        </div>
      </div>
    </div>
  );
}
