import svgPaths from "./svg-epzro4rgnd";

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
        <g clipPath="url(#clip0_11_310)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_11_310">
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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#34c759] text-[14px] top-[0.5px] tracking-[-0.1504px]">1. Case Status</p>
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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#08f] text-[14px] top-[0.5px] tracking-[-0.1504px]">2. Entry Method</p>
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
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41px] not-italic text-[#1e1e1e] text-[14px] text-center top-[8.5px] tracking-[-0.1504px]">← Back</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#1e1e1e] text-[24px] top-0 tracking-[0.0703px]">Upload Your Court Forms</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Upload PDF or image files of your small claims court documents</p>
    </div>
  );
}

function CaseIntake1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-[830px]" data-name="CaseIntake">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 4V20" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p171a9480} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p110a37f0} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f3e8ff] left-[333px] rounded-[16777200px] size-[64px] top-0" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[28px] left-0 top-[80px] w-[730px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[365.44px] not-italic text-[#1e1e1e] text-[18px] text-center top-0 tracking-[-0.4395px]">Drag and drop your file here</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-0 top-[116px] w-[730px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[365.34px] not-italic text-[#6a7282] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">or</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[16px] left-0 top-[204px] w-[730px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[364.62px] not-italic text-[#6a7282] text-[12px] text-center top-px">Supported formats: PDF (Max 10MB)</p>
    </div>
  );
}

function CaseIntake3() {
  return <div className="absolute h-[34px] left-0 opacity-0 top-0 w-[114.727px]" data-name="CaseIntake" />;
}

function Button1() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[36px] left-[306.63px] overflow-clip rounded-[8px] top-[152px] w-[116.727px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[57.5px] not-italic text-[#1e1e1e] text-[14px] text-center top-[7.5px] tracking-[-0.1504px]">Browse Files</p>
      <CaseIntake3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
      <Button1 />
    </div>
  );
}

function CaseIntake2() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center p-[36px] relative rounded-[10px] shrink-0 w-[830px]" data-name="CaseIntake">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container9 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
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
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop - 3">
      <GlobalHeader />
      <CaseIntake />
    </div>
  );
}