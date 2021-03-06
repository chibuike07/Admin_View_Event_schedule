import React, { useEffect, useRef } from "react";
import Styles from "./landing_page.module.css";
import HeaderView from "../../Components/component_landing_header/header";
import SectionView from "../../Components/component_landing_section/section";
import ShowCase from "../../Components/component_landing_showcase/ShowCase";
import ChatHint from "../../Components/ccomponent_landing_hat_hint/Chat_hint";
import Accomodation from "../../Components/component_accomodation/Accomodation";
import Contact from "../../Components/components_landing_contact/contact";
import Footer from "../../Components/component_landing_footer/footer";

const Landing_page = () => {
  const { container, main } = Styles;
  const prevEvent = useRef();
  const topEvent = useRef();
  const eventHight = useRef();
  const showCaseTransition = useRef();
  const chatHitTransition = useRef();
  const cartoonImage = useRef();
  const cartoonOne = useRef();
  const AccomodationText = useRef();
  const asideImage = useRef();
  const formBox = useRef();
  const bgImage = useRef();
  const footer = useRef();

  useEffect(() => {
    const onScroll = (e) => {
      if (
        e.target.documentElement.scrollTop >= 300 &&
        e.target.documentElement.scrollTop <= 350
      ) {
        prevEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        topEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        eventHight.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
      }
    };

    const showCaseScroll = (e) => {
      if (
        e.target.documentElement.scrollTop >= 700 &&
        e.target.documentElement.scrollTop <= 750
      ) {
        showCaseTransition.current.style.transform = "translate(0%, 0%)";
      }
    };

    const chatHint = (e) => {
      if (
        e.target.documentElement.scrollTop >= 900 &&
        e.target.documentElement.scrollTop <= 950
      ) {
        cartoonImage.current.children[0].children[0].style.transform =
          "translate(-100%)";
        window.setTimeout(() => {
          chatHitTransition.current.style.transform = "translate(30%)";
        }, 3000);
      }
    };

    const AccomodationView = (e) => {
      if (
        e.target.documentElement.scrollTop >= 2000 &&
        e.target.documentElement.scrollTop <= 2050
      ) {
        cartoonOne.current.children[0].children[0].style.opacity = "1";
        cartoonOne.current.children[2].children[0].style.opacity = "1";
        AccomodationText.current.style.opacity = "1";
        window.setTimeout(() => {
          cartoonOne.current.children[1].children[0].style.opacity = "1";
          cartoonOne.current.children[4].children[0].style.opacity = "1";
        }, 1000);
        window.setTimeout(() => {
          cartoonOne.current.children[3].children[0].style.opacity = "1";
        }, 1500);
      }
    };

    const ContactView = (e) => {
      if (
        e.target.documentElement.scrollTop >= 2500 &&
        e.target.documentElement.scrollTop <= 2600
      ) {
        formBox.current.style.transform = "translate(20%)";
        bgImage.current.style.transform = "translateX(-35%)";
        asideImage.current.children[0].children[0].style.transform =
          "translateX(-65%)";
      }
    };
    const FooterView = (e) => {
      if (
        e.target.documentElement.scrollTop >= 2700 &&
        e.target.documentElement.scrollTop <= 2800
      ) {
        console.log("now");
        footer.current.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", showCaseScroll);
    window.addEventListener("scroll", chatHint);
    window.addEventListener("scroll", AccomodationView);
    window.addEventListener("scroll", ContactView);
    window.addEventListener("scroll", FooterView);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", showCaseScroll);
      window.removeEventListener("scroll", chatHint);
      window.removeEventListener("scroll", AccomodationView);
      window.removeEventListener("scroll", ContactView);
      window.removeEventListener("scroll", FooterView);
    };
  }, []);
  return (
    <div className={container}>
      <HeaderView />
      <main className={main}>
        <SectionView
          prevEvent={prevEvent}
          topEvent={topEvent}
          eventHight={eventHight}
        />
        <ShowCase showCaseTransition={showCaseTransition} />
        <ChatHint
          chatHitTransition={chatHitTransition}
          cartoonImage={cartoonImage}
        />
        <Accomodation
          cartoonOne={cartoonOne}
          AccomodationText={AccomodationText}
        />
        <Contact asideImage={asideImage} formBox={formBox} bgImage={bgImage} />
        <Footer footer={footer} />
      </main>
    </div>
  );
};
export default Landing_page;
