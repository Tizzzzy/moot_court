import svgPaths from "./svg-ibhdws6lmz";
import React, { createContext, useContext } from 'react';

interface LandingAuthCtx { isAuthenticated: boolean; username?: string; userButton?: React.ReactNode; }
const LandingAuthCtx = createContext<LandingAuthCtx>({ isAuthenticated: false });

function H() {
  return (
    <div className="h-[28px] relative shrink-0 w-[87.547px]" data-name="h1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Pro Se Pro</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[4px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap">BETA</p>
        </div>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="bg-[#dcfce7] h-[22px] relative rounded-[4px] shrink-0 w-[47.484px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-[3px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] whitespace-nowrap">FREE</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[101.836px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Span />
        <Span1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <H />
      <Container3 />
    </div>
  );
}

function P() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Help Small Claims Plaintiffs Prepare, Step by Step</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container2 />
        <P />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[48px] relative shrink-0 w-[239.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Button() {
  const { isAuthenticated, username, userButton } = useContext(LandingAuthCtx);
  if (isAuthenticated) {
    if (userButton) return <>{userButton}</>;
    return (
      <div
        className="bg-[#3b82f6] rounded-full shrink-0 size-[36px] flex items-center justify-center cursor-pointer hover:bg-[#2563eb] transition-colors select-none"
        data-name="UserButton"
        title={username}
      >
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[15px] leading-none">
          {username ? username[0].toUpperCase() : 'U'}
        </span>
      </div>
    );
  }
  return (
    <div className="bg-[#3b82f6] h-[36px] relative rounded-[8px] shrink-0 w-[72.133px] cursor-pointer hover:bg-[#2563eb] transition-colors" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">Log In</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full max-w-[1071px] mx-auto">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Container />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[81px] items-start pb-px relative shrink-0 w-full" data-name="nav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Div1 />
    </div>
  );
}

function Sparkles() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Sparkles">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_380)" id="Sparkles">
          <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_380">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[8px] w-[288.742px]" data-name="span">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[144px] not-italic text-[#1447e6] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Free Beta Access • No Credit Card Required</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#bedbff] border-solid h-[38px] left-[362.13px] rounded-[16777200px] top-[96px] w-[346.742px]" data-name="div">
      <Sparkles />
      <Span2 />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[150px] left-[87.5px] top-[158px] w-[896px]" data-name="h1">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[75px] left-[448.25px] not-italic text-[#101828] text-[60px] text-center top-px tracking-[0.2637px] w-[892px]">{`You don't need a lawyer to prepare for small claims court.`}</p>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute h-[65px] left-[199.5px] top-[332px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[336.05px] not-italic text-[#4a5565] text-[20px] text-center top-[-0.5px] tracking-[-0.4492px] w-[647px]">Master small claims court preparation. Prepare with Pro Se Pro, organize evidence, and walk in with total confidence.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3b82f6] h-[40px] relative rounded-[8px] shrink-0 w-[197.617px] cursor-pointer hover:bg-[#2563eb] transition-colors" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">Practice My Hearing</p>
      </div>
    </div>
  );
}

function SeeHowItWorks() {
  return (
    <div className="h-[10.49px] relative shrink-0 w-[114.122px]" data-name="See How It Works">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.122 10.4901">
        <g id="See How It Works">
          <path d={svgPaths.peb54d00} fill="var(--fill-0, #364153)" id="Vector" />
          <path d={svgPaths.p120e2200} fill="var(--fill-0, #364153)" id="Vector_2" />
          <path d={svgPaths.pf2b8f00} fill="var(--fill-0, #364153)" id="Vector_3" />
          <path d={svgPaths.p3b77d100} fill="var(--fill-0, #364153)" id="Vector_4" />
          <path d={svgPaths.p5c59000} fill="var(--fill-0, #364153)" id="Vector_5" />
          <path d={svgPaths.p3b71ec00} fill="var(--fill-0, #364153)" id="Vector_6" />
          <path d={svgPaths.p2dea7c00} fill="var(--fill-0, #364153)" id="Vector_7" />
          <path d={svgPaths.p36f13600} fill="var(--fill-0, #364153)" id="Vector_8" />
          <path d={svgPaths.p9599600} fill="var(--fill-0, #364153)" id="Vector_9" />
          <path d={svgPaths.p9723a80} fill="var(--fill-0, #364153)" id="Vector_10" />
          <path d={svgPaths.p13c06900} fill="var(--fill-0, #364153)" id="Vector_11" />
          <path d={svgPaths.p28a36a00} fill="var(--fill-0, #364153)" id="Vector_12" />
          <path d={svgPaths.p2c0b58c0} fill="var(--fill-0, #364153)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[181.766px] cursor-pointer hover:bg-gray-100 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[33px] py-px relative size-full">
        <SeeHowItWorks />
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-center justify-center left-[24px] pr-[0.008px] top-[429px] w-[1023px]" data-name="div">
      <Button1 />
      <Button2 />
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="bg-white h-[565px] relative shrink-0 w-full" data-name="motion.div">
      <Div2 />
      <H1 />
      <P1 />
      <Div3 />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1023px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[512.07px] not-italic text-[#101828] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">
        <span className="leading-[40px]">{`Most people lose because they are `}</span>
        <span className="leading-[40px] text-[#e17100]">unprepared</span>
      </p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[56px] left-[175.5px] top-[56px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336.48px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] w-[618px]">Self-represented litigants face overwhelming challenges in small claims court preparation</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[112px] left-[24px] top-[96px] w-[1023px]" data-name="Container">
      <H2 />
      <P2 />
    </div>
  );
}

function H3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Unorganized evidence</p>
    </div>
  );
}

function P3() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[193px]">Critical documents scattered, missing evidence, and no clear narrative</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[160px] items-start left-[-0.5px] pb-px pt-[25px] px-[25px] rounded-[10px] top-0 w-[283px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <H3 />
      <P3 />
    </div>
  );
}

