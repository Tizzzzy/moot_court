import svgPaths from "./svg-e5egwfbc0y";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[175.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Overall Readiness Score</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[806.859px]" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[32.961px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] top-[-3px] tracking-[-0.3125px] w-[33px] whitespace-pre-wrap">78%</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[40.96px] top-[2.5px] w-[179.102px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] tracking-[-0.3125px]">{`You're on the right track!`}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[806.859px]" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#030213] h-[12px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="absolute bg-[rgba(3,2,19,0.2)] content-stretch flex flex-col h-[12px] items-start left-0 overflow-clip pl-[-98.56px] pr-[98.56px] rounded-[16777200px] top-[68px] w-[778px]" data-name="Primitive.div">
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
        <Container2 />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[22.84px] not-italic text-[#155dfc] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">
        <p className="mb-0">You’re</p>
        <p>Ready</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[23.5px] not-italic text-[#45556c] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">Ready</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[98px] relative rounded-[10px] shrink-0 w-[111.141px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[25px] px-[33px] relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function ResultsFeedback1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[942px]" data-name="ResultsFeedback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container />
        <Container4 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute content-stretch flex flex-col h-[148px] items-start left-[16px] pl-[25px] pr-px py-[25px] rounded-[14px] top-[32px] w-[992px]" data-name="Card" style={{ backgroundImage: "linear-gradient(171.514deg, rgb(239, 246, 255) 0%, rgb(248, 250, 252) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ResultsFeedback1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
            <path d="M1 3L3 5L7 1" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Strengths</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[54px] whitespace-pre-wrap">3</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[48px] relative shrink-0 w-[70.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function ResultsFeedback2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[270px]" data-name="ResultsFeedback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white col-[1] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
        <ResultsFeedback2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
            <path d={svgPaths.p2d23b080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-1px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
            <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#fef3c6] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">To Improve</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[54px] whitespace-pre-wrap">{`3 `}</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48px] relative shrink-0 w-[79.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function ResultsFeedback3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[270px]" data-name="ResultsFeedback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white col-[2] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
        <ResultsFeedback3 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d="M21 1L12.5 9.5L7.5 4.5L1 11" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M1 1H7V7" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Difficulty</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Medium</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[48px] relative shrink-0 w-[64.82px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function ResultsFeedback4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[270px]" data-name="ResultsFeedback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white col-[3] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
        <ResultsFeedback4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[98px] left-[16px] top-[204px] w-[992px]" data-name="Container">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_13_1423)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_13_1423">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <Icon4 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#0a0a0a] text-[16px] top-[1.5px] tracking-[-0.3125px]">What You Did Well</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Keep doing these things in your real hearing</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[74px] left-0 pt-[24px] px-[24px] top-0 w-[990px]" data-name="CardHeader">
      <CardTitle />
      <CardDescription />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-[177px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Clear Communication</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[88px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">High Impact</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Badge />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">You explained your case in plain language and stayed focused on the key facts.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f0fdf4] h-[93px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container21 />
        <Paragraph />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[243.25px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Strong Evidence Presentation</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[88px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">High Impact</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7bf1a8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Badge1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">You referenced specific documents and photos at the right moments.</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f0fdf4] h-[93px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container23 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[132.633px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Respectful Tone</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f1f5f9] h-[22px] relative rounded-[8px] shrink-0 w-[107.211px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">Medium Impact</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Badge2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Your responses were professional and appropriate for court.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f0fdf4] h-[93px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container25 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function ResultsFeedback5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[311px] items-start left-[24px] top-[98px] w-[942px]" data-name="ResultsFeedback">
      <Container20 />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[435px] left-[16px] rounded-[14px] top-[334px] w-[992px]" data-name="Card">
      <CardHeader />
      <ResultsFeedback5 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p270c5f00} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <Icon5 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#0a0a0a] text-[16px] top-[1.5px] tracking-[-0.3125px]">Areas to Work On</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Focus on these before your hearing</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[74px] left-0 pt-[24px] px-[24px] top-0 w-[990px]" data-name="CardHeader">
      <CardTitle1 />
      <CardDescription1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[230.141px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Be More Specific with Dates</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#fef3c6] h-[22px] relative rounded-[8px] shrink-0 w-[90.266px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#973c00] text-[12px]">High Priority</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd230] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Badge3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">The judge asked about dates several times. Practice remembering key dates in your case.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">💡 Suggestion:</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Write down important dates before court: move-in, move-out, when you sent letters, etc.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white h-[78px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#fffbeb] h-[183px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container27 />
        <Paragraph3 />
        <Container28 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[257.172px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Anticipate Follow-up Questions</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#f1f5f9] h-[22px] relative rounded-[8px] shrink-0 w-[109.477px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">Medium Priority</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Badge4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">{`When you mentioned 'normal wear and tear,' the judge needed clarification.`}</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">💡 Suggestion:</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Prepare specific examples of what you mean by general terms.</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[78px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#fffbeb] h-[183px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container30 />
        <Paragraph6 />
        <Container31 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[224.602px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Reference Your Lease More</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#f1f5f9] h-[22px] relative rounded-[8px] shrink-0 w-[109.477px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">Medium Priority</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[27px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Badge5 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Your lease agreement is strong evidence. Mention specific sections that support your case.</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">💡 Suggestion:</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Bring a highlighted copy of your lease to court.</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[78px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#fffbeb] h-[183px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container33 />
        <Paragraph9 />
        <Container34 />
      </div>
    </div>
  );
}

function ResultsFeedback6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[581px] items-start left-[24px] top-[98px] w-[942px]" data-name="ResultsFeedback">
      <Container26 />
      <Container29 />
      <Container32 />
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[705px] left-[16px] rounded-[14px] top-[793px] w-[992px]" data-name="Card">
      <CardHeader1 />
      <ResultsFeedback6 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Your Next Steps</p>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Recommended actions before your court date</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-0 pt-[24px] px-[24px] top-0 w-[990px]" data-name="CardHeader">
      <CardTitle2 />
      <CardDescription2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-0 rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#155dfc] text-[16px] tracking-[-0.3125px]">1</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[24px] left-[36px] top-0 w-[906px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Review the dates in your case and commit them to memory</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Paragraph12 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-0 rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#155dfc] text-[16px] tracking-[-0.3125px]">2</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[24px] left-[36px] top-0 w-[906px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Practice one more time at a harder difficulty level</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Paragraph13 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-0 rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#155dfc] text-[16px] tracking-[-0.3125px]">3</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[24px] left-[36px] top-0 w-[906px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Prepare a simple timeline or outline to bring to court</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Paragraph14 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-0 rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#155dfc] text-[16px] tracking-[-0.3125px]">4</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[24px] left-[36px] top-0 w-[906px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Review your documents and highlight key sections</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Paragraph15 />
    </div>
  );
}

function ResultsFeedback7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[24px] top-[102px] w-[942px]" data-name="ResultsFeedback">
      <Container35 />
      <Container37 />
      <Container39 />
      <Container41 />
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[260px] left-[16px] rounded-[14px] top-[1522px] w-[992px]" data-name="Card">
      <CardHeader2 />
      <ResultsFeedback7 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[85.39px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14390900} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white col-[1] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[172.89px] not-italic text-[#0a0a0a] text-[14px] text-center top-[8.5px] tracking-[-0.1504px]">Back to Dashboard</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[100.35px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] col-[3] relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[172.85px] not-italic text-[14px] text-center text-white top-[8.5px] tracking-[-0.1504px]">Practice Again</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] left-[16px] top-[1814px] w-[992px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="-translate-x-1/2 absolute h-[2039px] left-1/2 top-[113px] w-[1024px]" data-name="Main Content">
      <Card />
      <Container7 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Container43 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon8 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Back to case dashboard</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Practice Session Results</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[107.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[-17.09px] not-italic text-[#62748e] text-[16px] top-0 tracking-[-0.3125px] w-[125px] whitespace-pre-wrap">100% Complete</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="bg-[rgba(3,2,19,0.2)] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Primitive.div" />;
}

function PrimitiveDiv2() {
  return <div className="absolute bg-black h-[8px] left-0 rounded-[16777200px] top-0 w-[1320px]" data-name="Primitive.div" />;
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <PrimitiveDiv1 />
      <PrimitiveDiv2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Container46 />
        <Frame />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[1344px]" data-name="Container">
      <Button2 />
      <Container45 />
    </div>
  );
}

function GlobalHeader() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[120px] items-start justify-center left-0 px-[48px] top-0 w-[1440px]" data-name="Global header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container44 />
    </div>
  );
}

function ResultsFeedback() {
  return (
    <div className="bg-[#f8fafc] h-[2152px] relative shrink-0 w-full" data-name="ResultsFeedback">
      <MainContent />
      <GlobalHeader />
    </div>
  );
}

export default function MootCourtSimulationInterface() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Moot Court Simulation Interface">
      <ResultsFeedback />
    </div>
  );
}