import img from "figma:asset/3f1101fbfc7330a86b6123770b47eba356e3e248.png";
import img1 from "figma:asset/bcaec078682cf71f6ae8cac1c000abbd22bac539.png";
import img2 from "figma:asset/99053f6bcc594cd023e253d96c9c90778103f603.png";
import img3 from "figma:asset/ad45edbcc6445af3508b8a3952d25b83e86fe9ba.png";
import img4 from "figma:asset/94328e747c6edcdfc18cbc3fae0315e7d1d15d2b.png";

export default function Technology() {
  return (
    <div className="bg-white relative size-full" data-name="technology">
      <div className="absolute h-[1207px] left-[402px] top-[193px] w-[1609px]" data-name="计算机">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="absolute h-[1207px] left-[3096px] top-[1725px] w-[1609px]" data-name="模型">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[1207px] left-[4175px] top-[193px] w-[1609px]" data-name="激光">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="absolute h-[1207px] left-[2306px] top-[193px] w-[1610px]" data-name="路由器">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="absolute h-[1207px] left-[712px] top-[1689px] w-[1609px]" data-name="分布式">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}