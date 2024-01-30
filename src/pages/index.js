import Image from "next/image";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home(props) {
  const { posts, posts2 } = props;
  console.log(posts);
  console.log(posts2);
  return (
    <div className="">
      <Header />
      <div className="w-[2420px] h-[3005px] flex-col justify-start items-center gap-[100px] flex mx-auto p-[50px]">
        <div className="w-[2220px] h-[25px] justify-start items-center gap-10 flex pl-[20px]">
          <div className="text-orange-300 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            All
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Design
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Travel
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Fashion
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Technology
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Branding
          </div>
        </div>
        <div className="w-[2216px] h-[1585px] flex-row justify-start items-center gap-8 flex flex-wrap">
          {/* <img src={posts[3].cover_image}></img> */}
          {posts.map((el) => (
            <Card title={el.title} url={el.cover_image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?1");
  const posts = await res.json();

  const res2 = await fetch("https://dev.to/api/articles?collection_id=99");
  const posts2 = await res2.json();

  return {
    props: {
      posts,
      posts2,
    },
  };
};
