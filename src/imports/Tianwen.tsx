import imgRectangle5 from "figma:asset/ea035d335997adce2e5f882a778a0e9ab74e1c00.png";

export default function Tianwen() {
  return (
    <div className="relative w-full h-full" data-name="tianwen">
      <img 
        alt="Tianwen satellite system" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        src={imgRectangle5} 
      />
    </div>
  );
}