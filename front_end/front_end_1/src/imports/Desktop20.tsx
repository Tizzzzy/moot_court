import svgPaths from "./svg-b554r7xpaw";

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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Defendant Presents Their Case</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[107.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[108px] whitespace-pre-wrap">40% Complete</p>
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
  return <div className="bg-[#030213] h-[8px] shrink-0 w-[1153px]" data-name="Container" />;
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

function MootCourtSimulation3() {
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

function Card3() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[134px] items-start left-[0.5px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[30px] w-[544px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[96px] left-[335.5px] top-[622px] w-[544.5px]" data-name="Container">
      <Badge2 />
      <Card3 />
    </div>
  );
}

function Icon1() {
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

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d542b]">Feedback:</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#016630] w-[min-content] whitespace-pre-wrap">You clearly stated your name and the nature of your case right at the beginning, which makes the purpose of the document immediately clear and easy to understand.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d542b]">Areas for Improvement</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#016630] w-[min-content] whitespace-pre-wrap">You clearly stated your name and the nature of your case right at the beginning, which makes the purpose of the document immediately clear and easy to understand.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[503px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start not-italic relative text-[16px] tracking-[-0.3125px] w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Frame1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col h-[210px] items-start left-[323.5px] p-[12px] rounded-[10px] top-[798px] w-[557px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container8 />
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

function MootCourtSimulation4() {
  return (
    <div className="h-[72px] relative shrink-0 w-[622px]" data-name="MootCourtSimulation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[612px] whitespace-pre-wrap">Your Honor, I withheld the deposit because the tenant left the unit dirty and there were holes in the wall larger than normal wear.</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-[#fef2f2] content-stretch flex flex-col h-[89px] items-start left-0 pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[30px] w-[672px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MootCourtSimulation4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[144px] left-0 top-[1114px] w-[672px]" data-name="Container">
      <Badge3 />
      <Card4 />
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[55px] items-start left-[336px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[1306px] w-[100px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px] w-[82px] whitespace-pre-wrap">Object</p>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[55px] items-start left-[451px] pb-px pl-[25px] pr-px pt-[17px] rounded-[14px] top-[1306px] w-[122px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] tracking-[-0.3125px] w-[82px] whitespace-pre-wrap">Continue</p>
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
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[326.36px] not-italic text-[16px] text-black top-[324px] tracking-[-0.3125px]">Both parties approach the bench.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-179px)] not-italic text-[#45556c] text-[16px] top-[564px] tracking-[-0.3125px]">Plaintiff steps forward. Plaintiff Present your case</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-208px)] not-italic text-[#45556c] text-[16px] top-[1056px] tracking-[-0.3125px]">Defendant steps forward. Defendant Presents Their Case</p>
      <Container6 />
      <Container7 />
      <Container11 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[33.115px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.1154 33.1154">
        <g id="Icon">
          <path d={svgPaths.p1e3b2700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75962" />
          <path d={svgPaths.p3d438f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75962" />
          <path d="M13.7986 12.419H11.039" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75962" />
          <path d="M22.0775 17.9376H11.039" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75962" />
          <path d="M22.0775 23.4562H11.039" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75962" />
        </g>
      </svg>
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute bg-[#b3261e] content-stretch flex items-center justify-center left-[37.19px] max-w-[49.583335876464844px] min-w-[23.33333396911621px] overflow-clip px-[5.833px] rounded-[145.833px] top-[-2.19px]" data-name="Badges">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[16.042px] text-center text-white tracking-[0.7292px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.333px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex gap-[16.558px] items-center left-[1246px] p-[9.692px] rounded-[806.885px] top-[1507px]">
      <Icon2 />
      <Badges />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">Type your response to the judge...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0.507px_rgba(161,161,161,0.08)]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_681)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_681">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#030213] h-[36px] opacity-50 relative rounded-[8px] shrink-0 w-[81.781px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[14px] text-center text-white top-[8.5px] tracking-[-0.1504px]">Send</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Button1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Press Enter to send • Be clear, specific, and stick to the facts</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container14 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[101px] items-start left-0 pt-px px-[240px] w-[1440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container13 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop - 20">
      <GlobalHeader />
      <Container4 />
      <Frame />
      <Container12 />
    </div>
  );
}