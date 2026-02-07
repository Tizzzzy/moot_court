import svgPaths from "./svg-y1eltl7p3s";

function Badge() {
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

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[89.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Badge />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[89.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Icon() {
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

function Container4() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[800px]" data-name="Container">
      <Icon />
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

function Container3() {
  return (
    <div className="bg-[#eff6ff] h-[146px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container4 />
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

function Icon1() {
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
      <Icon1 />
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

function Icon2() {
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

function Badge1() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[5px] py-px relative rounded-[inherit] size-full">
        <Icon2 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton />
          <PrimitiveLabel />
          <Badge1 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
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
      <Icon3 />
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

function Icon4() {
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

function Badge2() {
  return (
    <div className="bg-[#fef9c2] h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center overflow-clip px-[5px] py-px relative rounded-[inherit]">
        <Icon4 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ac7f5e] text-[12px]">Invalid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ac7f5e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton1 />
          <PrimitiveLabel1 />
          <Badge2 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
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
      <Icon5 />
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

function Icon6() {
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
        <Icon6 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton2 />
          <PrimitiveLabel2 />
          <Badge3 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
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
      <Icon7 />
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

function Icon8() {
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

function Badge4() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[8px] shrink-0 w-[62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[5px] py-px relative rounded-[inherit] size-full">
        <Icon8 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton3 />
          <PrimitiveLabel3 />
          <Badge4 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
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
      <Icon9 />
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

function Icon10() {
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
        <Icon10 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton4 />
          <PrimitiveLabel4 />
          <Badge5 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
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
      <Icon11 />
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

function Icon12() {
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
        <Icon12 />
        <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px]">Valid</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton5 />
          <PrimitiveLabel5 />
          <Badge6 />
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
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
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

function Card() {
  return (
    <div className="bg-white h-[325px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Text() {
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
      <Text />
      <Textarea />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[36px] items-center justify-center left-[710.33px] opacity-50 px-[16px] py-[8px] rounded-[8px] top-[116.5px] w-[123.672px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px]">Send</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Button />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-px pt-[33px] px-[33px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container1 />
      <Container3 />
      <Card />
      <Container11 />
    </div>
  );
}