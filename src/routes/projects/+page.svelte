<script lang="ts">
import { badgeCustomColorClasses, projects } from "../../data";
import { t } from "../../i18n";

function getImageUrl(imageName: string) {
	return `/images/${imageName}`;
}
</script>

<svelte:head>
  <title>Alejandro López Labajo | Portfolio</title>
  <meta name="description" content="Portfolio" />
</svelte:head>

<div class=" mt-8 border rounded-lg shadow bg-gray-800 border-gray-700">
  <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white pb-3">
      {$t("projects.title")}
    </h5>
    <div class="grid grid-cols-12 gap-4">
      {#each projects as project}
        <div
          class="col-span-12 sm:col-span-6 border rounded-lg shadow bg-gray-700 border-gray-700"
        >
          <img
            alt=""
            class="rounded-t-lg"
            src={getImageUrl("projects/" + project.id + ".png")}
          />
          <div class="p-5">
            <h5 class="mb-3 text-2xl font-bold tracking-tight text-white">
              <img
                alt=""
                class="inline-block mr-3 mb-1 w-7 h-7"
                src={getImageUrl("icos/" + project.id + ".ico")}
              />
              {project.title}
            </h5>
            <a
              type="button"
              target="_blank"
              href={project.github}
              rel="noopener noreferrer"
              class="text-white bg-[#24292F] hover:bg-[#24292F]/50 focus:ring-3 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-3.5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                >
                </path>
              </svg>
            </a>
            <a
              type="button"
              target="_blank"
              href={project.web}
              rel="noopener noreferrer"
              class="text-white bg-[#050708] focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-3.5 py-2.5 text-center inline-flex items-center focus:ring-[#050708]/50 hover:bg-[#050708]/50 mr-2 mb-2"
            >
              <svg
                class="w-4 h-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                >
                </path>
              </svg>
            </a>
            <div class="px-1 pt-0.5 pb-0.5 mt-1 mb-3 -m-1 flex flex-wrap">
              {#each project.badges as tech}
                <div class="my-0.5 m-0.5">
                  <span
                    class={"inline-flex items-center justify-center text-center text-xs font-medium px-2.5 py-0.5 rounded-lg border" +
                      badgeCustomColorClasses(tech.badge.color)}
                  >
                    <img
                      alt={tech.id}
                      class="size-5 mix-blend-normal mr-1.5 inline-block"
                      src={getImageUrl("svgs/" + tech.id + "-color.svg")}
                    />
                    {tech.badge.name}
                  </span>
                </div>
              {/each}
            </div>
            <p class="font-normal text-gray-400">
              {$t("projects." + project.id + ".desc")}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
