import imgRectangle1 from "figma:asset/74770ec887a760685f87d18e47c41731ef49b512.png";
import imgRectangle2 from "figma:asset/248fba50dd4f1d6d08f46634ef512f3dfa222737.png";
import imgRectangle3 from "figma:asset/5a4ea9270b6d4451eab74eeadec144ed64b11714.png";
import imgRectangle4 from "figma:asset/1010c352d32f7ea43ef54d8098e35d0a17b67e51.png";

export default function Kexue() {
  return (
    <div className="bg-white relative size-full" data-name="kexue">
      <div className="absolute h-[383px] left-[129px] top-[267px] w-[681px]" data-name="tianwen">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
        </div>
      </div>
      <div className="absolute h-[383px] left-[129px] top-[769px] w-[681px]" data-name="yaogan">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
        </div>
      </div>
      <div className="absolute h-[383px] left-[129px] top-[1249px] w-[681px]" data-name="qixiang">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
        </div>
      </div>
      <div className="absolute h-[383px] left-[129px] top-[1739px] w-[681px]" data-name="xihe">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
        </div>
      </div>
    </div>
  );
}