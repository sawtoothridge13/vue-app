<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Login</h1>
        <hr />
        <form-tag @myevent="submitHandler" name="myForm" event="myevent">
          <text-input
            v-model="email"
            label="Email"
            type="email"
            name="email"
            required="true"
          >
          </text-input>

          <text-input
            v-model="password"
            label="Password"
            type="password"
            name="password"
            required="true"
          >
          </text-input>
          <hr />
          <input type="submit" class="btn btn-primary" value="login" />
        </form-tag>
      </div>
    </div>
  </div>
</template>

<script>
import notie from 'notie';
import router from '../router/index.js';
import FormTag from './forms/FormTag.vue';
import TextInput from './forms/TextInput.vue';
import { store } from './store.js';

export default {
  name: 'LoginComp',
  components: {
    FormTag,
    TextInput,
  },
  data() {
    return {
      email: '',
      password: '',
      store,
    };
  },
  methods: {
    submitHandler() {
      console.log('SubmitHandler success!');

      const payload = {
        email: this.email,
        password: this.password,
      };

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload),
      };

      fetch('http://localhost:8081/users/login', requestOptions)
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            console.log('Error:', response.message);
            notie.alert({
              type: 'error',
              text: response.message,
              // stay: true,
              // position: bottom,
            });
          } else {
            console.log('Token:', response.data.token.token);
            store.token = response.data.token.token;
            router.push('./');
          }
        });
    },
  },
};
</script>
