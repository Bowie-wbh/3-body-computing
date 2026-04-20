import img from "figma:asset/302b1c8b7eabefdf2aad9f0fdf984025237ae16b.png";
import img1 from "figma:asset/ea8e5b8358a7b0a42e463ca3875b86619a0c3aac.png";
import img2 from "figma:asset/1ad5b028dd81536db5f25e923ff9b59cd9fae5f6.png";
import img3 from "figma:asset/b706473cdb60b7a0c844fb6e4e744832ca2b1c5a.png";
import img4 from "figma:asset/24006ac554fcbc60285022ae3a46441a9b1e0fe0.png";

export default function TechnologyNoBackground() {
  return (
    <div className="bg-white relative size-full" data-name="technology-no-background">
      <div className="absolute h-[1207px] left-[402px] top-[193px] w-[1609px]" data-name="计算机">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="absolute h-[1207px] left-[1921px] top-[1704px] w-[1609px]" data-name="模型">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[1207px] left-[4175px] top-[193px] w-[1609px]" data-name="激光">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="absolute h-[1207px] left-[2306px] top-[193px] w-[1610px]" data-name="路由器">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="absolute h-[1207px] left-[190px] top-[1704px] w-[1609px]" data-name="分布式">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}