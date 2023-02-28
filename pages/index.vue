<template>
  <section>
    <p class="mb-2 text-center">
      Hi! I'm Logan, an aspiring Software Developer at The Ohio State University.
    </p>
    <CollapsibleSection collapse-text="About Me (see less)" expand-text="About Me (see more)">
      <template #visible-text>
        <p class="indent-8">
          I'm on a mission to explore the exciting world of software development through an internship that will not
          only challenge my current skills, but also help me bridge the gap between theory and practice. I'm eager to
          dive into the industry headfirst and see just how far my knowledge can take me, while also picking up new
          skills and insights from experienced professionals. If you're looking for a passionate and driven computer and
          information science student to join your team, I'm ready to prove myself and make an impact from day one!
        </p>
      </template>
      <template #expanded-text>
        <p class="indent-8 mb-2">
          I have had a fascination with computers for as long as I can remember, and knew that what I would do when I
          grew up would involve them in some way. Over the course of high school, I was exposed to web development
          through an internship opportunity that allowed for me to grow both as a person and professionally. From here,
          I have worked over the summer in the years following, allowing for me to gain many valuable skills, both in
          programming and outside of it.
        </p>
        <p class="indent-8">
          Outside of my coursework and internship work, I am also the vice president of the Waffle House Club at The
          Ohio State University, a position that I've held since 2022. In addition to this, I would describe myself as
          an avid guitar player, with several years of practice.
        </p>
      </template>
    </CollapsibleSection>

    <p class="text-center mb-5">
      You can check out my
      <NuxtLink to="/academic-projects" class="text-blue-600 underline">academic</NuxtLink> or
      <NuxtLink to="/github-projects" class="text-blue-600 underline">GitHub</NuxtLink> projects here.
    </p>
  </section>
</template>