import svgPaths from "./svg-4mumvukvlz";

function Dismiss() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dismiss">
          <path d={svgPaths.p2f52be80} fill="var(--fill-0, #242424)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[8px] relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.3125px]">Case detail</p>
        <Dismiss />
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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[846px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function CaseIntake1() {
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
      <CaseIntake1 />
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

function Icon() {
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
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[846px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function CaseIntake2() {
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
      <CaseIntake2 />
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[415px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function CaseIntake3() {
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
      <CaseIntake3 />
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

function Container3() {
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
      <Container2 />
      <Container3 />
    </div>
  );
}

function CaseIntake() {
  return (
    <div className="relative shrink-0" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative">
        <Container />
        <Container1 />
        <Frame />
      </div>
    </div>
  );
}

function CaseIntake5() {
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
      <CaseIntake5 />
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

function Container4() {
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
      <Textarea />
    </div>
  );
}

function CaseIntake4() {
  return (
    <div className="relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function CaseIntake7() {
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
      <CaseIntake7 />
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

function Container6() {
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

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Textarea1 />
    </div>
  );
}

function CaseIntake6() {
  return (
    <div className="relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function CaseIntake9() {
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
      <CaseIntake9 />
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

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel8 />
      <Textarea2 />
    </div>
  );
}

function CaseIntake10() {
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
      <CaseIntake10 />
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

function Text() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[6px] w-[9.766px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] top-[-0.5px] tracking-[-0.3125px]">$</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input5 />
      <Text />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel9 />
      <Container10 />
    </div>
  );
}

function CaseIntake8() {
  return (
    <div className="relative shrink-0 w-[846px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-[120px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[29px] py-[8px] relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px]">Save</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative w-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[25px] relative rounded-[14px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <CaseIntake />
      <CaseIntake4 />
      <CaseIntake6 />
      <CaseIntake8 />
      <Container11 />
    </div>
  );
}