<template>
  <div class="choice-wrapper">
    <div class="item-wrapper">
      <p class="m-0 p-0">No Layout</p>
      <span>1 ~ more</span>
      <div class="choice-item item-1">
        <div class="item">+</div>
        <div class="item question-mark font-weight-bold">
          ?
        </div>
      </div>
    </div>
    <div class="item-wrapper">
      <p class="m-0 p-0">Layout</p>
      <span>1/2 ~ 1/2 </span>
      <div class="choice-item item-2">
        <div class="item">+</div>
        <div class="item">+</div>
      </div>
    </div>
    <div class="item-wrapper">
      <p class="m-0 p-0">Layout</p>
      <span>1/4 ~ 3/4 </span>
      <div class="choice-item item-3">
        <div class="item">+</div>
        <div class="item">+</div>
      </div>
    </div>
    <div class="item-wrapper">
      <p class="m-0 p-0">Layout</p>
      <span> 1/5 ~ 4/5 </span>
      <div class="choice-item item-4">
        <div class="item">+</div>
        <div class="item">+</div>
      </div>
    </div>
    <div class="item-wrapper">
      <p class="m-0 p-0">Layout</p>
      <span>1/5 ~ 3/5 ~ 1/5</span>
      <div class="choice-item item-5">
        <div class="item">+</div>
        <div class="item">+</div>
        <div class="item">+</div>
      </div>
    </div>
    <div class="item-wrapper">
      <p class="m-0 p-0">Layout</p>
      <span>1/6 ~ 2/6 ~ 3/6</span>
      <div class="choice-item item-6">
        <div class="item">+</div>
        <div class="item">+</div>
        <div class="item">+</div>
      </div>
    </div>
    <div class="item-wrapper">
      <p class="m-0 p-0">Layout</p>
      <span>1/7 ~ 3/7 ~ 37</span>
      <div class="choice-item item-7">
        <div class="item">+</div>
        <div class="item">+</div>
        <div class="item">+</div>
      </div>
    </div>
    <div class="item-wrapper">
      <p class="m-0 p-0">Layout</p>
      <span>1/5 ~ 1/5 ~ 2/5</span>
      <div class="choice-item item-8">
        <div class="item">+</div>
        <div class="item">+</div>
        <div class="item">+</div>
        <div class="item">+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.choice-wrapper {
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
  .item-wrapper {
    .choice-item {
      display: grid;
      grid-column-gap: 1px;
      grid-template-rows: 100px;
      div {
        background: #9fa0a1;
        border-radius: 5px;
        border: 1.5px solid #534d50;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
      }
      &.item-1 {
        grid-template-columns: repeat(2, 1fr);
      }
      &.item-2 {
        grid-template-columns: repeat(2, 1fr);
      }
      &.item-3 {
        grid-template-columns: 35% 1fr;
      }
      &.item-4 {
        grid-template-columns: 20% 1fr;
      }
      &.item-5 {
        grid-template-columns: 20% 1fr 20%;
      }
      &.item-6 {
        grid-template-columns: 16.7% 33% 1fr;
      }
      &.item-7 {
        grid-template-columns: 14% 1fr 1fr;
      }
      &.item-8 {
        grid-template-columns: 20% 20% 20% 1fr;
      }
    }
    &.item-wrapper:hover {
      .choice-item {
        div {
          background: #e7e9ed;
          border: 2px solid #b7084e;
          color: #b7084e;
          font-weight: bold;
          transition: 0.5s;
        }
        &.item-1 {
          .question-mark {
            border: 3px solid #2488e6;
            color: #2488e6;
          }
        }
      }
    }
  }
}
</style>
