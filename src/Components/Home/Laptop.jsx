import React, { useEffect, useRef } from "react";

const Laptop = () => {
  const macbookRef = useRef(null);
  const screenRef = useRef(null);
  const typingTextRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!macbookRef.current) return;

      const rect = document.body.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateXFactor = 0.02;
      const rotateYFactor = 0.03;

      const computedStyle = window.getComputedStyle(macbookRef.current);
      const matrix = computedStyle.transform;
      let floatBaseRotateY = 0;

      if (matrix && matrix !== "none") {
        const values = matrix.split("(")[1].split(")")[0].split(",");
        floatBaseRotateY = parseFloat(values[4] || 0);
      }

      const yAxisRotation = (x - centerX) * rotateYFactor;
      const xAxisRotation = -(y - centerY) * rotateXFactor;

      macbookRef.current.style.transform = `translateY(${
        parseFloat(computedStyle.transform.split(",")[13] || -10)
      }px) rotateX(${xAxisRotation}deg) rotateY(${yAxisRotation + floatBaseRotateY}deg)`;
    };

    const handleMouseLeave = () => {
      // Reset handled by CSS animation
    };

    const handleScreenEnter = () => {
      if (screenRef.current) {
        screenRef.current.style.transform = "rotateX(-55deg)";
      }
    };

    const handleScreenLeave = () => {
      if (screenRef.current) {
        screenRef.current.style.transform = "rotateX(-70deg)";
      }
    };

    const handleTypingClick = () => {
      if (typingTextRef.current) {
        typingTextRef.current.style.animation = "none";
        typingTextRef.current.offsetHeight; // Trigger reflow
        typingTextRef.current.style.animation =
          "typing 3.5s steps(50, end) forwards, blink-caret 0.75s step-end infinite";
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    if (screenRef.current) {
      screenRef.current.addEventListener("mouseenter", handleScreenEnter);
      screenRef.current.addEventListener("mouseleave", handleScreenLeave);
    }

    if (typingTextRef.current) {
      typingTextRef.current.addEventListener("click", handleTypingClick);
    }

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);

      if (screenRef.current) {
        screenRef.current.removeEventListener("mouseenter", handleScreenEnter);
        screenRef.current.removeEventListener("mouseleave", handleScreenLeave);
      }

      if (typingTextRef.current) {
        typingTextRef.current.removeEventListener("click", handleTypingClick);
      }
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center font-['Inter',sans-serif]  [perspective:1200px] py-4 sm:py-6 md:py-8 min-h-screen overflow-x-hidden overflow-y-hidden"
    >
      <div
        className="relative w-full max-w-[85vw] sm:max-w-[75vw] md:max-w-[700px] h-auto aspect-[700/450] scale-[0.65] sm:scale-[0.8] md:scale-100 mx-auto [transform-style:preserve-3d] animate-[float_8s_ease-in-out_infinite]"
        ref={macbookRef}
      >
        <div
          className="absolute w-full h-[15px] bottom-0 bg-[#ababab] rounded-b-lg [transform:translateZ(-7.5px)] shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
        ></div>

        <div
          className="absolute w-full h-full bottom-0 bg-[#d8d8d8] rounded-lg [transform-origin:bottom_center] [transform:rotateX(65deg)] shadow-[inset_0_-5px_20px_rgba(0,0,0,0.05)] [transform-style:preserve-3d]"
        >
          <div
            className="absolute w-[90%] h-[38%] left-[5%] bg-[#c8c8c8] rounded-md [transform:translateZ(1px)] bottom-[calc(10%+60px+5px)]"
          >
            <div
              className="absolute w-[18%] h-[85%] top-[7.5%] left-[2.5%] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.2)_1px,transparent_0)] bg-[length:3px_3px] [transform:translateZ(0.5px)] opacity-70"
            ></div>
            <div
              className="absolute w-[18%] h-[85%] top-[7.5%] right-[2.5%] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.2)_1px,transparent_0)] bg-[length:3px_3px] [transform:translateZ(0.5px)] opacity-70"
            ></div>
          </div>

          <div
            className="absolute w-[30%] h-[60px] left-[35%] bg-[#bcbcbc] rounded-md [transform:translateZ(1px)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] bottom-[calc(10%+5px)]"
          ></div>

          

          <div
            className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] pointer-events-none rounded-[inherit]"
          ></div>

          <div
            className="absolute w-[96%] h-[300px] left-[2%] bottom-[98%] [transform-origin:bottom_center] [transform:rotateX(-70deg)] transition-[transform_0.8s_cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d]"
            ref={screenRef}
          >
            <div
              className="absolute w-full h-full bg-gradient-to-br from-[#e0e0e0] to-[#b0b0b0] rounded-[12px_12px_3px_3px] [transform:translateZ(-3px)_rotateY(180deg)] flex justify-center items-center shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
            >
              <div
                className="text-[40px] text-[rgba(0,0,0,0.15)] font-['Helvetica_Neue','Lucida_Grande',Arial,sans-serif] [text-shadow:0_1px_1px_rgba(255,255,255,0.2)]"
              >
                
              </div>
            </div>

            <div
              className="absolute w-full h-full bg-[#080808] rounded-[12px_12px_3px_3px] [transform:translateZ(3px)] p-[12px] box-border overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]"
            >
              <div
                className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] bg-[#222] rounded-full z-10"
              ></div>

              <div
                className="w-full h-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col justify-center items-center text-white p-[20px] box-border font-['SF_Mono',monospace,'Inter',sans-serif] rounded-[3px]"
              >
                <h1
                  className="overflow-hidden whitespace-nowrap border-r-2 border-white animate-[typing_3.5s_steps(50,end)_forwards,blink-caret_0.75s_step-end_infinite] text-2xl sm:text-3xl md:text-4xl font-semibold mb-[15px] [text-shadow:0_0_10px_rgba(255,255,255,0.3)]"
                  ref={typingTextRef}
                >
                  Sheba Software Solutions</h1>
                <p
                  className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] leading-[1.5] text-center max-w-[90%] opacity-85"
                >
                  Crafting bespoke software solutions for clients worldwide,
                  blending innovation, style, and elegance to elevate your
                  business.
                </p>
              </div>

              <div
                className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0)_70%,rgba(255,255,255,0)_100%)] [transform:translateX(-100%)] animate-[shine-animation_4s_infinite_1s] pointer-events-none z-20"
              ></div>
            </div>

            <div
              className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] pointer-events-none rounded-[inherit]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;