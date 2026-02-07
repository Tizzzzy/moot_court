import svgPaths from "./svg-jaqtqh9gg5";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">Case Dashboard</p>
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
    <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="Global header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[48px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#2b7fff] h-[20px] left-0 overflow-clip rounded-[8px] top-[3.5px] w-[102.359px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-white top-[3px]">Recommended</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[30px] left-0 top-[35.5px] w-[610.578px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px]">Practice Your Hearing</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[73.5px] w-[610.578px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#dbeafe] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Talk through your case with an AI judge in a practice session</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[97.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Badge />
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[110.75px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[138.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[57.5px] not-italic text-[#155dfc] text-[14px] text-center top-[8.5px] tracking-[-0.1504px]">Start Practice</p>
        <Icon />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[765.328px]" data-name="Dashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container4 />
        <Button />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#155dfc] h-[145.5px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start pl-[24px] py-[24px] relative size-full">
        <Dashboard />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center justify-center px-[17px] py-[9px] relative rounded-[8px] shrink-0 w-[82.898px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">View more</p>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="CardTitle">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.3125px]">Your Case</p>
      <Button1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Case Number</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">2025-SC-1234</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[140px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Amount Claimed</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">$2,400</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[140px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Case Type</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Security Deposit Dispute</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Defendant</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Paragraph8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px]">Defendant name</p>
    </div>
  );
}

function Dashboard1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[52px] items-center relative shrink-0 w-[763px]" data-name="Dashboard">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[127.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Your hearing date</p>
      </div>
    </div>
  );
}

function Dashboard2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Dashboard">
      <Icon1 />
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[56px] items-start min-h-px min-w-px relative">
      <Dashboard2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px]">{`Friday, February 13, 2026 `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f4f9ff] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-start p-[12px] relative w-full">
        <Frame1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] tracking-[-0.3125px]">34 days away</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <CardTitle />
        <Dashboard1 />
        <Frame2 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24.003">
        <g id="Group 3">
          <path d={svgPaths.p2b6da380} fill="var(--fill-0, #0088FF)" id="Vector" />
          <path d={svgPaths.p11f979c0} fill="var(--fill-0, #0088FF)" id="Vector_2" />
          <path d={svgPaths.pf423ff0} fill="var(--fill-0, #0088FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CardTitle">
      <Group />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.3125px]">AI recommended evidence</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="h-[24px] relative shrink-0 w-[763.328px]" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717182] text-[14px] top-[-0.5px] tracking-[-0.3125px]">Upload your documents and get AI-powered feedback</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <CardTitle1 />
        <CardDescription />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[362.469px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">0 of 4 categories have evidence • 0 file uploaded</p>
    </div>
  );
}

function Container9() {
  return <div className="bg-[#030213] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="bg-[rgba(3,2,19,0.2)] content-stretch flex flex-col h-[8px] items-start overflow-clip pl-[-763.328px] pr-[763.328px] relative rounded-[16777200px] shrink-0 w-[763.328px]" data-name="Primitive.div">
      <Container9 />
    </div>
  );
}

function Dashboard3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Dashboard">
      <Text1 />
      <PrimitiveDiv />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[611px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px]">{`AI recommended evidence title `}</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[99.07px]" data-name="SlotClone">
      <Icon2 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#0a0a0a] text-[14px] top-[5.5px] tracking-[-0.1504px]">Upload</p>
    </div>
  );
}

function FileUpload() {
  return <div className="absolute left-[-888.26px] size-0 top-[-548px]" data-name="File Upload" />;
}

function Label() {
  return (
    <div className="h-[32px] relative shrink-0 w-[99.07px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SlotClone />
        <FileUpload />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container12 />
          <Label />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#62748e] text-[16px] tracking-[-0.3125px] whitespace-pre-wrap">We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner’s established physical presence and ongoing professional activity in the United States.</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[16px] relative rounded-[16px] shrink-0 w-[763px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container11 />
      <Frame3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[611px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px]">{`AI recommended evidence title `}</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[99.07px]" data-name="SlotClone">
      <Icon3 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#0a0a0a] text-[14px] top-[5.5px] tracking-[-0.1504px]">Upload</p>
    </div>
  );
}

function FileUpload1() {
  return <div className="absolute left-[-888.26px] size-0 top-[-548px]" data-name="File Upload" />;
}

function Label1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[99.07px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SlotClone1 />
        <FileUpload1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container15 />
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#62748e] text-[16px] tracking-[-0.3125px] whitespace-pre-wrap">We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner’s established physical presence and ongoing professional activity in the United States.</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[16px] relative rounded-[16px] shrink-0 w-[763px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container14 />
      <Frame4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[611px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px]">{`AI recommended evidence title `}</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[99.07px]" data-name="SlotClone">
      <Icon4 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#0a0a0a] text-[14px] top-[5.5px] tracking-[-0.1504px]">Upload</p>
    </div>
  );
}

function FileUpload2() {
  return <div className="absolute left-[-888.26px] size-0 top-[-548px]" data-name="File Upload" />;
}

