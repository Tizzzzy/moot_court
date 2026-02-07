import svgPaths from "./svg-z1o5npmmn9";

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
    <div className="bg-white h-[81px] relative shrink-0 w-full" data-name="Global header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[48px] relative size-full">
          <Container />
        </div>
      </div>
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

function Icon3() {
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

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#34c759] text-[14px] top-[0.5px] tracking-[-0.1504px]">2. Entry Method</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#dcfce7] h-[36px] relative rounded-[16777200px] shrink-0 w-[159.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <Icon3 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon4() {
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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#08f] text-[14px] top-[0.5px] tracking-[-0.1504px]">3. Case Details</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#dbeafe] h-[36px] relative rounded-[16777200px] shrink-0 w-[128.461px]" data-name="Container">
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
          <Icon4 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcfbcf00} id="Vector" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Case Information</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Basic details about your case</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[188.508px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function CaseIntake1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Case Number</p>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">e.g., 2025-SC-1234</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[846px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function CaseIntake3() {
  return (
    <div className="absolute h-[14px] left-[77.14px] top-0 w-[6.516px]" data-name="CaseIntake">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] top-[0.5px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">Case Type</p>
      <CaseIntake3 />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.102px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.1504px]">Select case type</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[846px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function CaseIntake4() {
  return (
    <div className="absolute h-[14px] left-[42.94px] top-0 w-[6.516px]" data-name="CaseIntake">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] top-[0.5px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">State</p>
      <CaseIntake4 />
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">e.g., California</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[415px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function CaseIntake5() {
  return (
    <div className="absolute h-[14px] left-[55.57px] top-0 w-[6.516px]" data-name="CaseIntake">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] top-[0.5px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">County</p>
      <CaseIntake5 />
    </div>
  );
}

function Input2() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">e.g., Los Angeles</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[415px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[846px]">
      <Container13 />
      <Container14 />
    </div>
  );
}

function CaseIntake2() {
  return (
    <div className="relative shrink-0" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative">
        <Container11 />
        <Container12 />
        <Frame />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[25px] pr-px py-[25px] relative w-full">
        <CaseIntake1 />
        <CaseIntake2 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Plaintiff Information</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`That's you - the person bringing the claim`}</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[48px] relative shrink-0 w-[270.164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function CaseIntake6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function CaseIntake8() {
  return (
    <div className="absolute h-[14px] left-[107.13px] top-0 w-[6.516px]" data-name="CaseIntake">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] top-[0.5px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">Your Full Name</p>
      <CaseIntake8 />
    </div>
  );
}

function Input3() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">First and Last Name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[8px] h-[14px] items-center leading-[14px] not-italic relative shrink-0 text-[14px] tracking-[-0.1504px] w-full" data-name="Primitive.label">
      <p className="relative shrink-0 text-[#0a0a0a]">Your Address</p>
      <p className="relative shrink-0 text-[#fb2c36]">*</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">Street Address, City, State, ZIP</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
      <Textarea />
    </div>
  );
}

function CaseIntake7() {
  return (
    <div className="relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[25px] pr-px py-[25px] relative w-full">
        <CaseIntake6 />
        <CaseIntake7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Defendant Information</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`The person or business you're making a claim against`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[48px] relative shrink-0 w-[345.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function CaseIntake9() {
  return (
    <div className="h-[48px] relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function CaseIntake11() {
  return (
    <div className="absolute h-[14px] left-[157.7px] top-0 w-[6.516px]" data-name="CaseIntake">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] top-[0.5px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`Defendant's Full Name`}</p>
      <CaseIntake11 />
    </div>
  );
}

function Input4() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">Full Name or Business Name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel6 />
      <Input4 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[8px] h-[14px] items-center leading-[14px] not-italic relative shrink-0 text-[14px] tracking-[-0.1504px] w-full" data-name="Primitive.label">
      <p className="relative shrink-0 text-[#0a0a0a]">{`Defendant's Address`}</p>
      <p className="relative shrink-0 text-[#fb2c36]">*</p>
    </div>
  );
}

function Textarea1() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">Street Address, City, State, ZIP</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Textarea1 />
    </div>
  );
}

