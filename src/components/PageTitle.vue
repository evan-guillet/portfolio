<script setup lang="ts"></script>

<template>
  <div class="text-center">
    <p>
      Windows PowerShell<br />
      Copyright (C) Microsoft Corporation. Tous droits réservés.
    </p>
    <br /><br />
    <h1>
      PS C:\Users\evan-guillet>
      <span class="commande">ls</span>
      <span class="cursor">▍</span><br />
    </h1>
    <br /><br />
    <h1><span class="text-highlight">Développeur Web+JV</span></h1>
    <p>
      Répertoire : C:\Users\evan-guillet<br />
      <br />
      Mode LastWriteTime Length Name<br />
      ---- ------------- ------ ----<br />
      d-r--- 22/04/2025 12:34 00_about-me<br />
      d-r--- 22/04/2025 12:35 01_projects<br />
      d-r--- 22/04/2025 12:36 02_experience<br />
      d-r--- 22/04/2025 12:37 03_skills<br />
      d-r--- 22/04/2025 12:38 04_contact<br />
    </p>
  </div>
</template>

<style scoped>
.cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s step-start infinite;
  color: var(--white-50);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.commande {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: #f9f1a5;
}

#social {
  display: flex;
  gap: 10px;
}

.text-center {
  display: flex;
  flex-direction: column;

  width: auto;
  height: 700px;
  margin-top: var(--mt-24);
}

.text-highlight {
  color: var(--white-50);
  font-weight: var(--font-weight-bold);
  background-color: var(--dark-blue);
  padding: 0px 50px 10px 50px;
  margin-top: var(--mt-10);
}

h1 {
  color: var(--white-300);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
}

p {
  font-size: 1.25rem;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-8);

  width: 700px;
  margin-top: var(--mt-10);
}
</style>
