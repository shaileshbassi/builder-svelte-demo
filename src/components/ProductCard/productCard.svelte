<script lang="ts">
  export let articles: any;
</script>

  <div class="px-[10px] max-w-[1200px] mt-4">
    <h1 class="mb-8 text-2xl leading-snug text-[#3dcd58] px-2 flex justify-center">Products</h1>
    <div class="flex flex-wrap">
      {#each articles as article, index}
        <div
          class="px-2 relative mb-5 sm:flex-grow-0 sm:flex-shrink-0 lg:px-3 w-[350px]"
        >
          <article
            class="flex flex-col h-[100%] bg-[#fff] shadow-[5px_5px_5px_0_rgba(51,51,51,0.14),0_1px_7px_0_rgba(51,51,51,0.2)] border-properties"
          >
            <div class="relative">
              <img
                src={article.data.image}
                alt="image{index}"
                class="w-[100%] h-[215px] object-cover object-[0%_35%]"
              />
            </div>
            <div class="wiztopic-content flex flex-col flex-grow-[1] p-[30px]">
              <a href="/">
                <p class="mb-3 text-lg leading-snug text-gray-700">
                  {article?.data?.productName}
                </p>
              </a>
              <div class="text-xs leading-tight flex-auto">
                <div class="location mb-3 flex">
                  <span class="text-colorGrey text-sm"
                    >{article.data.productDesc.slice(0, 80)}{article.data
                      .productDesc.length > 150
                      ? "..."
                      : ""}</span
                  >
                </div>
                <div class="date-published mb-4 flex">
                  <span class="text-colorGrey text-base"
                    >&#x20B9 {article?.data?.price}</span
                  >
                </div>
                <div class="press-releases_tags flex flex-wrap mb-7">
                    <!-- {#each article?.data?.tags as tagTitle} -->
                      <p class="mr-1 text-inherit mb-1 px-3 border-properties rounded-[10px] leading-[18px]">
                        {article?.data?.brand?.value?.data?.brandName}
                      </p>
                    <!-- {/each} -->
                  </div>
              </div>
              <div
                class="learn-more text-sm leading-snug text-[#42b4e6] bg-black flex justify-center"
              >
                <button class="p-3 text-white">Add To Cart</button>
              </div>
            </div>
          </article>
        </div>
      {/each}
    </div>
  </div>
