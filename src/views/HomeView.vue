<template>
  <div class="demo-home-container">
    <div class="demo-home">
      <img
        class="demo-logo"
        alt="Restaurant icon"
        src="../assets/logo-mini-2.png"
        width="250"
      />
      <p class="demo-title">¡Bienvenido a la beta de Wellington!</p>
      <img
        class="demo-logo"
        alt="Restaurant icon"
        src="../assets/demo-home-icon.png"
        width="60"
      />
      <p class="demo-version">v0.2.0</p>
      <p class="demo-copyright">© Wellington-Eagle 2023</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.demo-home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
}

.demo-home {
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.demo-title {
  padding-top: 25px;
  font-weight: 700;
  font-size: 35px;
  color: #2c3e50;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
.demo-version {
  padding-top: 20px;
  font-weight: 700;
  font-size: 23px;
  color: #00898f;
}
.demo-copyright {
  padding-top: 40px;
  color: #2c3e50;
}
</style>
