<template>
    <div class="animated-page">
        <div class="center">
          <div class="card">
            <div class="illustration">
              <div class="car">
                <div class="body">
                  <div class="body-front"></div>
                  <div class="body-back"></div>
                  <div class="window"></div>
                </div>
                <div class="front wheel"></div>
                <div class="back wheel"></div>
              </div>
              <div class="layer-0"></div>
              <div class="layer-1">
                <div class="chunk-1">
                  <div class="tree"></div>
                  <div class="tree"></div>
                  <div class="bush"></div>
                  <div class="tree"></div>
                  <div class="tree"></div>
                  <div class="tree"></div>
                </div>
                <div class="chunk-2">
                  <div class="tree"></div>
                  <div class="tree"></div>
                  <div class="tree"></div>
                  <div class="bush"></div>
                  <div class="tree"></div>
                  <div class="tree"></div>
                </div>
              </div>
              <div class="layer-2">
                <div class="chunk-1">
                  <div class="house"></div>
                  <div class="house"></div>
                  <div class="house"></div>
                </div>
                <div class="chunk-2">
                  <div class="house"></div>
                  <div class="house"></div>
                  <div class="house"></div>
                  <div class="house"></div>
                </div>
              </div>
              <div class="hill"></div>
            </div>
            <div class="content">
              <h2>Your order is on its way!</h2>
              <a @click="$router.replace('/')">点我返回首页</a>
            </div>
          </div>
        </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimatedPage',
  };
  </script>
  
  <style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:400,900&display=swap');
  
  $car-body: white;
  $car-window: #8DA8A6;
  $car-accent: #FE5F55;
  $car-wheel: #333;
  $car-wheel-rim: #DDD;
  
  $card: #fff;
  $layer-0: #999;
  $layer-1: #B6C997;
  $layer-2: #E5D0BE;
  $layer-3: #E4EFD2;
  $layer-4: #EDF9F8;
  
  $text: #2C3534;
  
  .animated-page {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .stripe {
    position: relative;
    height: 30rem;
    width: 100%;
    background: $car-accent;
    transform: rotate(-30deg);
  }
  
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .card {
    position: relative;
    background: $card;
    color: $text;
    width: 24rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0 8rem 0 rgba(black, 0.2), 0 2rem 4rem -3rem rgba(black, 0.9);
  
    .dismiss {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 2rem;
      height: 2rem;
      opacity: 0.6;
      cursor: pointer;
      z-index: 50;
      transition: opacity 200ms, transform 200ms cubic-bezier(.25, 1, 0.5, 2);
  
      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 1rem;
        height: 1.5rem;
        width: 0.25rem;
        background: $text;
        border-radius: 1rem;
        transform: rotate(45deg);
      }
  
      &:after {
        transform: rotate(-45deg);
      }
  
      &:hover {
        opacity: 0.8;
        transform: scale(1.1);
      }
    }
  
    .illustration {
      position: relative;
      height: 10rem;
      background: $layer-4;
      overflow: hidden;
    }
  
    .content {
      padding: 2rem;
  
      h2,
      p {
        opacity: 0.7;
        margin: 0;
      }
  
      h2 {
        opacity: 0.9;
        margin-bottom: 1rem;
      }
    }
  }
  
  .car {
    position: absolute;
    top: 7rem;
    left: 10rem;
    z-index: 30;
    animation: car 10s infinite ease-in-out;
  
    .body {
      position: absolute;
      animation: car-body 0.5s infinite;
    }
  
    .body-front {
      content: '';
      position: absolute;
      left: 3rem;
      bottom: -2rem;
      height: 1rem;
      width: 1rem;
      background: $car-body;
  
      &:after {
        content: '';
        position: absolute;
        bottom: 1rem;
        height: 0;
        width: 0;
        border-bottom: 1rem solid $car-body;
        border-right: 1rem solid transparent;
      }
    }
  
    .body-back {
      position: absolute;
      height: 2rem;
      width: 3rem;
      background: $car-body;
      overflow: hidden;
  
      &:after {
        content: '';
        position: absolute;
        height: 0.5rem;
        width: 3rem;
        background: $car-accent;
        transform: translate(-0.5rem, 0.2rem) rotate(-30deg);
      }
    }
  
    .window {
      position: absolute;
      width: 0.4rem;
      height: 0.9rem;
      background: $car-window;
      top: 0.1rem;
      left: 2.55rem;
  
      &:after {
        content: '';
        position: absolute;
        left: 0.4rem;
        height: 0;
        width: 0;
        border-bottom: 0.9rem solid $car-window;
        border-right: 0.9rem solid transparent;
      }
    }
  
    .wheel {
      position: absolute;
      top: 1.5rem;
      left: 0.25rem;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: $car-wheel;
  
      &:after {
        content: '';
        position: absolute;
        height: 0.5rem;
        width: 0.5rem;
        left: 0.25rem;
        top: 0.25rem;
        border-radius: 50%;
        background: $car-wheel-rim;
      }
  
      &.front {
        left: 2.75rem;
      }
    }
  }
  
  .tree {
    position: absolute;
    width: 0.5rem;
    height: 1rem;
    background: inherit;
    top: -0.5rem;
  
    &:after {
      content: '';
      position: absolute;
      bottom: 1rem;
      left: -0.75rem;
      height: 4rem;
      width: 2rem;
      background: inherit;
      border-radius: 3rem 3rem 2rem 2rem/8rem 8rem 4rem 4rem;
    }
  }
  
  .bush {
    position: absolute;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background: inherit;
    box-shadow: 2.5rem -0.1rem 0 0.1rem $layer-1;
    transform: scale(0.8);
    top: -1rem;
  
    &:before {
      content: '';
      position: absolute;
      left: 1rem;
      top: -0.5rem;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
      background: inherit;
      box-shadow: 1rem 0.25rem 0 0.25rem $layer-1;
    }
  
    &:after {
      content: '';
      position: absolute;
      left: 1rem;
      bottom: 0;
      height: 1.2rem;
      width: 2.25rem;
      background: inherit;
    }
  }
  
  .house {
    position: absolute;
    left: 10rem;
    width: 4rem;
    height: 2rem;
    background: inherit;
    top: -2rem;
  
    &:after {
      content: '';
      position: absolute;
      bottom: 2rem;
      border-left: 2rem solid transparent;
      border-right: 2rem solid transparent;
      border-bottom: 1.5rem solid $layer-2;
    }
  }
  
  .hill {
    position: absolute;
    background: $layer-3;
    width: 16rem;
    height: 8rem;
    border-radius: 50%;
    top: 4rem;
    left: 2rem;
  
    &:after {
      content: '';
      position: absolute;
      width: 16rem;
      height: 6rem;
      background: inherit;
      border-radius: 50%;
      top: 1rem;
      left: 6rem;
    }
  
    &:before {
      content: '';
      position: absolute;
      width: 20rem;
      height: 8rem;
      background: inherit;
      border-radius: 50%;
      top: 1rem;
      left: -10rem;
    }
  }
  
  .layer-0 {
    position: absolute;
    background: $layer-0;
    width: 24rem;
    height: 1.5rem;
    top: 9rem;
    z-index: 25;
  }
  
  .layer-1 {
    position: absolute;
    background: $layer-1;
    width: 24rem;
    height: 1.5rem;
    top: 8.5rem;
    z-index: 20;
  
    .chunk-1 {
      position: absolute;
      background: inherit;
      animation: chunk 6s linear infinite;
  
      div:nth-child(1) {
        left: 3rem;
      }
  
      div:nth-child(2) {
        left: 6rem;
      }
  
      div:nth-child(3) {
        left: 7rem;
      }
  
      div:nth-child(4) {
        left: 12em;
      }
  
      div:nth-child(5) {
        left: 15rem;
      }
  
      div:nth-child(6) {
        left: 20rem;
      }
    }
  
    .chunk-2 {
      position: absolute;
      background: inherit;
      transform: translateX(24rem);
      animation: chunk 6s 3s linear infinite;
  
      div:nth-child(1) {
        left: 3rem;
      }
  
      div:nth-child(2) {
        left: 6rem;
      }
  
      div:nth-child(3) {
        left: 9rem;
      }
  
      div:nth-child(4) {
        left: 11em;
      }
  
      div:nth-child(5) {
        left: 17rem;
      }
  
      div:nth-child(6) {
        left: 22rem;
      }
    }
  }
  
  .layer-2 {
    position: absolute;
    background: $layer-2;
    width: 24rem;
    height: 2rem;
    top: 8rem;
    z-index: 10;
  
    .chunk-1 {
      position: absolute;
      background: inherit;
      animation: chunk 12s linear infinite;
  
      div:nth-child(1) {
        left: 3rem;
      }
  
      div:nth-child(2) {
        left: 8rem;
      }
  
      div:nth-child(3) {
        left: 13rem;
      }
    }
  
    .chunk-2 {
      position: absolute;
      background: inherit;
      transform: translateX(24rem);
      animation: chunk 12s 6s linear infinite;
  
      div:nth-child(1) {
        left: 3rem;
      }
  
      div:nth-child(2) {
        left: 8rem;
      }
  
      div:nth-child(3) {
        left: 13rem;
      }
  
      div:nth-child(4) {
        left: 18rem;
      }
    }
  }
  
  @keyframes chunk {
    0% {
      transform: translateX(24em);
    }
    100% {
      transform: translateX(-24em);
    }
  }
  
  @keyframes car-body {
    0%,
    100% {
      transform: translate(0, 0);
    }
  
    25% {
      transform: translate(0, -0.05em);
    }
  
    75% {
      transform: translate(0, 0.05em);
    }
  }
  
  @keyframes car {
    0% {
      transform: translateX(-24em);
    }
    20%,
    80% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(24em);
    }
  }
  </style>
  