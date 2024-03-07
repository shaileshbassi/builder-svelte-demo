<script lang="ts">
    //@ts-nocheck
    import { browser } from '$app/environment';
    import Carousel from 'svelte-carousel';
  
    let slider: any;
    // let Carousel:any;
    export let title: any;
    export let cardData: any;
  
    let count = 0;
  
    // onMount(()=>{
    //   import ("svelte-carousel").then(module => {
    //     Carousel = module.default;
    //   });
    // })
    function updateCarouselPosition() {
      if (slider) {
        const transformValue = `${count}px`;
        document.documentElement.style.setProperty(
          "--container-transform",
          transformValue
        );
      }
    }
  
    function goToNextSlide() {
      if (slider && count < cardData.length - 1) {
        slider.goToNext();
        count++;
        updateCarouselPosition();
      }
    }
    function goToPrevSlide() {
      if (slider && count > 0) {
        slider.goToPrev();
        count--;
        updateCarouselPosition();
      }
    }
  </script>
  
  {#if browser}
    <div class="flex flex-col ml-3 md:ml-32 bg-primary-white py-5 gap-5 md:py-7">
      <div class="flex w-full gap-4">
        <h2 class="w-[60%] font-[600] text-[24px] md:w-[70%] md:text-[28px]">
          {title}
        </h2>
        <div class="flex w-[40%] items-end gap-2 md:gap-6 justify-center">
          <button
            on:click={goToPrevSlide}
            class="h-[contain] border rounded-full py-1 bg-slate-300 px-2 hover:bg-slate-600 hover:text-white flex flex-col gap-[3px] justify-center items-center"
          >
            <div class="prevButton rotate-[135deg]"></div>
            <div class="prevButton rotate-[45deg]"></div>
          </button>
          <button
            on:click={goToNextSlide}
            class="h-[contain] border rounded-full py-1 px-2 bg-slate-300 hover:bg-slate-600 hover:text-white flex flex-col gap-[3px] justify-center items-center"
          >
          <div class="nextButton rotate-45"></div>
          <div class="nextButton rotate-[135deg]"></div>
          </button>
        </div>
      </div>
      <Carousel
        bind:this={slider}
        particlesToShow={1}
        particlesToScroll={1}
        dots={false}
        infinite={false}
        arrows={false}
      >
        <div class="sliderCardWrapper flex pl-3">
          {#each cardData as slide}
            <div
              class=" sliderCard cursor-pointer mb-5 gap-2 md:gap-6 bg-gray-100 py-6 px-4 md:px-6 md:py-8"
            >
              <img
                src={slide.image}
                alt={slide.heading}
                class="Imageslider w-10 h-10 md:w-12 md:h-12 object-fill"
              />
              <div class="flex flex-col md:gap-2 mb-3 md:mb-4">
                <h2 class="text-[20px] font-[600] md:text-[24px]">
                  {slide.heading}
                </h2>
                <p class="text-[16px] md:text-[20px] font-[400]">
                  {slide.description}
                </p>
                <a href={slide.linkUrl} class="text-color-sky-blue"
                  >{slide.linkTitle}<span class="w-8 h-8 ml-1"> &#8250;</span></a
                >
              </div>
            </div>
          {/each}
        </div>
      </Carousel>
    </div>
  {/if}
  
  
  
  <style>
  
      .nextButton{
          border-bottom:1.5px solid ;
          width: 10px;
          height: 10px;
          margin-left: 7px;
      }
      .prevButton{
          border-top:1.5px solid  ;
          width: 10px;
          height: 10px;
          margin-right: 7px;
      }
      .sliderCardWrapper{
          transition: .5s;
          transform: translateX(calc(var(--container-transform) * -260)) ;
      }
    .sliderCard {
      display: flex !important;
      flex-direction: column;
      padding-bottom: 8px;
      box-shadow: 0px 6px 9px gray;
      min-width: 240px !important;
      overflow-x: hidden;
      margin-right: 20px;
    }
    @media (min-width: 1024px) {
      .sliderCardWrapper{
          transition: .5s;
          transition-timing-function: ease-in-out;
          transform: translateX(calc(var(--container-transform) * -440)) ;
      }
  
      .sliderCard {
        min-width: 420px !important;
        transition: 0.25s;
        margin-top: 20px;
      }
      .sliderCard:hover {
        transform: translateY(-10px);
      }
    }
  </style>
  