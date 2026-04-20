import imgRectangle6 from "figma:asset/a238a95eb8a196699fca64e315a1601230144e95.png";
import imgRectangle7 from "figma:asset/464f3c1e3921a6b6b3e80850ebee278edbf57a80.png";
import imgRectangle8 from "figma:asset/2626c982276bf0931950df8a6bedf36ec6978df7.png";

export default function Application() {
  return (
    <div className="bg-white relative size-full" data-name="application">
      <div className="absolute h-[917px] left-[1795px] top-[71px] w-[1631px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[148.14%] left-0 max-w-none top-[-46.01%] w-[99.97%]" src={imgRectangle6} />
        </div>
      </div>
      <div className="absolute h-[917px] left-[3542px] top-[71px] w-[1631px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle7} />
      </div>
      <div className="absolute h-[917px] left-[5269px] top-[71px] w-[1631px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle8} />
      </div>
    </div>
  );
}