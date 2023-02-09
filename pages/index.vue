<script setup>
import { ref } from 'vue';
const { locale, locales } = useI18n();

const name = ref('');
const files = ref([]);

const setFile = (event) => {
  let uploadedFiles = event.target.files;

  for (let i = 0; i < uploadedFiles.length; i++) {
    files.value.push(uploadedFiles[i]);
  }
};

const sendForm = async () => {
  let formData = new FormData();

  formData.append('name', name.value);

  for (let i = 0; i < files.value.length; i++) {
    formData.append('files[' + i + ']', files.value[i]);
  }

  const { data, err } = await useFetch(`/api/send`, {
    method: 'POST',
    body: formData,
  });
};
</script>
<template>
  <div class="py-5">
    <h2>{{ $t('hello') }}</h2>
    <p class="mt-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cumque molestias at, consectetur eum laborum.
      Distinctio repellendus rem rerum possimus sint omnis dignissimos eius ipsum quos! Maiores quam necessitatibus
      doloremque laboriosam rerum similique non dolor. Voluptatibus deleniti ratione earum doloremque repellendus dicta?
      Error modi reprehenderit cumque illo provident non asperiores architecto officiis, quam harum aut sunt voluptates,
      in expedita fugit. Tenetur doloribus quos cupiditate corporis cumque, sint, explicabo nihil vitae corrupti,
      consectetur molestiae error quam ipsa hic eos deserunt debitis! Libero cupiditate consequatur ullam ad mollitia ea
      minima magnam placeat consectetur. Quibusdam similique ipsum quam porro numquam iure necessitatibus doloremque
      inventore, ab, saepe sunt nemo minus perferendis rem expedita enim id magnam quasi officia distinctio maiores
      explicabo. Officiis, obcaecati! Accusamus perspiciatis ipsa ipsam cumque tempore maiores quasi explicabo rerum
      minus quaerat, obcaecati sed voluptatum mollitia voluptatem quibusdam.
    </p>

    <form @submit.prevent="sendForm()" class="d-flex flex-column w-50 gap-3 mt-5">
      <h2 class="">Отправьте форму</h2>
      <input type="text" placeholder="Name" v-model="name" />
      <input type="file" name="" id="" @change="setFile($event)" />
      <button class="btn btn-primary">Отправить</button>
    </form>
  </div>
</template>
