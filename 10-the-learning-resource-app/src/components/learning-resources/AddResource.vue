<template>
  <base-dialog v-if="isInputInvalid" title="Invalid Input" @close="closeDialog">
    <template v-slot:default>
      <p>Unfortunately, at least one input is invalid.</p>
      <p>Please make sure you enter at least a few characters into each input field.</p>
    </template>
    <template v-slot:actions>
      <base-button @click="closeDialog">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="onSubmitResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="enteredTitle" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="enteredDescription"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="enteredLink" />
      </div>

      <div class="form-control">
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  components: {
    BaseDialog
  },
  inject: ['addNewResource'],
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',
      isInputInvalid: false
    };
  },
  methods: {
    onSubmitResource() {
      if (
        this.enteredTitle.length === 0 ||
        this.enteredDescription.length === 0 ||
        this.enteredLink === 0
      ) {
        this.isInputInvalid = true;
      } else {
        this.addNewResource(
          this.enteredTitle,
          this.enteredDescription,
          this.enteredLink
        );
        this.enteredTitle = '';
        this.enteredDescription = '';
        this.enteredLink = '';
      }
    },
    closeDialog() {
      this.isInputInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
