<script lang="ts">
  import { page } from "$app/stores";
  import { t } from "../i18n";
  import { badges, badgeClasses, certificaciones } from "../data";

  function getImageUrl(imageName: string) {
    return new URL(`/src/lib/images/${imageName}`, import.meta.url).href;
  }
</script>

<svelte:head>
  <title>Alejandro López Labajo | Portfolio</title>
  <meta name="description" content="Portfolio" />
</svelte:head>

<div class={$page.url.pathname === "/" ? "" : "hidden"}>
  <div class="mt-8 border rounded-lg shadow bg-gray-800 border-gray-700">
    <div class="p-5">
      <h5 class="mb-2 text-md text-white pb-5">
        <p>{$t("about.p1")}</p>
        <p>{$t("about.p2")}</p>
        <p>{$t("about.p3")}</p>
        <p>{$t("about.p4")}</p>
        <p>
          {$t("about.p5")}<a
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://svelte.dev"
            style="color:#FF3E00"
          >
            <img
              class="size-5 mix-blend-normal ml-0.5 mr-0.5 inline-block"
              src={getImageUrl("svgs/svelte-color.svg")}
            />Svelte
          </a>
        </p>
      </h5>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
        {$t("about.skills")}
      </h5>
      <div class="p-3 -m-1 flex flex-wrap justify-center">
        {#each badges as badge}
          <div class="my-0.5 m-1">
            <span
              class={"text-xs font-medium px-2.5 py-0.5 rounded border" +
                badgeClasses(badge.color)}
            >
              {badge.name}
            </span>
          </div>
        {/each}
      </div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
        {$t("about.certificaciones")}
      </h5>
      <div
        class="p-3 -m-1 container mx-auto sm:px-4 max-w-full mx-auto sm:px-4"
      >
        <div class="flex flex-wrap">
          {#each certificaciones as cert}
            <div class="w-1/4 sm:w-1/6">
              <img
                class="w-full"
                src={getImageUrl("certs/" + cert.toString())}
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
