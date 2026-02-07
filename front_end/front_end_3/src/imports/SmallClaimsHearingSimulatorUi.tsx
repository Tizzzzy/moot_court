import svgPaths from "./svg-p6rfqra4me";

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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">{`Check in & case call`}</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[107.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[108px] whitespace-pre-wrap">0% Complete</p>
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
  return <div className="bg-[#030213] h-[8px] shrink-0 w-[810px]" data-name="Container" />;
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

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#1e293b] text-[24px] top-0 tracking-[0.0703px]">Case Overview</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[105.703px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px] tracking-[-0.3125px]">Case Number:</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Text2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[105.7px] not-italic text-[#475569] text-[16px] top-[-0.5px] tracking-[-0.3125px]">SC-12345</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[61.656px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px] tracking-[-0.3125px]">Plaintiff:</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Text3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[61.66px] not-italic text-[#475569] text-[16px] top-[-0.5px] tracking-[-0.3125px]">J. Renter</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[82.211px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px] tracking-[-0.3125px]">Defendant:</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Text4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[82.21px] not-italic text-[#475569] text-[16px] top-[-0.5px] tracking-[-0.3125px]">L. Landlord</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[46.453px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#475569] text-[16px] tracking-[-0.3125px]">Claim:</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Text5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[46.45px] not-italic text-[#475569] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Plaintiff seeks return of $2,000 security deposit after moving out</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[234px] items-start left-0 pb-px pt-[33px] px-[33px] rounded-[16px] top-[-36px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Heading />
      <Container6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#1e293b] text-[24px] top-0 tracking-[0.0703px]">Hearing Process Overview</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#334155] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">1</p>
      </div>
    </div>
  );
}

function Container12() {
  return <div className="bg-[#e2e8f0] h-[48px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="h-[96px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e293b] text-[18px] top-0 tracking-[-0.4395px]">{`Check-in & Case Call`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[283.742px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#94a3b8] text-[14px] top-[0.5px] tracking-[-0.1504px]">.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[8px] relative size-full">
        <Heading2 />
        <Container14 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#334155] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">2</p>
      </div>
    </div>
  );
}

function Container18() {
  return <div className="bg-[#e2e8f0] h-[48px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="h-[96px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e293b] text-[18px] top-0 tracking-[-0.4395px]">Judge Introduction</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[283.742px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#94a3b8] text-[14px] top-[0.5px] tracking-[-0.1504px]">...</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[8px] relative size-full">
        <Heading3 />
        <Container20 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#334155] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">3</p>
      </div>
    </div>
  );
}

function Container24() {
  return <div className="bg-[#e2e8f0] h-[48px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container22() {
  return (
    <div className="h-[96px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e293b] text-[18px] top-0 tracking-[-0.4395px]">Plaintiff Presents Case</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#334155] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">4</p>
      </div>
    </div>
  );
}

function Container29() {
  return <div className="bg-[#e2e8f0] h-[48px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container27() {
  return (
    <div className="h-[96px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e293b] text-[18px] top-0 tracking-[-0.4395px]">Defendant Presents Case</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container30 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#334155] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">5</p>
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#e2e8f0] h-[48px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container32() {
  return (
    <div className="h-[96px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e293b] text-[18px] top-0 tracking-[-0.4395px]">{`Judge's Questions`}</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Heading6 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container35 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#334155] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">6</p>
      </div>
    </div>
  );
}

function Container39() {
  return <div className="bg-[#e2e8f0] h-[48px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container37() {
  return (
    <div className="h-[96px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e293b] text-[18px] top-0 tracking-[-0.4395px]">Closing Statements</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container40 />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#334155] flex-[1_0_0] min-h-px min-w-px relative rounded-[16777200px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">7</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e293b] text-[18px] top-0 tracking-[-0.4395px]">Judgment</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Heading8 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[16px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container44 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[780px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container15 />
      <Container21 />
      <Container26 />
      <Container31 />
      <Container36 />
      <Container41 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[888px] items-start left-[0.5px] pb-px pt-[33px] px-[33px] rounded-[16px] top-[230px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container8 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[315.22px] rounded-[14px] top-[1466px] w-[265.555px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[133.5px] not-italic text-[18px] text-center text-white top-[16px] tracking-[-0.4395px]">Begin Hearing Simulation</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[1118px] relative shrink-0 w-[896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
        <Container7 />
        <Button1 />
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="col-[1] not-italic relative row-[1] self-stretch shrink-0 text-[16px] tracking-[-0.3125px]" data-name="CardTitle">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#0a0a0a] top-[-0.5px]">Difficulty Level</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] top-[20px]">{`How challenging should the judge's questions be?`}</p>
    </div>
  );
}

function CardDescription() {
  return <div className="col-[1] row-[2] self-stretch shrink-0" data-name="CardDescription" />;
}

function CardHeader() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[734px]" data-name="CardHeader">
      <CardTitle />
      <CardDescription />
    </div>
  );
}

function Container48() {
  return <div className="bg-[#2b7fff] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container47() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Container48 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[27px] relative shrink-0 w-[38.641px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Easy</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Heading9 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-0 tracking-[-0.3125px] w-[295px] whitespace-pre-wrap">Simple, clear questions. Good for first-time practice.</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#eff6ff] flex-[1_0_0] h-[125px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container46 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[27px] relative shrink-0 w-[40.016px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[0.5px] tracking-[-0.4395px]">Hard</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Heading10 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-1px] tracking-[-0.3125px] w-[307px] whitespace-pre-wrap">Challenging questions to test your preparation.</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-white flex-[1_0_0] h-[125px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container50 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function SimulationSetup() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[125px] items-start left-[25px] top-[95px] w-[686px]" data-name="SimulationSetup">
      <Container45 />
      <Container49 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white h-[253px] left-[322px] rounded-[14px] top-[1195px] w-[897px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CardHeader />
        <SimulationSetup />
      </div>
    </div>
  );
}

function PY() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1602px] items-center py-[48px] relative shrink-0 w-full" data-name="pY">
      <Container4 />
      <Card />
    </div>
  );
}

export default function SmallClaimsHearingSimulatorUi() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Small Claims Hearing Simulator UI">
      <GlobalHeader />
      <PY />
    </div>
  );
}