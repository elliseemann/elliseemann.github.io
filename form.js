
const forms = {
    de: {
        part1: "https://docs.google.com/forms/d/e/1FAIpQLSfkaOUrLIktxYutZaIY9RP1_xEDkhWLa4ujAG5F7at8k2Xslw/viewform?usp=pp_url&entry.1511166651=TEST_ID",
        part2: "https://docs.google.com/forms/d/e/1FAIpQLSdNGlBYqJwkd8_ul2SLJ-UusCqzrzojr1qWzdhUp0NEcv3Rjg/viewform?usp=pp_url&entry.1974898686=TEST_ID"
    },
    en : {
        part1: "https://docs.google.com/forms/d/e/1FAIpQLScRLdHqx_34bzbV1PjAk8y-WGCx-VcgF_Tp8MWAJiF2qoH_Sw/viewform?usp=pp_url&entry.1511166651=TEST_ID",
        part2: "https://docs.google.com/forms/d/e/1FAIpQLSdpZHA5nzEFQsw1APLsl8LCnfQWC1VIWHahiZJLCuy4rmEBLw/viewform?usp=pp_url&entry.1974898686=TEST_ID"
    }
}

let participantId = localStorage.getItem("participantId");

if (!participantId) {
  participantId = Math.random().toString(36).substring(2, 12);
  localStorage.setItem("participantId", participantId);
}

const params = new URLSearchParams(window.location.search);
const step = params.get("step");

function openSurvey(lang) {
  localStorage.setItem("language", lang);

  const targetForm =
    step === "2"
      ? forms[lang].part2
      : forms[lang].part1;

  window.location.href =
    targetForm.replace(
      "TEST_ID",
      encodeURIComponent(participantId)
    );
}

document.getElementById("de").addEventListener("click", () => {
  openSurvey("de");
});

document.getElementById("en").addEventListener("click", () => {
  openSurvey("en");
});