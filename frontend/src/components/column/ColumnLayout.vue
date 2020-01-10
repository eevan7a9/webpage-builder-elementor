<template>
  <div class="choice-wrapper">
    <div class="border border-secondary">
      col
    </div>
    <div class="border border-secondary">
      col
    </div>
    <div class="border border-secondary">
      col
    </div>
    <div class="border border-secondary">
      col
    </div>
    <div class="border border-secondary">
      col
    </div>
    <div class="border border-secondary">
      col
    </div>
    <div class="border border-secondary">
      col
    </div>
    <div class="border border-secondary">
      col
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.choice-wrapper {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
