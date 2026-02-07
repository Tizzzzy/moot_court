import svgPaths from "./svg-3ajn0ydyp6";

function Badge() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[22px] left-0 rounded-[8px] top-0 w-[53.836px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">Judge</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MootCourtSimulation() {
  return (
    <div className="h-[48px] relative shrink-0 w-[622px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[619px] whitespace-pre-wrap">
          This is a small claims matter. Each side will have the chance to present their case.
          <br aria-hidden="true" />
          {` Mr/Ms. Renter, you will present first, followed by Mr/Ms. Landlord.`}
          <br aria-hidden="true" />
          {` I may interrupt you with questions. Please focus on facts.`}
        </p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[106px] items-start left-0 pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[30px] w-[672px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[120px] left-[16px] top-[369px] w-[672px]" data-name="Container">
      <Badge />
      <Card />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[16px] top-[369px]">
      <Container />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[22px] left-0 rounded-[8px] top-0 w-[53.836px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">Judge</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MootCourtSimulation1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[622px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[619px] whitespace-pre-wrap">“Plaintiff, did you fill the nail holes before moving out?”</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-0 pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[30px] w-[672px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[120px] left-[16px] top-[1338px] w-[672px]" data-name="Container">
      <Badge1 />
      <Card1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[16px] top-[1338px]">
      <Container1 />
    </div>
  );
}

function MootCourtSimulation2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[622px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[619px] whitespace-pre-wrap">
          Case: J. Renter vs. L. Landlord
          <br aria-hidden="true" />
          Claim: Plaintiff seeks return of $2,000 security deposit after moving out.
        </p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-[16px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-0 w-[880px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation2 />
    </div>
  );
}

function MootCourtSimulation3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[622px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[619px] whitespace-pre-wrap">“Case number SC‑12345: J. Renter versus L. Landlord. Please come forward.”</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-[16px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[159px] w-[880px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation3 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[505.09px] rounded-[8px] top-0 w-[39.414px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">You</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MootCourtSimulation4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[494.5px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[0.5px] not-italic text-[14px] text-white top-0 tracking-[-0.1504px] w-[503px] whitespace-pre-wrap">
          Your Honor, I’m seeking the return of my $2,000 security deposit.
          <br aria-hidden="true" />
          {` I moved out on December 1. I cleaned the apartment thoroughly, as my photos show.`}
          <br aria-hidden="true" />
          {` The landlord kept the entire deposit claiming ‘excessive cleaning’ and ‘wall damage,’ but these damages were normal wear and tear.`}
        </p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[134px] items-start left-[0.5px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[30px] w-[544px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[96px] left-[335.5px] top-[582px] w-[544.5px]" data-name="Container">
      <Badge2 />
      <Card4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pdf995c0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 15H12.5" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 18.3333H11.6667" id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d542b]">Feedback:</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#016630] w-[min-content] whitespace-pre-wrap">You clearly stated your name and the nature of your case right at the beginning, which makes the purpose of the document immediately clear and easy to understand.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d542b]">Areas for Improvement</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#016630] w-[min-content] whitespace-pre-wrap">You clearly stated your name and the nature of your case right at the beginning, which makes the purpose of the document immediately clear and easy to understand.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[503px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start not-italic relative text-[16px] tracking-[-0.3125px] w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Frame />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col h-[210px] items-start left-[323.5px] p-[12px] rounded-[10px] top-[758px] w-[557px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container4 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[22px] left-0 rounded-[8px] top-0 w-[78.234px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px]">Defendant</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffa2a2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MootCourtSimulation5() {
  return (
    <div className="h-[72px] relative shrink-0 w-[622px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[612px] whitespace-pre-wrap">Your Honor, I withheld the deposit because the tenant left the unit dirty and there were holes in the wall larger than normal wear.</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-[#fef2f2] content-stretch flex flex-col h-[89px] items-start left-0 pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[30px] w-[672px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[144px] left-0 top-[1074px] w-[672px]" data-name="Container">
      <Badge3 />
      <Card5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
      <Group2 />
      <Card2 />
      <Card3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[326.36px] not-italic text-[16px] text-black top-[284px] tracking-[-0.3125px]">Both parties approach the bench.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-179px)] not-italic text-[#45556c] text-[16px] top-[524px] tracking-[-0.3125px]">Plaintiff steps forward. Plaintiff Present your case</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-208px)] not-italic text-[#45556c] text-[16px] top-[1016px] tracking-[-0.3125px]">Defendant steps forward. Defendant Presents Their Case</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-99px)] not-italic text-[#45556c] text-[16px] top-[1266px] tracking-[-0.3125px]">Judge’s Questioning Round</p>
      <Container2 />
      <Container3 />
      <Container7 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Group1 />
    </div>
  );
}