function H4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[-0.16px] not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] w-[217px]">Fear of courtroom process and objections</p>
    </div>
  );
}

function P4() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[213px]">Unprepared for procedural challenges and legal terminology</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[159.5px] items-start left-[306.66px] pb-px pt-[25px] px-[25px] rounded-[10px] top-0 w-[282.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <H4 />
      <P4 />
    </div>
  );
}

function H5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">No practice opportunity</p>
    </div>
  );
}

function P5() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[201px]">Walking into court without ever rehearsing your hearing</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[160px] items-start left-[613.5px] pb-px pt-[25px] px-[25px] rounded-[10px] top-0 w-[282px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <H5 />
      <P5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[159.5px] left-[87.5px] top-[256px] w-[896px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f8f9fa] h-[511.5px] relative shrink-0 w-full" data-name="Section">
      <Container4 />
      <Container5 />
    </div>
  );
}

function H6() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1023px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[511.77px] not-italic text-[#101828] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Your AI-powered courtroom prep for non-lawyers</p>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute h-[28px] left-[175.5px] top-[56px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[335.76px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] whitespace-nowrap">Everything you need to prepare for a small claims hearing</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <H6 />
      <P6 />
    </div>
  );
}

function FileCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FileCheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FileCheck">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 15L11 17L15 13" id="Vector_3" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <FileCheck />
      </div>
    </div>
  );
}

function H7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[169.039px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Evidence Analyzer</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[24px] top-[24px] w-[269.664px]" data-name="Container">
      <Container13 />
      <H7 />
    </div>
  );
}

function P7() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[68px] w-[269.664px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[266px]">Small claims evidence organization made simple</p>
    </div>
  );
}

function FileCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FileCheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FileCheck">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p12751280} id="Vector_3" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#cbfbf1] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <FileCheck1 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Receipt_Scan.pdf</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">Uploaded just now</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[16px] top-[16px] w-[235.664px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[8px]" data-name="CheckCircle2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_364)" id="CheckCircle2">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_364">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute h-[20px] left-[36px] top-[6px] w-[148.656px]" data-name="span">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#00786f] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Direct Evidence Found</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#cbfbf1] border border-[#96f7e4] border-solid h-[34px] left-[16px] rounded-[16777200px] top-[68px] w-[198.656px]" data-name="Container">
      <CheckCircle />
      <Span3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[120px] left-[24px] rounded-[10px] top-[137.5px] w-[269.664px]" data-name="Container">
      <Container15 />
      <Container20 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[332.75px] left-0 rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[319.664px]" data-name="Container">
      <Container12 />
      <P7 />
      <Container14 />
    </div>
  );
}

