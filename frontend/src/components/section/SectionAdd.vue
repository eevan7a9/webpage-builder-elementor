<template>
  <div class="add-section border-color-redish rounded">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="rounded-circle"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.add-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  svg {
    color: aliceblue;
    background: #b7084e;
    transition: 0.5s;
    padding: 5px;
  }
  &:hover {
    svg {
      background: rgb(31, 209, 8);
    }
  }
}
</style>
