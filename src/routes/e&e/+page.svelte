<script>
  import { t } from "../../i18n";
</script>

<svelte:head>
  <title>Alejandro López Labajo | Portfolio</title>
  <meta name="description" content="Portfolio" />
</svelte:head>

<div class="mt-8 border rounded-lg shadow bg-gray-800 border-gray-700">
  <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white pb-3">
      {$t("ee.title1")}
    </h5>
    <ol class="relative border-l border-gray-700">
      <li class="ml-4">
        <div
          class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-500">
          {$t("ee.experience.1.date")}
        </time>
        <h3 class="text-lg font-semibold text-white">
          {$t("ee.experience.1.title")}
        </h3>
        <p class="text-base font-normal text-gray-400">Altia</p>
        <p class="text-sm font-normal text-gray-400">
          {$t("ee.experience.1.desc")}
        </p>
      </li>
    </ol>
  </div>
</div>
<div class="mt-8 border rounded-lg shadow bg-gray-800 border-gray-700">
  <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white pb-3">
      {$t("ee.title2")}
    </h5>
    <ol class="relative border-l border-gray-700">
      <li class="mb-6 ml-4">
        <div
          class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-500">
          {$t("ee.education.2.date")}
        </time>
        <h3 class="text-lg font-semibold text-white">
          {$t("ee.education.2.title")}
        </h3>
        <p class="text-base font-normal text-gray-400">Tajamar</p>
        <p class="text-sm font-normal text-gray-400">
          {$t("ee.education.2.desc")}
        </p>
        <p class="text-sm font-normal text-gray-400">
          {$t("ee.education.2.desc2")}
        </p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-500">
          {$t("ee.education.1.date")}
        </time>
        <h3 class="text-lg font-semibold text-white">
          {$t("ee.education.1.title")}
        </h3>
        <p class="text-base font-normal text-gray-400">
          Salesianas Plaza Castilla
        </p>
        <p class="text-sm font-normal text-gray-400">
          {$t("ee.education.1.desc")}
        </p>
        <p class="text-sm font-normal text-gray-400">
          {$t("ee.education.1.desc2")}
        </p>
      </li>
    </ol>
  </div>
</div>
