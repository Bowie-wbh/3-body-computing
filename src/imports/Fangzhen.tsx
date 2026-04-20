import imgImage from "figma:asset/12a7dbaf17ff3f4a5ee512178b14602602cde0c4.png";

export default function Fangzhen() {
  return (
    <div aria-hidden="true" className="bg-white relative rounded-[16px] size-full" data-name="fangzhen" role="presentation">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white h-[40px] relative shrink-0 w-full" data-name="Title bar">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-b border-solid inset-0 pointer-events-none" />
          <div className="-translate-y-1/2 absolute h-[10px] left-[16px] top-1/2 w-[46px]" data-name="Buttons">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 10">
              <g id="Buttons">
                <circle cx="5" cy="5" fill="var(--fill-0, #FF5858)" id="Ellipse 1" r="5" />
                <circle cx="23" cy="5" fill="var(--fill-0, #FFC72C)" id="Ellipse 2" r="5" />
                <circle cx="41" cy="5" fill="var(--fill-0, #88D95C)" id="Ellipse 3" r="5" />
              </g>
            </svg>
          </div>
        </div>
        <div className="h-[313.762px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute h-[313.762px] left-0 top-0 w-[544px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.05),0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}