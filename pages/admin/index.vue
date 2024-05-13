<script setup>
import {useAdminStore} from "~/store/admin/admin.js";

const adminStore = useAdminStore();



adminStore.tokenize('token-test');
adminStore.tokenVerification();

</script>

<template>
  <div class="admin">
    <aside class="admin__aside">
      <AdminNavigation/>
    </aside>
    <main class="admin__content">
      <h2>Добро пожаловать в систему управления контентом.</h2>
      <p>
        Реализовал простенькую админ панель, чтобы вы смогли самостоятельно обновлять и редактировать данные об
        актёрах и проектах
      </p>
    </main>
  </div>
</template>

<style scoped lang="scss">
.admin {
  &__aside {
    max-width: 300px;
  }

  &__content {
    padding: 20px 20px 20px 320px;
  }
}
</style>