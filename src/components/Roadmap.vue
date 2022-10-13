<template>
  <section id="roadmap">
    <v-container id="roadmap-container" class="roadmap">
      <h1
        class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h2 text-lg-h3 text-md-h3 text-sm-h3"
        style="margin-bottom: 130px; word-wrap: break-word"
      >
        Roadmap
      </h1>
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col>
          <vue-horizontal-timeline :items="items" class="timeline" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <v-timeline>
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.isActive ? 'primary' : 'grey'"
              :small="!item.isActive"
            >
              <span
                slot="opposite"
                :class="{
                  'white--text': item.isActive,
                  'blue-grey--text': !item.isActive,
                }"
                >{{ item.title }}</span
              >
              <v-card class="elevation-2">
                <v-card-text
                  class="text-body-2"
                  :class="{
                    'white--text': item.isActive,
                    'blue-grey--text': !item.isActive,
                  }"
                >
                  {{ item.content }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    const items = [
      {
        title: "October 2022",
        content: "V2 Presale launch",
        stepCssClass: "is-active",
        boxCssClass: "is-box-active",
        isActive: true,
      },
      {
        title: "October 2022",
        content: "New reward Dashboard launch",
        stepCssClass: "is-not-active",
      },
      {
        title: "November 2022",
        stepCssClass: "is-not-active",
        content: "Coinmarket cap and Coingeko listing",
      },
      {
        title: "November 2022",
        stepCssClass: "is-not-active",
        content: "P2E Game Launch",
      },
      {
        title: "December 2022",
        stepCssClass: "is-not-active",
        content: "Setting up for sustainable passive income",
      },
      {
        title: "January 2023",
        stepCssClass: "is-not-active",
        content: "First set of NFTs limited",
      },
      {
        title: "Market Cap 5M ",
        stepCssClass: "is-not-active",
        content: "Utility development stage 2 ",
      },
      {
        title: "January 2023",
        stepCssClass: "is-not-active",
        content: "Online Store",
      },

      {
        title: "Market Cap 10M",
        content: "Big reward to all loyal holders",
        stepCssClass: "is-not-active",
      },
      {
        title: "Market Cap 20M",
        stepCssClass: "is-not-active",
        content: "Charity donation and all inclusive trip for 2 lucky holders",
      },
    ];

    return { items };
  },
  mounted() {},
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  border: 1px solid transparent;
  height: 8px;
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 16px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(249, 117, 34, 1);
  border-radius: 16px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(175, 68, 1);
}

::-webkit-scrollbar-thumb:horizontal {
  background: rgba(249, 117, 34, 1);
  border-radius: 16px;
}

#roadmap {
  background-repeat: no-repeat;
  // background: url("../assets/img/background/roadmap-background.webp");
  width: 100%;
  padding-bottom: 8rem;
  z-index: 9999;
}

.is-active::after {
  background: rgba(249, 117, 34, 1) !important;
}

.is-box-active {
  color: gray !important;
}

.is-not-active::after {
  background: gray !important;
}

.theme--light.v-card {
  background: transparent !important;
  border: 3px solid rgba(249, 117, 34, 1);
  color: white;
  border-radius: 16px;
  backdrop-filter: blur(30px) !important;
}

.vue-horizontal-timeline {
  background: transparent !important;
  box-shadow: unset !important;
  padding: auto;

  .timeline {
    ol {
      li {
        &:nth-of-type(odd) {
          .time {
            min-height: 200px;
            color: white !important;
            border-top-left-radius: 16px !important;
            border-top-right-radius: 16px !important;
            border-bottom-right-radius: 16px !important;
            border-top-right-radius: 16px;
            padding: 2rem 1rem !important;
            background: transparent !important;
            border: 3px solid rgba(249, 117, 34, 1);
            transition: 0.5s ease-out;
            backdrop-filter: blur(30px) !important;

            &::before {
              border-color: transparent !important;
            }
            &:hover {
              box-shadow: 12px 4px 44px rgba(249, 117, 34, 1);
            }
          }
        }

        &:nth-of-type(even) {
          .time {
            min-height: 200px;
            color: white !important;
            border-bottom-left-radius: 16px !important;
            border-top-right-radius: 16px !important;
            border-bottom-right-radius: 16px !important;
            padding: 2rem 1rem !important;
            background: transparent !important;
            border: 3px solid rgba(249, 117, 34, 1);
            backdrop-filter: blur(30px) !important;

            &::before {
              border-color: transparent !important;
            }

            &:hover {
              box-shadow: 12px 4px 44px rgba(249, 117, 34, 1);
            }
          }
        }
      }
    }
  }
}
.theme--light.v-timeline::before {
  background: white;
}
</style>
