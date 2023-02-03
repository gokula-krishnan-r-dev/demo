import Head from "next/head"

export default function userInformation() {
  return (
    <>
      <Head>
        <title>Create Avatar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="backgroudiamge--profile h-[100vh]">
        <div className="hidden w-full h-[100vh] md:block">
          <div className="border-none">
            <img className="h-[69%]  border-none presbackmg--profile  fixed !bottom-0 min-w-[100%] " />
          </div>
        </div>
        <div className=" hidden w-[100%] absolute top-[40px] md:flex md:justify-center  md:items-center mx-auto gap-4">
          <img src="Images/MaskGroup57 1 (1).svg" />
          <h4 className="Title--text md:text-[black]">ontheMoons</h4>
        </div>
        <div className="w-[100%]">
          <div className="flex items-center justify-center">
            <img
              className="hidden absolute top-[13%] md:block"
              src="Images/image 14 (1).svg"
            />
          </div>
          <div className="relative flex">
            <img className=" h-[100vh]" src="Images/Rectangle 24.svg" alt="" />
            <img
              className="absolute w-[50%] z-20 xl:hidden right-24 bottom-0"
              src="Images/image 14.svg"
              alt=""
            />
          </div>
          <div className="absolute xl:w-[80%] md:z-20 md:bottom-0 md:w-[100%] md:px-0 w-[50%] px-12 top-0">
            <div className="pt-[30px] md:w-[100%] md:px-9 md:absolute md:bottom-[20px] md:flex md:flex-col ">
              <div className="flex md:hidden items-center gap-4">
                <img src="Images/MaskGroup57 1.svg" />
                <h4 className="Title--text">ontheMoons</h4>
              </div>
              <h4 className="Subtitle--text md:flex md:h-[45px] md:items-center md:justify-start md:text-start  md:text-[31px] md:w-[100%] md:leading-3 w-[80%] md:pt-3 pt-6">
                Profile Creation{" "}
              </h4>
              <div className="overflow-y-scroll scroll-bar md:h-[486px] relative md:w-[100%] h-[610px] w-[80%]">
                <div className="bg-white mt-8 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <input
                    className="w-[100%] md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[70px]"
                    type="text"
                    defaultValue={"Jhone Doe"}
                  />
                </div>
                <div className="bg-white mt-4 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <input
                    className="w-[100%] md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[70px]"
                    type="text"
                    defaultValue={"28/05/2023"}
                  />
                </div>
                <div className="bg-white mt-4 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <input
                    className="w-[100%] md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[70px]"
                    type="text"
                    defaultValue={"Gender"}
                  />
                  <svg
                    className="pr-3"
                    width="49"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6667 11.2793L14.5 19.446L6.33337 11.2793"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="bg-white mt-4 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <img
                    className="pl-2 pt-3"
                    src="Images/Flag-India 1.svg"
                    alt=""
                  />
                  <input
                    className="w-[100%] md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[70px]"
                    type="text"
                    defaultValue={"Jhone Doe"}
                  />
                  <svg
                    className="pr-3"
                    width="49"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6667 11.2793L14.5 19.446L6.33337 11.2793"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="bg-white mt-4 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <input
                    className="w-[100%] md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[70px]"
                    type="text"
                    defaultValue={"Language"}
                  />
                  <svg
                    className="pr-3"
                    width="49"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6667 11.2793L14.5 19.446L6.33337 11.2793"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="bg-white  mt-4 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[135px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <textarea
                    className="w-[100%] pt-4  md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[135px]"
                    type="text"
                    defaultValue={"About me (Bio )"}
                  />
                </div>
                <div className="bg-white mt-4 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <input
                    className="w-[100%] md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[70px]"
                    type="text"
                    defaultValue={"I Want to meet"}
                  />
                  <svg
                    className="pr-3"
                    width="49"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6667 11.2793L14.5 19.446L6.33337 11.2793"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="bg-white mt-4 md:mt-4 flex items-center w-[96%] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white">
                  <input
                    className="w-[100%] md:w-[100%] md:text-[20px] md:h-[60px] md:rounded-[10px] pl-4 createusername--text outline-none rounded-[20px] h-[70px]"
                    type="text"
                    defaultValue={"Choice of Interest categories"}
                  />
                  <svg
                    className="pr-3"
                    width="49"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6667 11.2793L14.5 19.446L6.33337 11.2793"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="pt-4 bg-transparent">
                  <h3 className="Profile--subtitle--text">
                    Personality Traits
                  </h3>
                  <h4 className="Profile--para--text">
                    This helps us match you with compatible people, based on the
                    Big 5 Personality Test. Your answers are hidden from other
                    users.
                  </h4>
                  <h4 className="Profile--subdiv--text pt-6">
                    I find many things beautiful
                  </h4>
                  <div className=" bg-[#FF0034] pt-0 pb-[33px] flex w-[96%] sticky items-center justify-between gap-[190px] md:gap-[80px] bottom-0">
                    <div className="bg-white mt-4 md:mt-4 justify-center flex items-center w-[167px] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white profleback-text gap-2">
                      Yes <img src="Images/image 10.svg" alt="" />
                    </div>
                    <div className="bg-white mt-8 md:mt-4 justify-center flex items-center w-[167px] rounded-[20px] profleback-text  h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 gap-2 border-white">
                      No <img src="Images/image 9.svg" alt="" />
                    </div>
                  </div>
                  <h4 className="Profile--subdiv--text pt-2">
                    I find many things beautiful
                  </h4>
                  <div className=" bg-[#FF0034] md:gap-[80px] pt-0 pb-[33px] flex w-[96%] sticky items-center justify-between gap-[190px] bottom-0">
                    <div className="bg-white mt-4 md:mt-4 justify-center flex items-center w-[167px] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white profleback-text gap-2">
                      Yes <img src="Images/image 10.svg" alt="" />
                    </div>
                    <div className="bg-white mt-8 md:mt-4 justify-center flex items-center w-[167px] rounded-[20px] profleback-text h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 gap-2 border-white">
                      No <img src="Images/image 9.svg" alt="" />
                    </div>
                  </div>

                  <div className="bg-white justify-center md:h-[60px] mt-8 flex items-center md:w-[100%] w-[96%] cursor-pointer rounded-[20px] h-[74px] md:rounded-[10px] md:mt-6 border-2 gap-0 border-white">
                    <h4 className="Button--text">Let’s get started </h4>
                    <img className="md:w-[14%]" src="Images/image 11.svg" />
                  </div>
                </div>
                <div className=" bg-[#FF0034]  pt-0 pb-[33px] flex w-[96%] sticky items-center justify-between gap-[190px] md:gap-[130px] md:w-[100%] md:bottom-[-6px] -bottom-1">
                  <div className="bg-white mt-4 md:mt-4 justify-center flex items-center w-[167px] rounded-[20px] h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 border-white md:text-[18px] profleback-text">
                    Back
                  </div>
                  <div className="bg-white mt-8 md:mt-4 justify-center flex items-center w-[167px] rounded-[20px] profleback-text h-[74px] md:h-[60px] md:rounded-[10px] md:w-[100%] border-2 md:text-[18px] border-white">
                    Step 2
                  </div>
                </div>
              </div>
              <div className="md:flex  md:items-center md:justify-center md:flex-col">
                <div className="flex items-center  pr-[130px] md:pr-0  justify-center">
                  <svg
                    width="120"
                    height="14"
                    viewBox="0 0 120 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="6.80554"
                      cy="6.72412"
                      rx="6.54236"
                      ry="6.5"
                      fill="white"
                    />
                    <ellipse
                      cx="33.4955"
                      cy="6.72412"
                      rx="6.54236"
                      ry="6.5"
                      fill="white"
                    />
                    <ellipse
                      cx="60.1859"
                      cy="6.72412"
                      rx="6.54236"
                      ry="6.5"
                      fill="white"
                    />
                    <ellipse
                      cx="86.8763"
                      cy="6.72412"
                      rx="6.54236"
                      ry="6.5"
                      fill="white"
                    />
                    <ellipse
                      cx="113.392"
                      cy="6.72412"
                      rx="6.54236"
                      ry="6.5"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
