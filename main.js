window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/12.0.0-1/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/12.0.0-1/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://www.newparkschool.ie/wp-includes/js/wp-emoji-release.min.js?ver=5.4.2",
  },
};
/*! This file is auto-generated */
!(function (e, a, t) {
  let r,
    n,
    o,
    i,
    p = a.createElement("canvas"),
    s = p.getContext && p.getContext("2d");
  function c(e, t) {
    const a = String.fromCharCode;
    s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0);
    const r = p.toDataURL();
    return (
      s.clearRect(0, 0, p.width, p.height),
      s.fillText(a.apply(this, t), 0, 0),
      r === p.toDataURL()
    );
  }
  function l(e) {
    if (!s || !s.fillText) return !1;
    switch (((s.textBaseline = "top"), (s.font = "600 32px Arial"), e)) {
      case "flag":
        return (
          !c(
            [127987, 65039, 8205, 9895, 65039],
            [127987, 65039, 8203, 9895, 65039]
          ) &&
          !c(
            [55356, 56826, 55356, 56819],
            [55356, 56826, 8203, 55356, 56819]
          ) &&
          !c(
            [
              55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128,
              56430, 56128, 56423, 56128, 56447,
            ],
            [
              55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128,
              56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447,
            ]
          )
        );
      case "emoji":
        return !c(
          [
            55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424,
            55356, 57340,
          ],
          [
            55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424,
            55356, 57340,
          ]
        );
    }
    return !1;
  }
  function d(e) {
    const t = a.createElement("script");
    (t.src = e),
      (t.defer = t.type = "text/javascript"),
      a.getElementsByTagName("head")[0].appendChild(t);
  }
  for (
    i = Array("flag", "emoji"),
      t.supports = { everything: !0, everythingExceptFlag: !0 },
      o = 0;
    o < i.length;
    o++
  )
    (t.supports[i[o]] = l(i[o])),
      (t.supports.everything = t.supports.everything && t.supports[i[o]]),
      "flag" !== i[o] &&
        (t.supports.everythingExceptFlag =
          t.supports.everythingExceptFlag && t.supports[i[o]]);
  (t.supports.everythingExceptFlag =
    t.supports.everythingExceptFlag && !t.supports.flag),
    (t.DOMReady = !1),
    (t.readyCallback = function () {
      t.DOMReady = !0;
    }),
    t.supports.everything ||
      ((n = function () {
        t.readyCallback();
      }),
      a.addEventListener
        ? (a.addEventListener("DOMContentLoaded", n, !1),
          e.addEventListener("load", n, !1))
        : (e.attachEvent("onload", n),
          a.attachEvent("onreadystatechange", function () {
            "complete" === a.readyState && t.readyCallback();
          })),
      (r = t.source || {}).concatemoji
        ? d(r.concatemoji)
        : r.wpemoji && r.twemoji && (d(r.twemoji), d(r.wpemoji)));
})(window, document, window._wpemojiSettings);