function Label2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[99.07px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SlotClone2 />
        <FileUpload2 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container18 />
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#62748e] text-[16px] tracking-[-0.3125px] whitespace-pre-wrap">We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner’s established physical presence and ongoing professional activity in the United States.</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[16px] relative rounded-[16px] shrink-0 w-[763px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container17 />
      <Frame5 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[611px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px]">AI recommended evidence title</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[99.07px]" data-name="SlotClone">
      <Icon5 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#0a0a0a] text-[14px] top-[5.5px] tracking-[-0.1504px]">Upload</p>
    </div>
  );
}

function FileUpload3() {
  return <div className="absolute left-[-888.26px] size-0 top-[-548px]" data-name="File Upload" />;
}

function Label3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[99.07px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SlotClone3 />
        <FileUpload3 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container21 />
          <Label3 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#62748e] text-[16px] tracking-[-0.3125px] whitespace-pre-wrap">We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner’s established physical presence and ongoing professional activity in the United States.</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[16px] relative rounded-[16px] shrink-0 w-[763px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container20 />
      <Frame6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[611px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px]">Other evidence</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[99.07px]" data-name="SlotClone">
      <Icon6 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#0a0a0a] text-[14px] top-[5.5px] tracking-[-0.1504px]">Upload</p>
    </div>
  );
}

function FileUpload4() {
  return <div className="absolute left-[-888.26px] size-0 top-[-548px]" data-name="File Upload" />;
}

function Label4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[99.07px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SlotClone4 />
        <FileUpload4 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container24 />
          <Label4 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#62748e] text-[16px] tracking-[-0.3125px] whitespace-pre-wrap">Please upload any evidence you believe could be helpful. This may include documents, images, or any other relevant materials that support your case.</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[16px] relative rounded-[16px] shrink-0 w-[763px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container23 />
      <Frame7 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Dashboard3 />
        <Container10 />
        <Container13 />
        <Container16 />
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative w-full">
          <CardHeader />
          <CardContent />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[813px]" data-name="Container">
      <Card />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[#1e1e1e] text-[36px] text-center tracking-[0.3691px]">Hi, Mia</p>
      <Card1 />
      <Card2 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[344.664px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Your Preparation Journey</p>
      </div>
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#e2e8f0] h-[116px] left-[16px] top-[40px] w-px" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_255)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_17_255">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[122.086px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Enter court form</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[48px] left-0 top-[28px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717182] text-[14px] top-[-0.5px] tracking-[-0.3125px] w-[256px] whitespace-pre-wrap">Please provide your basic information so we can understand your situation better.</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_17_274)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_17_274">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[74.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-px">About 15 min</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[16px] items-center left-0 top-[84px] w-[296.664px]" data-name="Container">
      <Icon8 />
      <Text2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] h-[108px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph9 />
        <Paragraph10 />
        <Container30 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[108px] items-start left-0 top-0 w-[344.664px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-[#e2e8f0] h-[160px] left-[16px] top-[40px] w-px" data-name="Container" />;
}

function Container35() {
  return <div className="bg-[#155dfc] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Container34() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[121.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Upload evidence</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#dbeafe] h-[22px] relative rounded-[8px] shrink-0 w-[83.32px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">In Progress</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-0 top-0 w-[296.664px]" data-name="Container">
      <Paragraph11 />
      <Badge1 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[48px] left-0 top-[28px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717182] text-[14px] top-[-0.5px] tracking-[-0.3125px] w-[225px] whitespace-pre-wrap">Upload your evidence and get AI-powered feedback</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_17_274)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_17_274">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76.148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-px">About 30 min</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[16px] items-center left-0 top-[84px] w-[296.664px]" data-name="Container">
      <Icon9 />
      <Text3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] h-[152px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container37 />
        <Paragraph12 />
        <Container38 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[152px] items-start left-0 top-0 w-[344.664px]" data-name="Container">
      <Container34 />
      <Container36 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[114px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-[#e2e8f0] h-[92px] left-[16px] top-[40px] w-px" data-name="Container" />;
}

function Container42() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[192.18px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Practice your hearing</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[24px] left-0 top-[28px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Rehearse in a simulated courtroom</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_17_274)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_17_274">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76.211px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-px">About 45 min</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[16px] items-center left-0 top-[60px] w-[296.664px]" data-name="Container">
      <Icon10 />
      <Text4 />
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph13 />
        <Paragraph14 />
        <Container44 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[84px] items-start left-0 top-0 w-[344.664px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[121.742px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Final Preparation</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[24px] left-0 top-[28px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Checklist and day-of guidelines</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_17_274)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_17_274">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[74.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-px">About 15 min</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[16px] items-center left-0 top-[60px] w-[296.664px]" data-name="Container">
      <Icon11 />
      <Text5 />
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph15 />
        <Paragraph16 />
        <Container48 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[16px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Dashboard4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[344.664px]" data-name="Dashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container25 />
        <Container31 />
        <Container39 />
        <Container45 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] h-[569px] items-start pl-[25px] pr-px py-[25px] relative rounded-[14px] shrink-0 w-[395px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle2 />
      <Dashboard4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <Container3 />
      <Card3 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop - 6">
      <GlobalHeader />
      <Frame />
    </div>
  );
}