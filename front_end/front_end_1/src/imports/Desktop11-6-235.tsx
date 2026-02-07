import svgPaths from "./svg-gtt481l9gz";

function Icon() {
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

function Button() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Back to case dashboard</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Judge’s Opening Statement</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[107.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[108px] whitespace-pre-wrap">10% Complete</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#030213] h-[8px] shrink-0 w-[944px]" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="bg-[rgba(3,2,19,0.2)] content-stretch flex flex-col h-[8px] items-start overflow-clip pl-[-793.6px] pr-[793.6px] relative rounded-[16777200px] shrink-0 w-full" data-name="Primitive.div">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Container2 />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[1344px]" data-name="Container">
      <Button />
      <Container1 />
    </div>
  );
}

function GlobalHeader() {
  return (
    <div className="bg-white h-[120px] relative shrink-0 w-full" data-name="Global header">
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

function Container5() {
  return (
    <div className="absolute h-[120px] left-[16px] top-[409px] w-[672px]" data-name="Container">
      <Badge />
      <Card />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[16px] top-[409px]">
      <Container5 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[22px] left-[16px] rounded-[8px] top-[171px] w-[86px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">Court clerk</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MootCourtSimulation1() {
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

function Card1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-[16px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[40px] w-[880px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation1 />
    </div>
  );
}

function MootCourtSimulation2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[622px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[619px] whitespace-pre-wrap">“Case number SC‑12345: J. Renter versus L. Landlord. Please come forward.”</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-[16px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[199px] w-[880px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0f6eff] content-stretch flex h-[36px] items-center justify-center left-[370px] px-[16px] py-[8px] rounded-[8px] top-[599px] w-[140px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px]">{`Present my case `}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[1538px] overflow-clip relative shrink-0 w-[896px]" data-name="Container">
      <Group />
      <Badge1 />
      <Card1 />
      <Card2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[326.35px] not-italic text-[16px] text-black top-[324px] tracking-[-0.3125px]">Both parties approach the bench.</p>
      <Button1 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop - 11">
      <GlobalHeader />
      <Container4 />
    </div>
  );
}