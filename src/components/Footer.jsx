export default function Footer() {
  return (
    <div className="w-[1920px] h-[495px] px-[352px] pt-16 bg-neutral-100 border-t border-gray-200 flex-col justify-start items-start gap-[25px] inline-flex">
      <div className="w-[1215px] justify-start items-start gap-5 inline-flex">
        <div className="w-[289px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-gray-900 text-lg font-semibold font-['Work Sans'] leading-7">
              About
            </div>
            <div className="w-[280px] text-zinc-500 text-base font-normal font-['Work Sans'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1 flex">
            <div>
              <span style="text-gray-900 text-base font-normal font-['Work Sans'] leading-normal">
                Email :{" "}
              </span>
              <span style="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
                info@jstemplate.net
              </span>
            </div>
            <div>
              <span style="text-gray-900 text-base font-normal font-['Work Sans'] leading-normal">
                Phone :{" "}
              </span>
              <span style="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
                880 123 456 789
              </span>
            </div>
          </div>
        </div>
        <div className="h-[88px] justify-center items-start gap-20 flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
                Home
              </div>
              <div className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
                Blog
              </div>
              <div className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="w-36 relative">
          <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
          <div className="w-4 h-4 left-[42.67px] top-0 absolute flex-col justify-start items-start inline-flex" />
          <div className="w-4 h-4 left-[85.33px] top-0 absolute flex-col justify-start items-start inline-flex">
            <div className="w-4 h-4 relative"></div>
          </div>
          <div className="w-4 h-4 left-[128px] top-0 absolute flex-col justify-start items-start inline-flex" />
        </div>
      </div>
      <div className="w-[1216px] h-[95px] py-8 border-t border-zinc-200 justify-start items-center gap-16 inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div>
              <span style="text-gray-900 text-xl font-normal font-['Plus Jakarta Sans'] leading-7">
                Meta
              </span>
              <span style="text-gray-900 text-xl font-extrabold font-['Plus Jakarta Sans'] leading-7">
                Blog
              </span>
            </div>
            <div className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
              © All Rights Reserved.
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-6 justify-end items-center gap-4 flex">
          <div className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
            Terms of Use
          </div>
          <div className="w-6 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
          <div className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
            Privacy Policy
          </div>
          <div className="w-6 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
          <div className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
}
