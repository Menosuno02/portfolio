<script lang="ts">
import { t } from "../i18n";

function getImageUrl(imageName: string) {
	return `/images/${imageName}`;
}
</script>

<div class="xl:col-span-4 lg:col-span-5 col-span-12">
  <div
    class="border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col items-center pt-10 pb-8"
  >
    <img
      alt=""
      class="w-28 h-28 rounded-full shadow-lg mb-6"
      src={getImageUrl("foto.png")}
      width="96"
      height="96"
    />
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
      Alejandro López Labajo
    </h5>
    <p class="mb-4 font-normal text-gray-400">{$t("data.dev")}</p>
    <div class="text-base-content text-opacity-60 text-white w-5/6">
      <div class="flex justify-start py-2 px-1 items-center">
        <div class="flex-grow font-medium gap-2 flex items-center my-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
            >
            </path>
          </svg>
          {$t("data.location")}
        </div>
        <div
          class="text-white text-sm font-normal text-right mr-2 ml-3 break-all"
        >
          {$t("data.value.location")}
        </div>
      </div>
      <a
        href="https://encamina.com"
        target="_blank"
        rel="noreferrer"
        class="flex justify-start py-2 px-1 items-center"
      >
        <div class="flex-grow font-medium gap-2 flex items-center my-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
            >
            </path>
          </svg>
          {$t("data.company")}
        </div>
        <div
          class="text-white text-sm font-normal text-right mr-2 ml-3 break-all"
        >
          ---
        </div>
      </a>
      <a
        href="https://github.com/Menosuno02"
        target="_blank"
        rel="noreferrer"
        class="flex justify-start py-2 px-1 items-center"
      >
        <div class="flex-grow font-medium gap-2 flex items-center my-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
            >
            </path>
          </svg>
          GitHub
        </div>
        <div
          class="text-white text-sm font-normal text-right mr-2 ml-3 truncate break-all"
        >
          Menosuno02
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/alejandrolopezlabajo"
        target="_blank"
        rel="noreferrer"
        class="flex justify-start py-2 px-1 items-center"
      >
        <div class="flex-grow font-medium gap-2 flex items-center my-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            >
            </path>
          </svg>
          LinkedIn
        </div>
        <div
          class="text-white text-sm font-normal text-right mr-2 ml-3 truncate break-all"
        >
          alejandrolopezlabajo
        </div>
      </a>
      <a
        href="mailto:alopezlabajo.02@gmail.com"
        target="_blank"
        rel="noreferrer"
        class="flex justify-start py-2 px-1 items-center"
      >
        <div class="flex-grow font-medium gap-2 flex items-center my-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
              >
              </path>
            </g>
          </svg>
          Email
        </div>
        <div
          class="text-white text-sm font-normal text-right mr-2 ml-3 truncate break-all"
        >
          alopezlabajo.02@gmail.com
        </div>
      </a>
      <div class="flex justify-start py-2 px-1 items-center">
        <div class="flex-grow font-medium gap-2 flex items-center my-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
            >
            </path>
          </svg>
          {$t("data.birthday")}
        </div>
        <div
          class="text-white text-sm font-normal text-right mr-2 ml-3 break-all"
        >
          {$t("data.value.birthday")}
        </div>
      </div>
    </div>
  </div>
</div>
