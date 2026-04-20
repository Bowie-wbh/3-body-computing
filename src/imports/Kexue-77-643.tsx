import imgRectangle2 from "figma:asset/248fba50dd4f1d6d08f46634ef512f3dfa222737.png";
import imgRectangle3 from "figma:asset/5a4ea9270b6d4451eab74eeadec144ed64b11714.png";
import imgRectangle4 from "figma:asset/1010c352d32f7ea43ef54d8098e35d0a17b67e51.png";
import imgRectangle5 from "figma:asset/ea035d335997adce2e5f882a778a0e9ab74e1c00.png";

export default function Kexue() {
  return (
    <div className="bg-white relative size-full" data-name="kexue">
      <div className="absolute h-[383px] left-[129px] top-[1206px] w-[681px]" data-name="yaogan">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
        </div>
        <div className="absolute h-[383px] left-0 top-[-538px] w-[681px]" data-name="qixiang">
          <div className="absolute h-[383px] left-0 top-0 w-[681px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
      <div className="absolute h-[383px] left-[129px] top-[1739px] w-[681px]" data-name="xihe">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
        </div>
      </div>
      <div className="absolute h-[389px] left-[119px] top-[180px] w-[691px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle5} />
      </div>
    </div>
  );
}