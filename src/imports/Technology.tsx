import img from "figma:asset/1b1895b127086fba85fdcc82eb0bac725257fc60.png";
import img1 from "figma:asset/d3d1024d34740da99199c29fdd797c73ad9cf441.png";
import img2 from "figma:asset/d3e8e67da416fb65c5b8120875de5ace4a6c15d2.png";
import img3 from "figma:asset/799ff89ae06bbda31b4c9b4153c150929c47bef0.png";
import img4 from "figma:asset/8eec1b0d214377b5f7a82b19a32937242a63f2d0.png";

export default function Technology() {
  return (
    <div className="bg-white relative size-full" data-name="technology">
      <div className="absolute h-[1207px] left-[232px] top-[193px] w-[1609px]" data-name="计算机">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="absolute h-[1207px] left-[2930px] top-[1753px] w-[1609px]" data-name="模型">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[1207px] left-[4282px] top-[193px] w-[1609px]" data-name="激光">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="absolute h-[1207px] left-[2125px] top-[193px] w-[1610px]" data-name="路由器">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="absolute h-[1207px] left-[871px] top-[1753px] w-[1609px]" data-name="分布式">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}