import imgRectangle15 from "figma:asset/db379730976c25b75daa93480e710c182d2e4ebd.png";
import imgRectangle16 from "figma:asset/239f3db43a8355ac8d15b265fa36c72faa7347df.png";

export default function Xray() {
  return (
    <div className="bg-white relative size-full" data-name="xray">
      <div className="absolute h-[2969px] left-[261px] top-[442px] w-[5072px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle15} />
      </div>
      <div className="absolute h-[2711px] left-[261px] top-[3844px] w-[5085px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle16} />
      </div>
    </div>
  );
}