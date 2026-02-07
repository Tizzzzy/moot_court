import svgPaths from "./svg-7c37ug1uh2";

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

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Button">
      <Icon />
    </div>
  );
}

function SimulationSetup1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="SimulationSetup">
      <Frame1 />
      <Button />
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

function Badge() {
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

function Container() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton />
          <PrimitiveLabel />
          <Badge />
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

function Badge1() {
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

function Container1() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton1 />
          <PrimitiveLabel1 />
          <Badge1 />
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

function Badge2() {
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

function Container2() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton2 />
          <PrimitiveLabel2 />
          <Badge2 />
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

function Badge3() {
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

function Container3() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton3 />
          <PrimitiveLabel3 />
          <Badge3 />
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

function Badge4() {
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

function Container4() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton4 />
          <PrimitiveLabel4 />
          <Badge4 />
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

function Badge5() {
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

function Container5() {
  return (
    <div className="bg-[#eff6ff] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <PrimitiveButton5 />
          <PrimitiveLabel5 />
          <Badge5 />
        </div>
      </div>
    </div>
  );
}

function SimulationSetup() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[336px] items-end relative shrink-0 w-full" data-name="SimulationSetup">
      <SimulationSetup1 />
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[396px] relative shrink-0 w-[832px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <SimulationSetup />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 2.5V12.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p320a7e80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3053b100} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[286.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Upload additional evidence (PDF, JPG, PNG)</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[18px] pr-[2px] py-[2px] relative size-full">
          <Icon13 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[73px] items-start pt-[17px] relative shrink-0 w-[783px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Label />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Container6 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] content-stretch flex items-center justify-center px-[23px] py-[9px] relative rounded-[10px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px]">Send</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] relative">
        <Button1 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-end overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent />
        <Frame2 />
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}