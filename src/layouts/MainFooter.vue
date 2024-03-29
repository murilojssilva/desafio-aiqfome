<template>
    <footer class="bg-bars">
      <div class="flex flex-col py-8 items-center">
        <p class="text-sm font-bold text-footer_text">feito com 💜 em maringá-PR</p>
        <h1 class="text-lg font-bold text-footer_text">aiqfome.com © 2007-{{ new Date().getFullYear() }} aiqfome LTDA . CNPJ: 09.186.786/0001-58</h1>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'MainHeader',
    props: {}
  }
  </script>