if (window.addthis_product === undefined) {
  window.addthis_product = "wpp";
}
if (window.wp_product_version === undefined) {
  window.wp_product_version = "wpp-6.2.7";
}
if (window.addthis_share === undefined) {
  window.addthis_share = {};
}
if (window.addthis_config === undefined) {
  window.addthis_config = {
    data_track_clickback: true,
    ignore_server_config: true,
    ui_atversion: 300,
  };
}
if (window.addthis_layers === undefined) {
  window.addthis_layers = {};
}
if (window.addthis_layers_tools === undefined) {
  window.addthis_layers_tools = [
    {
      sharetoolbox: {
        numPreferredServices: 5,
        counts: "one",
        size: "16px",
        style: "fixed",
        shareCountThreshold: 0,
        elements:
          ".addthis_inline_share_toolbox_below,.at-below-post,.at-below-post-page",
      },
    },
  ];
} else {
  window.addthis_layers_tools.push({
    sharetoolbox: {
      numPreferredServices: 5,
      counts: "one",
      size: "16px",
      style: "fixed",
      shareCountThreshold: 0,
      elements:
        ".addthis_inline_share_toolbox_below,.at-below-post,.at-below-post-page",
    },
  });
}
if (window.addthis_plugin_info === undefined) {
  window.addthis_plugin_info = {
    info_status: "enabled",
    cms_name: "WordPress",
    plugin_name: "Share Buttons by AddThis",
    plugin_version: "6.2.7",
    plugin_mode: "WordPress",
    anonymous_profile_id: "wp-bd0d45946c0fd41150fd13fe4d4d5bb5",
    page_info: { template: "pages", post_type: ["page", "hom_page"] },
    sharing_enabled_on_post_via_metabox: false,
  };
}
(function () {
  const first_load_interval_id = setInterval(function () {
    if (typeof window.addthis !== "undefined") {
      window.clearInterval(first_load_interval_id);
      if (
        typeof window.addthis_layers !== "undefined" &&
        Object.getOwnPropertyNames(window.addthis_layers).length > 0
      ) {
        window.addthis.layers(window.addthis_layers);
      }
      if (Array.isArray(window.addthis_layers_tools)) {
        for (i = 0; i < window.addthis_layers_tools.length; i++) {
          window.addthis.layers(window.addthis_layers_tools[i]);
        }
      }
    }
  }, 1000);
})();
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "//www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-NM5KGV");
const simcal_default_calendar = {
  ajax_url: "/wp-admin/admin-ajax.php",
  nonce: "897750f318",
  locale: "en_GB",
  text_dir: "ltr",
  months: {
    full: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    short: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  days: {
    full: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  meridiem: { AM: "AM", am: "am", PM: "PM", pm: "pm" },
};

const noOfModals = 17; // temp value for no of implemented modals

// <-- Opening and closing modals -->
const modals = [];
const overlay = document.querySelector(".overlay");
const btnsOpen = [];
const btnsClose = [];
let activeModal;

for (let i = 0; i < noOfModals; i++) {
  modals[i] = document.querySelector(`.modal-${i}`);
  btnsOpen[i] = document.querySelector(`.btn-open-${i}`);
  btnsClose[i] = document.querySelector(`.btn-close-${i}`);
}
const openModal = function (modal) {
  // Setting the active modal
  activeModal = modal;

  // <-- Centering modal on screen -->
  modals[activeModal].style.top = `${scrollY + 300}px`;
  // Opening modal
  modals[activeModal].classList.remove("hidden");
  overlay.classList.remove("hidden");

  // Adding closing event listeners
  btnsClose[activeModal].addEventListener("click", function () {
    closeModal();
  });
};
const closeModal = function () {
  modals[activeModal].classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modals[activeModal].classList.contains("hidden")) {
    closeModal();
  }
});

for (let i = 0; i < noOfModals; i++) {
  btnsOpen[i].addEventListener("click", function () {
    openModal(i);
  });
}

// <-- assigning modal colours -->
const backgroundColours = [
  "#ea1d2d",
  "#d19f2a",
  "#2d9a47",
  "#c22033",
  "#ef412a",
  "#00aed9",
  "#fdb714",
  "#8f1838",
  "#f36e24",
  "#e01a83",
  "#f99d25",
  "#cd8b2a",
  "#48773c",
  "#007dbb",
  "#40ae49",
  "#00558a",
  "#00558a",
];
for (let i = 0; i < noOfModals; i++) {
  const modalHeader = document.querySelector(`.modal-${i} h1`);
  modals[i].style.backgroundColor = backgroundColours[i];
  modalHeader.style.backgroundColor = backgroundColours[i];
}
// <-- Setting modal header text -->
const goalHeaders = document.querySelectorAll(".goal-modal-header");
const goals = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation and Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnership for the Goals",
];
const modalImages = document.querySelectorAll(".modal-image");
const toSlug = function (string) {
  const lowercaseString = string.toLowerCase();
  const slug = lowercaseString.replace(/\s+/g, "-");
  return slug;
};
let yIncrement = 100;
for (let i = 0; i < noOfModals; i++) {
  //  <-- Setting header text -->
  goalHeaders[i].textContent = `Goal ${i + 1} - ${goals[i]}`;

  // <-- Adjusting modal header size -->
  const headerStyle = goalHeaders[i].style;
  const text = goalHeaders[i].textContent;

  if (isMobileDevice()) {
    headerStyle.fontFamily = "sans-serif";
    if (text.length > 22) {
      headerStyle.transform = "scale(0.7)";
      headerStyle.top = "105px";
      if (text.length > 40) {
        headerStyle.top = "85px";
      }
    }
  } else {
    let headerWidth = 10;
    if (text.length > 38) {
      for (let j = 0; j < text.length; j++) {
        headerWidth += 10;
        headerStyle.top = "100px";
      }
    } else {
      for (let j = 0; j < text.length; j++) {
        headerWidth += 15;
      }
    }
    headerStyle.width = `${headerWidth}px`;
  }

  // <-- Setting image source -->
  modalImages[i].src = `/assets/modal-images/${toSlug(goals[i])}.jpeg`;
}

// <-- Optimising for mobile
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
