import React from "react";
import style from "./_accordion.module.scss";

const Accordion = () => {
  console.log(" inside Accordion compoent ");
  return (
    <main className="p-4">
      <h5 className="text-red-500 mb-4 text-5xl">
        Accordion Default Component{" "}
      </h5>

      <sections>
        <h5>Accordion Component default</h5>

        <div className={`${style.accordion} ${style.default}`}>
          <div className={`${style.accordion__item}`}>
            <div className={`${style.accordion__header} repel`}>
              <div>
                Accordion Title
              </div>
              <div className={`${style.accordion__header_icon} `}>
                {/* {isVisible &&
      (isOpen ? ( */}
                {/* <Icons name={Icon.MINUS} size="sm" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="none" viewBox="0 0 24 24" class="_icon__icon__Amyr7 _icon__sm__l4hao"><path fill="" fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path></svg> 
                {/* ) : ( */}
                {/* <Icons name={Icon.PLUS} size="sm" />
  ))} */}
              </div>
            </div>

            {/* <div className={isOpen ? styles.show : styles.hide}> */}
            <div className={`${style.accordion__body} `}>Content here </div>
            {/* </div> */}
          </div>
        </div>

        <div className={`${style.accordion} ${style.secondary}`}>
          <div className={`${style.accordion__item}`}>
            <div className={`${style.accordion__header} repel`}>
              <div>
                Accordion Title
              </div>
              <div className={`${style.accordion__header_icon} `}>
                {/* {isVisible &&
      (isOpen ? ( */}
                {/* <Icons name={Icon.MINUS} size="sm" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="none" viewBox="0 0 24 24" class="_icon__icon__Amyr7 _icon__sm__l4hao"><path fill="" fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path></svg> 
                {/* ) : ( */}
                {/* <Icons name={Icon.PLUS} size="sm" />
  ))} */}
              </div>
            </div>

            {/* <div className={isOpen ? styles.show : styles.hide}> */}
            <div className={`${style.accordion__body} `}>Content here </div>
            {/* </div> */}
          </div>
        </div>
      </sections>
    </main>
  );
};

export default Accordion;
