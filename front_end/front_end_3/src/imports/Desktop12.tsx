import svgPaths from "./svg-334pqzzx45";

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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[108px] whitespace-pre-wrap">20% Complete</p>
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

function Container4() {
  return (
    <div className="h-[1538px] overflow-clip relative shrink-0 w-[896px]" data-name="Container">
      <Group />
      <Badge1 />
      <Card1 />
      <Card2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[326.35px] not-italic text-[16px] text-black top-[324px] tracking-[-0.3125px]">Both parties approach the bench.</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[22px] left-0 overflow-clip rounded-[8px] top-[3px] w-[122px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[3px]">Present your case</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-[36.5px] w-[770px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">{`Please state your name and explain why you're here today.`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[68.5px] w-[770px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#45556c] text-[14px] top-0 tracking-[-0.1504px]">The judge wants to understand the basics of your case right away.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[89.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Badge2 />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[89.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pdf995c0} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 15H12.5" id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 18.3333H11.6667" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[137.531px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Tips for answering:</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[800px]" data-name="Container">
      <Icon1 />
      <Heading1 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.5px] tracking-[-0.1504px]">• Speak clearly and confidently</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.5px] tracking-[-0.1504px]">• State your name first</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`• Briefly explain what you're claiming and why`}</p>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[45px] top-[53px] w-[772px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#eff6ff] h-[146px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container10 />
      <List />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center not-italic relative shrink-0 text-[16px] tracking-[-0.3125px] w-[459px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a0a0a]">Choose Your Evidence</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#45556c]">6 of 6 items selected</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d={svgPaths.p39be50} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#2c2c2c] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <Check />
    </div>
  );
}

function CheckboxAndLabel() {
  return (
    <div className="content-stretch flex gap-[12px] items-center min-w-[120px] relative shrink-0" data-name="Checkbox and Label">
      <Checkbox />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px not-italic relative text-[#1e1e1e] text-[16px] whitespace-pre-wrap">Select all</p>
    </div>
  );
}

function CheckboxField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Checkbox Field">
      <CheckboxAndLabel />
    </div>
  );
}

function SimulationSetup1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="SimulationSetup">
      <Frame1 />
      <CheckboxField />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon2 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#030213] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function SimulationSetup2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[114.961px]" data-name="SimulationSetup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Lease Agreement</p>
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SimulationSetup2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_441)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_441">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[5px] py-px relative rounded-[inherit] size-full">
        <Icon3 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton />
          <PrimitiveLabel />
          <Badge3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon4 />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#030213] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function SimulationSetup3() {
  return (
    <div className="h-[14px] relative shrink-0 w-[113.219px]" data-name="SimulationSetup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Move-out photos</p>
      </div>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SimulationSetup3 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_436)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #AC7F5E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 4.5L4.5 7.5" id="Vector_2" stroke="var(--stroke-0, #AC7F5E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 4.5L7.5 7.5" id="Vector_3" stroke="var(--stroke-0, #AC7F5E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_436">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#fef9c2] h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center overflow-clip px-[5px] py-px relative rounded-[inherit]">
        <Icon5 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ac7f5e] text-[12px]">Invalid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ac7f5e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton1 />
          <PrimitiveLabel1 />
          <Badge4 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon6 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#030213] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <PrimitiveSpan2 />
      </div>
    </div>
  );
}

function SimulationSetup4() {
  return (
    <div className="h-[14px] relative shrink-0 w-[127.664px]" data-name="SimulationSetup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Email from landlord</p>
      </div>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SimulationSetup4 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_441)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_441">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[5px] py-px relative rounded-[inherit] size-full">
        <Icon7 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton2 />
          <PrimitiveLabel2 />
          <Badge5 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon8 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#030213] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <PrimitiveSpan3 />
      </div>
    </div>
  );
}

function SimulationSetup5() {
  return (
    <div className="h-[14px] relative shrink-0 w-[127.664px]" data-name="SimulationSetup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Text messages</p>
      </div>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SimulationSetup5 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_441)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_441">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[5px] py-px relative rounded-[inherit] size-full">
        <Icon9 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton3 />
          <PrimitiveLabel3 />
          <Badge6 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon10 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[#030213] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <PrimitiveSpan4 />
      </div>
    </div>
  );
}

function SimulationSetup6() {
  return (
    <div className="h-[14px] relative shrink-0 w-[215.367px]" data-name="SimulationSetup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Bank statement showing deposit</p>
      </div>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SimulationSetup6 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_441)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_441">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[5px] py-px relative rounded-[inherit] size-full">
        <Icon11 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton4 />
          <PrimitiveLabel4 />
          <Badge7 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon12 />
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[#030213] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <PrimitiveSpan5 />
      </div>
    </div>
  );
}

function SimulationSetup7() {
  return (
    <div className="h-[14px] relative shrink-0 w-[215.367px]" data-name="SimulationSetup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#0f172b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Move-in inspection checklist</p>
      </div>
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SimulationSetup7 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_441)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_441">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[5px] py-px relative rounded-[inherit] size-full">
        <Icon13 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton5 />
          <PrimitiveLabel5 />
          <Badge8 />
        </div>
      </div>
    </div>
  );
}

function SimulationSetup() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[336px] items-start relative shrink-0 w-full" data-name="SimulationSetup">
      <SimulationSetup1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#717182] text-[16px] tracking-[-0.3125px]">Select which evidence you want to practice presenting</p>
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[288px] relative shrink-0 w-[832px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <SimulationSetup />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[325px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.5px] tracking-[-0.1504px]">Your answer:</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f3f3f5] h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.1504px] w-[790px] whitespace-pre-wrap">
            Your Honor, I’m seeking the return of my $2,000 security deposit.
            <br aria-hidden="true" />
            {` I moved out on December 1. I cleaned the apartment thoroughly, as my photos show.`}
            <br aria-hidden="true" />
            {` The landlord kept the entire deposit claiming ‘excessive cleaning’ and ‘wall damage,’ but these damages were normal wear and tear.”`}
          </p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[92px] items-start left-0 top-0 w-[834px]" data-name="Label">
      <Text2 />
      <Textarea />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[36px] items-center justify-center left-[710.33px] opacity-50 px-[16px] py-[8px] rounded-[8px] top-[116.5px] w-[123.672px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px]">Send</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[24px] h-[851px] items-start left-[270px] pb-px pt-[33px] px-[33px] rounded-[14px] top-[calc(50%+0.5px)] w-[900px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container7 />
      <Container9 />
      <Card3 />
      <Container17 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop - 12">
      <GlobalHeader />
      <Container4 />
      <div className="absolute bg-[rgba(0,0,0,0.29)] h-[1735px] left-0 top-[-45px] w-[1434px]" />
      <Container6 />
    </div>
  );
}