import svgPaths from "./svg-flg3jlevz7";
import imgRectangle75 from "figma:asset/ce979fbb8ee38a3b6f0f5fa960bf0a311bd6ebf6.png";
import imgRectangle76 from "figma:asset/ddbb3c1ac8989431dd02c82cdb07728c9c29bc20.png";
type Group121HelperProps = {
  text: string;
  text1: string;
  text2: string;
};

function Group121Helper({ text, text1, text2 }: Group121HelperProps) {
  return (
    <p className="mb-0">
      <span className="font-['Open_Sans:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[1.5] text-[#36d12e]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </span>
      <span className="font-['Open_Sans:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.5]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text1}
      </span>
      <span className="leading-[1.5]">{text2}</span>
    </p>
  );
}
type Group122HelperProps = {
  text: string;
  text1: string;
  text2: string;
};

function Group122Helper({ text, text1, text2 }: Group122HelperProps) {
  return (
    <li className="mb-0 ms-[24px]">
      <span className="font-['Open_Sans:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Regular','Noto_Sans_SC:Bold','Noto_Sans_JP:Regular',sans-serif] leading-[1.5] text-[#36d12e]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </span>
      <span className="font-['Open_Sans:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[1.5] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        {text1}
      </span>
      <span className="leading-[1.5]">{text2}</span>
    </li>
  );
}

export default function Olive() {
  return (
    <div className="relative size-full" data-name="olive">
      <div className="absolute contents left-0 top-0">
        <div className="-translate-x-1/2 absolute bg-[#051604] border border-[#186c14] border-solid h-[382px] left-[calc(50%-290px)] rounded-[10px] top-0 w-[540px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] h-[48.649px] justify-center leading-[0] left-[calc(50%-290px)] text-[#36d12e] text-[28px] text-center top-[189.32px] w-[224px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[1.6]">科学载荷搭载试验</p>
        </div>
        <ul className="absolute block font-['Open_Sans:Regular','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[123px] leading-[0] left-[calc(50%-540px)] list-disc text-[16px] text-white top-[239px] w-[500px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 700" }}>
          <Group122Helper text="服务内容" text1="：" text2="提供免费开放的科学载荷卫星搭载服务" />
          <Group122Helper text="提供支持" text1="：" text2="提供卫星平台、平台接入设计服务、在轨算力支持，协同完成载荷在轨试验。" />
          <li className="ms-[24px]">
            <span className="font-['Open_Sans:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Regular','Noto_Sans_SC:Bold','Noto_Sans_JP:Regular',sans-serif] leading-[1.5] text-[#36d12e]" style={{ fontVariationSettings: "'wght' 700" }}>{`数据权限 `}</span>
            <span className="leading-[1.5]">：在轨试验数据面向全球开放共享，作为“三体计算星座”的开放资源支撑开放科学发展。</span>
          </li>
        </ul>
        <div className="absolute h-[140px] left-[180px] top-[20px] w-[180px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle75} />
        </div>
      </div>
      <div className="absolute contents left-[580px] top-0">
        <div className="-translate-x-1/2 absolute h-[382px] left-[calc(50%+290px)] top-0 w-[540px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 382">
            <path d={svgPaths.p1dade300} fill="var(--fill-0, #051604)" id="Rectangle 25" stroke="var(--stroke-0, #186C14)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] h-[46.216px] justify-center leading-[0] left-[calc(50%+290px)] text-[#36d12e] text-[28px] text-center top-[191.11px] w-[224px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[1.6]">太空智能应用验证</p>
        </div>
        <div className="absolute font-['Open_Sans:Regular','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[123px] leading-[0] left-[calc(50%+40px)] text-[16px] text-white top-[239px] w-[500px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <Group121Helper text="服务内容" text1="：" text2="提供免费开放的模型、应用的在轨验证服务" />
          <Group121Helper text="提供支持" text1="：" text2="提供开放样本数据、应用开发环境、接口信息等资源，提供算法优化、模拟测试、模型与应用在轨验证等一站式服务。" />
          <p>
            <span className="font-['Open_Sans:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[1.5] text-[#36d12e]" style={{ fontVariationSettings: "'wght' 700" }}>{`数据权限 `}</span>
            <span className="leading-[1.5]">：模型、应用等技术及其轨验证数据，将面向全球开放共享，作为“三体计算星座”的开放资源支撑开放科学发展。</span>
          </p>
        </div>
        <div className="absolute h-[140px] left-[760px] top-[20px] w-[180px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle76} />
        </div>
      </div>
    </div>
  );
}