import svgPaths from "./svg-r2hsv0ngij";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Small Claims Court Prep</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`We'll help you prepare step by step`}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[279.117px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function GlobalHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[81px] items-start justify-center px-[48px] relative shrink-0 w-[1440px]" data-name="Global header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 12H10.6667" id="Vector_3" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 17.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 22.6667H10.6667" id="Vector_5" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[16777200px] shrink-0 size-[64px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[#1e1e1e] text-[36px] text-center tracking-[0.3691px]">{`Let's Get Started`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center tracking-[-0.4492px]">First, we need some basic information about your case</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_11_231)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_11_231">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#008236] text-[14px] top-[0.5px] tracking-[-0.1504px]">1. Case Status</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#dcfce7] h-[36px] relative rounded-[16777200px] shrink-0 w-[147.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <Icon1 />
        <Text />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1447e6] text-[14px] top-[0.5px] tracking-[-0.1504px]">2. Entry Method</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#dbeafe] h-[36px] relative rounded-[16777200px] shrink-0 w-[135.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px]">3. Case Details</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f3f4f6] h-[36px] relative rounded-[16777200px] shrink-0 w-[128.461px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pr-[0.008px] relative size-full">
          <Container6 />
          <Icon2 />
          <Container7 />
          <Icon3 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[82.898px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41px] not-italic text-[#0a0a0a] text-[14px] text-center top-[8.5px] tracking-[-0.1504px]">← Back</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#0a0a0a] text-[24px] top-0 tracking-[0.0703px]">How would you like to enter your case information?</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Choose the method that works best for you</p>
    </div>
  );
}

function CaseIntake1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[830px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 3V15" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17 8L12 3L7 8" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d557600} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[291px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Upload Court Forms</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[40px] left-0 top-[36px] w-[291px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[283px] whitespace-pre-wrap">{`Upload a PDF or image and we'll extract the information`}</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#f3e8ff] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 overflow-clip rounded-[8px] top-[84px] w-[82px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#9810fa] text-[12px] top-[3px]">Quick start</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[112.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Paragraph2 />
        <Badge />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Button1() {
  return (
    <div className="col-[1] css-por8k5 h-[158px] relative rounded-[10px] row-[1] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[26px] px-[26px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[277.617px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Enter Manually</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[277.617px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Fill out a simple form with your case details</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[92.5px] relative shrink-0 w-[277.617px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Button2() {
  return (
    <div className="col-[2] css-por8k5 h-[158px] relative rounded-[10px] row-[1] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[36px] px-[26px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function CaseIntake2() {
  return (
    <div className="relative shrink-0 w-full" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative w-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative w-full">
        <Button />
        <CaseIntake1 />
        <CaseIntake2 />
      </div>
    </div>
  );
}

function CaseIntake() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[896px]" data-name="CaseIntake">
      <Container3 />
      <Container5 />
      <Card />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop - 2">
      <GlobalHeader />
      <CaseIntake />
    </div>
  );
}