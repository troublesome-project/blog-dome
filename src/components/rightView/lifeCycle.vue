<template>
  <div>
    <div class="life_box">
      <ul>
        <li>
          <h3></h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LifeCycle'
}
</script>
<style lang="scss" scoped>
.life_box {
  padding: 0 0.2rem 0.2rem 0.2rem;
  font-size: 0.16rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      p {
        padding: 0.05rem 0.1rem;
        border-radius: 0.02rem;
      }
      div {
        padding: 0.1rem 0.2rem;
        border-radius: 0.04rem;
        background-color: #222222;
        color: #e6e6e6;
      }
    }
  }
}
</style>