function CaseIntake10() {
  return (
    <div className="relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[25px] pr-px py-[25px] relative w-full">
        <CaseIntake9 />
        <CaseIntake10 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Claim Details</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`What you're asking for and why`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[48px] relative shrink-0 w-[202.898px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function CaseIntake12() {
  return (
    <div className="h-[48px] relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function CaseIntake14() {
  return (
    <div className="absolute h-[14px] left-[197.27px] top-0 w-[6.516px]" data-name="CaseIntake">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] top-[0.5px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">Brief Summary of Your Claim</p>
      <CaseIntake14 />
    </div>
  );
}

function Textarea2() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">{`Describe in a few sentences what happened and why you're making this claim...`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">{`Keep it brief - you'll have a chance to explain in detail later`}</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel8 />
      <Textarea2 />
      <Paragraph5 />
    </div>
  );
}

function CaseIntake15() {
  return (
    <div className="absolute h-[14px] left-[162.02px] top-0 w-[6.516px]" data-name="CaseIntake">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] top-[0.5px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`Amount You're Seeking`}</p>
      <CaseIntake15 />
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[8px] top-0 w-[846px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[28px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">2500</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[6px] w-[9.766px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] top-[-0.5px] tracking-[-0.3125px]">$</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input5 />
      <Text3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel9 />
      <Container27 />
    </div>
  );
}

function CaseIntake13() {
  return (
    <div className="h-[188px] relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[25px] pr-px py-[25px] relative w-full">
        <CaseIntake12 />
        <CaseIntake13 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Important Dates</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Key timeline information for your case</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[48px] relative shrink-0 w-[243.367px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function CaseIntake16() {
  return (
    <div className="h-[48px] relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="font-['Inter:Medium',sans-serif] font-medium h-[24px] not-italic relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">When was/will the case be filed?</p>
      <p className="absolute leading-[14px] left-[247px] text-[#fb2c36] text-[14px] top-[4px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_11_603)" id="Icon">
          <path d={svgPaths.p1242ba00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 5.5L6 7L11 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_11_603">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#08f] relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#08f] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[149.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">I know the filing date</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Text4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#eff6ff] col-[1] css-por8k5 relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#08f] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[183.008px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">{`Not yet filed / Don't know`}</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Text5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="col-[2] css-por8k5 relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[60px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon12 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[#0a0a0a] text-[14px] top-[14.5px] tracking-[-0.1504px]">Select filing date</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel10 />
      <Container31 />
      <Button2 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="font-['Inter:Medium',sans-serif] font-medium h-[24px] not-italic relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Is a court hearing scheduled?</p>
      <p className="absolute leading-[14px] left-[221px] text-[#fb2c36] text-[14px] top-[6px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[168.258px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Yes, I have a court date</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Text6 />
    </div>
  );
}

function Button3() {
  return (
    <div className="col-[1] css-por8k5 relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_11_582)" id="Icon">
          <path d={svgPaths.p3ea2eb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 5.5L6 7L11 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_11_582">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#08f] relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#08f] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[185.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">No hearing scheduled yet</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Text7 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#eff6ff] col-[2] css-por8k5 relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#08f] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[60px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel11 />
      <Container37 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="font-['Inter:Medium',sans-serif] font-medium h-[24px] not-italic relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Have you served the defendant?</p>
      <p className="absolute leading-[14px] left-[247px] text-[#fb2c36] text-[14px] top-[6px] tracking-[-0.1504px]">*</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`"Serving" means officially delivering the court papers to the defendant`}</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[218.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">{`Yes, I've served the defendant`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Text8 />
    </div>
  );
}

function Button5() {
  return (
    <div className="col-[1] css-por8k5 relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[170.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Not yet / Not applicable</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Text9 />
    </div>
  );
}

function Button6() {
  return (
    <div className="col-[2] css-por8k5 relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[60px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel12 />
      <Paragraph7 />
      <Container43 />
    </div>
  );
}

function CaseIntake17() {
  return (
    <div className="relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative w-full">
        <Container30 />
        <Container36 />
        <Container42 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[25px] pr-px py-[25px] relative w-full">
        <CaseIntake16 />
        <CaseIntake17 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[82.898px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">← Back</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[151.26px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-black h-[36px] relative rounded-[8px] shrink-0 w-[179.258px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[74px] not-italic text-[14px] text-center text-white top-[8.5px] tracking-[-0.1504px]">Save and Continue</p>
        <Icon14 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Container48 />
    </div>
  );
}

function CaseIntake() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[896px]" data-name="CaseIntake">
      <Container3 />
      <Container5 />
      <Form />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop - 5">
      <GlobalHeader />
      <CaseIntake />
    </div>
  );
}