function MessageSquare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MessageSquare">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MessageSquare">
          <path d={svgPaths.p3c61fe80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <MessageSquare />
      </div>
    </div>
  );
}

function H8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[145.063px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Court Simulator</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[24px] top-[24px] w-[269.664px]" data-name="Container">
      <Container23 />
      <H8 />
    </div>
  );
}

function P8() {
  return (
    <div className="absolute h-[22.75px] left-[24px] top-[68px] w-[269.664px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] whitespace-nowrap">Practice small claims hearing with AI</p>
    </div>
  );
}

function Span4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[11.742px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[-8.79px] not-italic text-[#155dfc] text-[10px] top-[-0.25px] whitespace-nowrap">Judge</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Span4 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white flex-[1_0_0] h-[58px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#364153] text-[14px] top-[9.5px] tracking-[-0.1504px] w-[137px]">Can you describe the incident?</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[58px] items-start left-[16px] top-[16px] w-[235.664px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#eff6ff] h-[38px] relative rounded-[10px] shrink-0 w-[218.93px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#364153] text-[14px] top-[9.5px] tracking-[-0.1504px] whitespace-nowrap">Well, he never paid me back...</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[38px] items-start justify-end left-[16px] top-[86px] w-[235.664px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function AlertCircle() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="AlertCircle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_354)" id="AlertCircle">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V8" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_354">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute h-[20px] left-[36px] top-[8px] w-[143.695px]" data-name="span">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#bb4d00] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">⚠️ Objection! Hearsay</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#fffbeb] border border-[#fee685] border-solid h-[38px] left-[16px] rounded-[10px] top-[136px] w-[193.695px]" data-name="Container">
      <AlertCircle />
      <Span5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[192px] left-[24px] rounded-[10px] top-[114.75px] w-[269.664px]" data-name="Container">
      <Container25 />
      <Container28 />
      <Container30 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[332.75px] left-[351.66px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[319.664px]" data-name="Container">
      <Container22 />
      <P8 />
      <Container24 />
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Target">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Target">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Target />
      </div>
    </div>
  );
}

function H9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[152.688px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Readiness Score</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[24px] top-[24px] w-[269.664px]" data-name="Container">
      <Container33 />
      <H9 />
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[22.75px] left-[24px] top-[68px] w-[269.664px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] whitespace-nowrap">Track your trial preparation progress</p>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative size-[128px]" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <g id="svg">
          <path d={svgPaths.p2af94200} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="10" />
          <path d={svgPaths.p2af94200} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeDasharray="299 352" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[36px] relative shrink-0 w-[66.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#00a63e] text-[30px] tracking-[0.3955px] whitespace-nowrap">85%</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[62.32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Trial Ready</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 size-[128px] top-0" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute left-[69.83px] size-[128px] top-[24px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[128px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg />
        </div>
      </div>
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[178px] left-[24px] rounded-[10px] top-[114.75px] w-[269.664px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[332.75px] left-[703.33px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[319.664px]" data-name="Container">
      <Container32 />
      <P9 />
      <Container34 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[332.75px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container21 />
      <Container31 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white h-[656.75px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start pt-[96px] px-[24px] relative w-full max-w-[1071px] mx-auto h-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function H10() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1023px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[512.2px] not-italic text-[#101828] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Simple, guided preparation</p>
    </div>
  );
}

function P10() {
  return (
    <div className="absolute h-[28px] left-[175.5px] top-[56px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336.41px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] whitespace-nowrap">{`Answer a few questions and we'll build your complete case preparation plan`}</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[84px] left-[24px] top-[96px] w-[1023px]" data-name="Container">
      <H10 />
      <P10 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 12H10.6667" id="Vector_3" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 17.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 22.6667H10.6667" id="Vector_5" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[16777200px] shrink-0 size-[64px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[#1e1e1e] text-[36px] text-center tracking-[0.3691px] whitespace-nowrap">{`Let's Get Started`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center tracking-[-0.4492px] whitespace-nowrap">First, we need some basic information about your case</p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#08f] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">1. Case Status</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#dbeafe] h-[36px] relative rounded-[16777200px] shrink-0 w-[123.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #757575)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#757575] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">2. Entry Method</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f3f4f6] h-[36px] relative rounded-[16777200px] shrink-0 w-[135.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #757575)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#757575] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">3. Case Details</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f3f4f6] h-[36px] relative rounded-[16777200px] shrink-0 w-[128.461px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pr-[0.008px] relative size-full">
          <Container43 />
          <Icon1 />
          <Container44 />
          <Icon2 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#1e1e1e] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">{`What's your case status?`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e1e1e] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">This helps us understand where you are in the process</p>
    </div>
  );
}

function CaseIntake1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[830px]" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[232.906px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e1e1e] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Officially Filed</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[232.906px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e1e1e] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">I have a case number from the court</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#dcfce7] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 overflow-clip rounded-[8px] top-[70.5px] w-[101.727px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#34c759] text-[12px] top-[3px] whitespace-nowrap">Most Common</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[92.5px] relative shrink-0 w-[232.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading1 />
        <Paragraph1 />
        <Badge />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start pb-[24px] relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[144px] min-h-px min-w-px relative rounded-[10px] cursor-pointer hover:bg-blue-50 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[26px] px-[26px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#fef9c2] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e1e1e] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Submitted/Pending</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e1e1e] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Waiting for court approval</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[68px] relative shrink-0 w-[167.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start pb-[24px] relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[1_0_0] h-[144px] min-h-px min-w-px relative rounded-[10px] cursor-pointer hover:bg-blue-50 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[38.25px] px-[26px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function CaseIntake2() {
  return (
    <div className="h-[184.5px] relative shrink-0 w-full" data-name="CaseIntake">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative w-full">
        <CaseIntake1 />
        <CaseIntake2 />
      </div>
    </div>
  );
}

function CaseIntake() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[88px] top-[229.75px] w-[896px]" data-name="CaseIntake">
      <Container40 />
      <Container42 />
      <Card />
    </div>
  );
}

function Section2() {
  return (
    <div id="start-new-case" className="bg-[#f8f9fa] h-[890.75px] relative shrink-0 w-full" data-name="Section">
      <Container39 />
      <CaseIntake />
    </div>
  );
}

function H11() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[96px] w-[1023px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[511.26px] not-italic text-[#101828] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Ready to win your case?</p>
    </div>
  );
}

function P11() {
  return (
    <div className="absolute h-[28px] left-[199.5px] top-[160px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[335.87px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] whitespace-nowrap">Join thousands of self-represented litigants who prepared with confidence</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#3b82f6] h-[40px] left-[414.15px] rounded-[8px] top-[212px] w-[242.695px] cursor-pointer hover:bg-[#2563eb] transition-colors" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[121px] not-italic text-[14px] text-center text-white top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Start Your Preparation</p>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white h-[348px] relative shrink-0 w-full" data-name="Section">
      <div className="w-full max-w-[1071px] mx-auto h-full relative">
        <H11 />
        <P11 />
        <Button5 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[24px] relative shrink-0 w-[243.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#101828] text-[0px] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">
          <span className="leading-[24px]">Pro Se Pro</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#4a5565]">· AI Courtroom Coach</span>
        </p>
      </div>
    </div>
  );
}

function P12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[297.781px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">© 2026 Pro Se Pro. Your AI Courtroom Coach.</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <Container52 />
      <P12 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-full" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[33px] px-[24px] relative w-full max-w-[1071px] mx-auto h-full">
        <Div4 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col min-h-[3142px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <Nav />
      <div className="w-full max-w-[1071px] mx-auto">
        <MotionDiv />
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </div>
  );
}

export default function DesignAiCourtroomCoachLandingPage({ isAuthenticated = false, username, userButton }: { isAuthenticated?: boolean; username?: string; userButton?: React.ReactNode } = {}) {
  return (
    <LandingAuthCtx.Provider value={{ isAuthenticated, username, userButton }}>
      <div className="bg-[#f8f9fa] content-stretch flex flex-col items-center relative w-full" data-name="Design AI Courtroom Coach Landing Page">
        <Div />
      </div>
    </LandingAuthCtx.Provider>
  );
}