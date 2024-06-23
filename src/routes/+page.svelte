<script>
  import { page } from "$app/stores";
  import { t } from "../i18n";
  import { badges, badgeClasses } from "../data";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class={$page.url.pathname === "/" ? "" : "hidden"}>
  <div class="mt-8 border rounded-lg shadow bg-gray-800 border-gray-700">
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
        {$t("about.skills")}
      </h5>
      <div class="p-3 -m-1 flex flex-wrap justify-center">
        {#each badges as badge}
          <div class="my-0.5 m-1">
            <span
              class={"text-xs font-medium px-2.5 py-0.5 rounded border" +
                badgeClasses(badge.color)}>{badge.name}</span
            >
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
