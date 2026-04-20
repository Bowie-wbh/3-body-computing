import imgRectangle1 from "figma:asset/51899ed8789546fe024890165aced0669b901dd7.png";
import imgRectangle2 from "figma:asset/57f7b2eea2225d25ee8832c034a52e17ec8f8d5f.png";

export default function World() {
  return (
    <div className="bg-white relative size-full" data-name="world">
      <div className="absolute h-[383px] left-[86px] top-[267px] w-[681px]" data-name="ITU">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
        </div>
      </div>
      <div className="absolute h-[383px] left-[86px] top-[769px] w-[681px]" data-name="橄榄页">
        <div className="absolute h-[383px] left-0 top-0 w-[681px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}