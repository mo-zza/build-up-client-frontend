import BasePage from "@src/components/layout/page/BasePage";
import MainInfo from "@src/app/MainInfo";
import Shark from "@src/components/assets/svg/Shark";
import ProjectList from "@src/app/ProjectList";

export default function Home() {
  return (
      <BasePage>
          <div className="flex justify-between h-screen items-center">
              <div>
                  <p className="text-[80px] mb-[50px]">BUILD - UP</p>
                  <p>크립토 에어드랍 & 앱테크플랫폼 [BUILD-UP]</p>
                  <p>프로젝트 미션에 참여하여 에어드랍 토큰을 받고</p>
                  <p>BUP 포인트를 모아 리워드를 가져가세요!</p>
              </div>
              <div className="relative">
                  <Shark />
                  <MainInfo />
                  <div className="flex bg-black w-full mt-[20px] gap-x-[4px] p-[10px] rounded-xl">
                      <p className="text-blue">BUP 포인트를</p>
                      <p className="text-white">모아</p>
                      <p className="text-green">리워드를</p>
                      <p className="text-white">가져가세요!</p>
                  </div>
              </div>
          </div>
          <div className="w-full">
            <ProjectList />
          </div>
      </BasePage>
  );
}
