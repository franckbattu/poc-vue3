<template>
  <div class="footer">
    <div class="sections">
      <section>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quas
        maiores beatae ab reiciendis praesentium, sed voluptas fuga sequi
        debitis harum voluptates illum similique modi dolorum quos officia
        facere!
      </section>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nesciunt
        asperiores dolor laborum necessitatibus totam itaque minima nemo rem,
        vel blanditiis perspiciatis ipsum explicabo veritatis, sed autem est sit
        et!
      </section>
      <section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        veritatis ex, distinctio molestias iusto vel sed! A rerum provident,
        assumenda officia cumque quia iusto facilis est totam perspiciatis,
        tempore dolores.
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--blue-darken-3);
  width: 100%;
  color: var(--white);
  margin-top: 2rem;
  font-size: 0.9rem;

  > .sections {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 2rem 1.5rem;
  }
}
</style>