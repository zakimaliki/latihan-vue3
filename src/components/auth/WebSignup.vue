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
      <form class="mt-3">
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
          >
          </base-input>
        </div>
        <div class="my-4">
            <base-input
            type="password"
            identity="confirmationPassword"
            placeholder="Same with your password"
            label="Confirmation Password"
          >
          </base-input>
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
</script>