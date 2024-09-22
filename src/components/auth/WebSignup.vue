<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
      <div class="text-center">
        <router-link to="/" class="text-decoration-none">
          <img src="../../assets/images/Vector.png" alt="Logo" />
        </router-link>
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3" @submit.prevent="register">
        <div class="row">
          <div class="col-md-6">
            <base-input
              type="text"
              identity="lastname"
              placeholder="Ex: Daniel"
              label="Lastname"
            >
            </base-input>
          </div>
          <div class="col-md-6">
            <base-input
              type="text"
              identity="firstname"
              placeholder="Ex: John"
              label="Firstname"
            >
            </base-input>
          </div>
        </div>
        <div class="my-4">
          <base-input
            type="text"
            identity="firstname"
            placeholder="Ex: Jack"
            label="Username"
          >
          </base-input>
        </div>
        <div class="my-4">
          <base-input
            type="email"
            identity="email"
            placeholder="Your email address"
            label="Email"
          >
          </base-input>
        </div>
        <div class="my-4">
          <base-input
            type="password"
            identity="password"
            placeholder="Your password"
            label="Password"
            v-model="signupData.password"
            @keyInput="confirmationPasswordCheck"
          >
          </base-input>
          <p class="text-danger mt-1 fw-medium" style="font-size: 11px">
            The password confirmation does not match
          </p>
          <p class="text-success mt-1 fw-medium" style="font-size: 11px">
            The password confirmation does match
          </p>
        </div>
        <div class="my-4">
          <base-input
            type="file"
            identity="recipeImage"
            label="Profile Photo"
            isImage="true"
            @input="checkImage"
          >
            <div class="border p-1 mt-2 rounded-circle">
              <img
                :src="signupData.imageLink"
                class="rounded-circle"
                width="140"
                height="150"
                style="object-fit: cover"
              />
            </div>
          </base-input>
          <p
            class="text-danger mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmPasswordDoesNotMacth }"
          >
            The password confirmation does not match
          </p>
          <p
            class="text-success mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmPasswordMacth }"
          >
            The password confirmation does match
          </p>
        </div>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?
          <router-link to="/login" class="text-decoration-none">
            Login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const confirmPasswordDoesNotMacth = ref("none");
const confirmPasswordMacth = ref("none");
const confirmationPasswordCheck = () => {
  if (signupData.confirmationPassword === "") {
    confirmPasswordDoesNotMacth.value = "none";
    confirmPasswordMacth.value = "none";
    return;
  }
  if (signupData.password !== signupData.confirmationPassword) {
    confirmPasswordDoesNotMacth.value = "block";
    confirmPasswordMacth.value = "none";
    return;
  }
  confirmPasswordDoesNotMacth.value = "none";
  confirmPasswordMacth.value = "block";
};
const checkImage = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.addEventListener("load", () => {
    signupData.imageLink = reader.result;
  });
};
const store = useStore();
const router = useRouter();
const register = async () => {
  if (
    signupData.password !== signupData.confirmationPassword ||
    signupData.password.length < 8
  ) {
    signupData.confirmationPassword = "";
    signupData.password = "";
    confirmPasswordDoesNotMacth.value = "none";
    confirmPasswordMacth.value = "none";
  } else {
    await store.dispatch("auth/getRegisterData", signupData);
    router.push("/");
  }
};
const signupData = reactive({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirmationPassword: "",
  isLogin: false,
  imageLink: "",
});
</script>