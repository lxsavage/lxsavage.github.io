<template>
  <section>
    <h1 class="text-xl mb-2" id="academic-projects">Academic Projects</h1>
    <p class="text-sm text-gray-500 mb-2">
      Note: to avoid potential academic misconduct by sharing the code for these project publicly, I do not have them
      linked here. Feel free to reach out if you want to see the code of, or more details about, any of these projects.
    </p>
    <hr class="mt-2 mb-2"/>
    <ProjectSummary name="Interpreter: Core"
                    language="Python 3"
                    class="CSE 3341 – Principles of Programming Languages">
      <template #description>
        This project involves implementing an interpreter for a fictional programming language named Core. Currently,
        the project has the tokenizer implemented, with the parser, printer, and executor still in progress.
      </template>
    </ProjectSummary>
    <hr class="mt-2 mb-2"/>
    <ProjectSummary name="Event Reviewer"
                    language="Ruby on Rails"
                    class="CSE 3901 – Project: Web Applications"
                    date="Autumn 2022"
                    img="img/event_reviewer.png">
      <template #description>
        Event Reviewer is an event date aggregator with user feedback and comment functionality. For this group project,
        I was responsible for implementing the ORM connection to a Sqlite 3 database through designing and linking the
        various models together and creating database migrations upon them. In addition to this, I was responsible for
        implementing the authentication, which in addition to a typical authentication-for-access scenario, needed a
        separate instructor/student mode that would be set on a per-user basis.
      </template>
    </ProjectSummary>
    <hr class="mt-2 mb-2"/>
    <ProjectSummary name="The Game of Set"
                    language="JavaScript"
                    class="CSE 3901 – Project: Web Applications"
                    date="Autumn 2022"
                    img="img/js_set.png">
      <template #description>
        The game of Set, implemented using pure JavaScript/HTML/CSS without any external libraries. For this group
        project, I was responsible for implementing the game state and comparison logic in the game engine underneath
        the UI.
      </template>
    </ProjectSummary>
    <hr class="mt-2 mb-2"/>
    <ProjectSummary name="What's Happening in the Next 2 Weeks?"
                    language="Ruby"
                    class="CSE 3901 – Project: Web Applications"
                    date="Autumn 2022">
      <template #description>
        This is a program that will scrape the data from the Ohio State academic calendar, then determine if any breaks
        or events will occur/begin within the next 2 weeks. The amount of days to look ahead can be customized. For this
        group project, I was responsible for the webscraping aspect, where the program will pull the information from
        the OSU academic calendar, and convert it into an object format that would be capable of being iterated over and
        parsed for determining whether it would be within the next 2 weeks, or the time period specified by the user.
      </template>
    </ProjectSummary>
  </section>
</template>
<script setup lang="ts">
import ProjectSummary from "~/components/ProjectSummary.vue";
</script>