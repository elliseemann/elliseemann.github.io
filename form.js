let participantId = localStorage.getItem("participantId");

if (!participantId) {
  participantId = Math.random().toString(36).substring(2, 12);
  localStorage.setItem("participantId", participantId);
}

const step = "<?= step ?>";

const formUrl1 =
  "https://docs.google.com/forms/d/e/1FAIpQLScRLdHqx_34bzbV1PjAk8y-WGCx-VcgF_Tp8MWAJiF2qoH_Sw/viewform?usp=pp_url&entry.1511166651=TEST_ID";

const formUrl2 =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpZHA5nzEFQsw1APLsl8LCnfQWC1VIWHahiZJLCuy4rmEBLw/viewform?usp=pp_url&entry.1974898686=TEST_ID";

const targetForm =
  step === "2" ? formUrl2 : formUrl1;

const finalUrl =
  targetForm.replace(
    "TEST_ID",
    encodeURIComponent(participantId)
  );

window.location.href = finalUrl;