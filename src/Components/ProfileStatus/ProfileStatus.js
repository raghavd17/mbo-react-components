import React from "react";
import style from "./_profile_status.module.scss";

function Profile() {
  return (
    // className={`${style.TeaList} grid`}
    <section className="">
      <section className="grid grid-cols-2 border-b border-b-neutral-400 py-5">
        <div className="stack">
          <div className="text-2xl text-neutral-800 mb-32">
            Profile with Name
          </div>
          <div className="cluster">
            <section className={`${style.profile} ${style.lg}`}>
              <div className={`${style.profile__media}`} data-profile="RD">
                <picture className={`${style.profile__img}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width=""
                    height=""
                    fill="none"
                    viewBox="0 0 60 60"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="22"
                      fill="#fff"
                      fill-opacity=".85"
                    ></circle>
                    <path
                      fill="#352281"
                      fill-rule="evenodd"
                      d="M29.854 19.75a4.104 4.104 0 1 0 0 8.209 4.104 4.104 0 0 0 0-8.209Zm-5.604 4.104a5.604 5.604 0 1 1 11.209 0 5.604 5.604 0 0 1-11.209 0Zm3.722 8.396h4.056c1.222 0 2.178 0 2.949.053.784.053 1.433.164 2.03.413a6.077 6.077 0 0 1 3.277 3.276c.249.599.36 1.247.413 2.031.053.771.053 1.727.053 2.949V41H40v.75H20V41h-.75v-.028c0-1.222 0-2.178.053-2.949.053-.784.164-1.433.413-2.03a6.077 6.077 0 0 1 3.276-3.277c.598-.249 1.247-.36 2.031-.413.771-.053 1.727-.053 2.949-.053Zm-7.222 8h18.5c-.002-.88-.01-1.561-.05-2.124-.048-.708-.141-1.173-.301-1.557A4.576 4.576 0 0 0 36.43 34.1c-.384-.16-.85-.253-1.556-.302-.715-.049-1.619-.049-2.875-.049h-4c-1.256 0-2.16 0-2.875.05-.707.048-1.172.141-1.556.301a4.576 4.576 0 0 0-2.468 2.47c-.16.384-.253.85-.302 1.556a34.4 34.4 0 0 0-.049 2.125Z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#6855B4"
                      fill-rule="evenodd"
                      d="M30 3.5C15.364 3.5 3.5 15.364 3.5 30S15.364 56.5 30 56.5 56.5 44.636 56.5 30 44.636 3.5 30 3.5ZM.5 30C.5 13.708 13.708.5 30 .5S59.5 13.708 59.5 30 46.292 59.5 30 59.5.5 46.292.5 30Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {/* <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/Profile-3637425_1280.png" /> */}
                </picture>
              </div>
              <svg
                className={`${style.profile__progress}`}
                viewbox="0 0 33.83098862 33.83098862"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={`${style.profile__trail}`}
                  stroke-dasharray="100,100"
                  stroke-linecap=""
                  fill="none"
                  cx="16.91549431"
                  cy="16.91549431"
                  r="15.91549431"
                />
                <circle
                  className={`${style.profile__path}`}
                  stroke-linecap="round"
                  fill="none"
                  cx="16.91549431"
                  cy="16.91549431"
                  r="15.91549431"
                />
              </svg>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Profile;
