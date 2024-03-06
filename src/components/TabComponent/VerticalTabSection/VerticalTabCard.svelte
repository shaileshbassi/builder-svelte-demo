<script lang="ts">
  interface CardItem {
    tabCardTitle: string;
    tabCardDescription: string;
    tabCardImage: string;
    tabCardLink: string;
  }
  interface TabItem {
    tabHeading: string;
    tabDescription: string;
    tabVideoOrImage: string;
    tabButtonText: string;
    tabButtonLink: string;
    tabCardItem: CardItem[];
  }
  export let item: TabItem;
</script>

<div
  class="lg:flex lg:px-4 lg:py-2
       md:p-2 lg:mx-[25px]"
  data-testid="container-div"
>
  <div class="md:p-2 lg:items-start lg:py-2 lg:pr-8 flex flex-col lg:w-[100%]">
    <h1
      class="text-3xl lg:text-[44px] lg:leading-[46px] font-medium lg:mt-6 text-color-text-gray"
    >
      {item?.tabHeading}
    </h1>
    <p
      class="text-lg font-normal mt-2 leading-snug text-color-text-gray sm:pr-[3.8125rem] lg:pr-0 md:text-lg lg:text-lg lg:mt-6"
    >
      {item?.tabDescription}
    </p>
    {#if item.tabCardItem && item.tabCardItem.length > 0}
      <div
        class="grid grid-flow-col overflow-x-scroll auto-cols-max gap-4 lg:gap-6 no-scrollbar lg:w-[100%]"
      >
        {#each item.tabCardItem as card}
          <div
            class="mt-6 w-[14.5rem] lg:w-[10.5rem] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0px_0px_8px_rgba(98,100,105,.2),0px_0px_8px_rgba(98,100,105,.2)] lg:hover:border-[1px] lg:hover:border-solid lg:hover:border-color-text-gray"
          >
            <img class="rounded-t-lg" src={card.tabCardImage} alt="cardimg" />
            <div>
              <a href={card.tabCardLink} data-testid="card-link">
                <h5
                  class="mt-4 mx-4 mb-1 text-xl leading-tight font-semibold tracking-tight text-gray-900 dark:text-white hover:underline"
                >
                  {card.tabCardTitle}
                </h5>
              </a>
              <p class="mx-4 mb-4 font-normal text-gray-700 dark:text-gray-400">
                {card.tabCardDescription}
              </p>
            </div>
          </div>
        {/each}
      </div>
    {:else if item?.tabVideoOrImage.includes("/image")}
      <img
        src={item.tabVideoOrImage}
        class="width:100% object-fill lg:h-[300px] rounded-lg mb-2 lg:w-[90%] mt-8"
        alt="img"
      />
    {:else}
      <div
        class="mt-6 relative w-[100%] overflow-hidden pt-[56.25%] rounded-lg"
      >
        <iframe
          width="100%"
          src={item?.tabVideoOrImage}
          frameborder="0"
          allowfullscreen
          title="video"
          class="absolute top-0 left-0 bottom-0 right-0 h-[100%] border-none"
          data-testid="project-video"
        ></iframe>
      </div>
    {/if}
    <div class="flex mt-6 lg:justify-start mb-6 lg:mt-8">
      <button
        class=" px-6 bg-color-footer-green rounded border-8 text-lg text-white border-transparent lg:py-2 lg:px-8 lg:text-xl"
      >
        <a
          href={item?.tabButtonLink}
          class="flex gap-1 items-center"
          data-testid="link"
        >
          {item?.tabButtonText}
          <svg
            fill="#ffffff"
            height="12px"
            width="12px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
            stroke="#ffffff"
            stroke-width="8.6"
            class="mt-[2px]"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
              />
            </g>
          </svg>
        </a>
      </button>
    </div>
  </div>
</div>
