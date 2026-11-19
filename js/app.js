(function () {
  var LOGO = '<img src="assets/logo.png" alt="Simple Funds Logo" class="brand-logo-img" width="40" height="40">';
  var REVIEWED = "November 2026";
  var PHONE = "8618207185";
  var PHONE_DISP = "+91 8618207185";

  // Enforce light theme permanently so device dark mode doesn't wash out text
  document.documentElement.setAttribute("data-bs-theme", "light");
  document.documentElement.removeAttribute("data-theme");

  // Preloader dismissal
  function hidePreloader() {
    var pre = document.getElementById("preloader");
    if (pre && !pre.classList.contains("loaded")) {
      pre.classList.add("loaded");
      setTimeout(function () {
        if (pre.parentNode) pre.style.display = "none";
      }, 500);
    }
  }
  window.addEventListener("load", function () {
    setTimeout(hidePreloader, 320);
  });
  setTimeout(hidePreloader, 1800);

  // Only the 9 Lending Partners specified by the user
  var PARTNERS = [
    { name: "Lendingkart Finance", logo: "assets/lenders/lendingkart.svg", link: "business-loan.html" },
    { name: "Axis Bank Business Loan", logo: "assets/lenders/axis-bank.svg", link: "business-loan.html" },
    { name: "ICICI HFC", logo: "assets/lenders/icici-hfc.svg", link: "loan-against-property.html" },
    { name: "Tata Capital", logo: "assets/lenders/tata-capital.svg", link: "loan-against-property.html" },
    { name: "Aditya Birla", logo: "assets/lenders/aditya-birla.svg", link: "loan-against-property.html" },
    { name: "Capri Loans", logo: "assets/lenders/capri-loans.svg", link: "loan-against-property.html" },
    { name: "Cholamandalam Finance", logo: "assets/lenders/chola.svg", link: "loan-against-property.html" },
    { name: "PNB", logo: "assets/lenders/pnb.svg", link: "loan-against-property.html" },
    { name: "IIFL", logo: "assets/lenders/iifl.svg", link: "loan-against-property.html" }
  ];

  // 2 Main Loan Cards for Home Page ("Specialized loans for your goals")
  var HOME_GOAL_CARDS = [
    {
      slug: "business-loan.html",
      title: "Business Loan",
      badge: "MSME & Working Capital",
      ratePill: "From 10.75% p.a.",
      icon: "fa-briefcase",
      img: "assets/card-business-loan.jpg",
      desc: "Fast collateral-free business loans, working capital limits, and machinery finance from Lendingkart Finance and Axis Bank Business Loan.",
      points: [
        "Lendingkart Finance & Axis Bank",
        "Loans up to ₹2 Crore",
        "Fast 48-Hr Sanction",
        "Minimal Documentation"
      ],
      btnText: "Explore Business Loan"
    },
    {
      slug: "home-loan.html",
      title: "Home Loan",
      badge: "Property & Mortgage",
      ratePill: "From 8.75% p.a.",
      icon: "fa-house-chimney",
      img: "assets/card-home-loan.jpg",
      desc: "Compare Loan Against Property and Mortgage Loans from 7 premier housing lenders including ICICI HFC, Tata Capital, Aditya Birla, Capri, Chola, PNB & IIFL.",
      points: [
        "Loan Against Property",
        "High-Value Mortgage Loans",
        "7 Top Housing Lenders",
        "Tenure up to 20 Years"
      ],
      btnText: "Explore Home Loan"
    }
  ];

  var FAQ = [
    ["Does Simple Funds lend money directly?", "No. Simple Funds is an online loan comparison and advisory service. We help you compare verified loan options and connect you directly with our institutional lending partners. Final approval and disbursal are carried out by the respective lender."],
    ["Which lending partners are available on Simple Funds?", "For Business Loans, we partner with Lendingkart Finance and Axis Bank Business Loan. For Home Loans (Loan Against Property and Mortgage Loans), we partner with ICICI HFC, Tata Capital, Aditya Birla Housing Finance, Capri Loans, Cholamandalam Finance, PNB Housing Finance, and IIFL Home Finance."],
    ["What is the difference between Loan Against Property and Mortgage Loan?", "Both are secured by residential or commercial property you own. Loan Against Property (LAP) lets you unlock up to 70% of your property's market value for business expansion or personal goals, while Mortgage Loans provide structured long-term property-backed funding."],
    ["Can I get a business loan without collateral?", "Yes! Our partners Lendingkart Finance and Axis Bank Business Loan offer unsecured collateral-free business loans based on your GST returns, business vintage, and bank statements."],
    ["How can I speak directly with a loan advisor?", "You can call our dedicated helpline anytime at +91 8618207185 or click the WhatsApp button at the bottom of the screen for instant assistance."],
    ["Are the interest rates shown on Simple Funds final?", "They are current indicative starting rates from our lending partners. Your final approved rate depends on your credit score, income, property valuation, and lender policy."]
  ];

  var LEGAL = {
    terms: ["Terms and conditions", [
      "By using Simple Funds you agree to these terms. Simple Funds is an online loan comparison platform that enables you to compare Business Loans, Home Loans, Loans Against Property, and Mortgage Loans from verified lending partners.",
      "Rates, fees, tenures, and eligibility shown on this website are indicative. The lender’s official sanction letter and loan agreement govern all final terms.",
      "You agree to provide accurate details when submitting an enquiry or requesting a callback on +91 8618207185.",
      "Simple Funds is not responsible for any lender's decision to approve, reject, or modify an application."
    ]],
    privacy: ["Privacy policy", [
      "We collect details you submit in an enquiry, such as your name, mobile number, city, required loan amount, and loan type.",
      "We use this information solely to connect you with suitable lending partners and financial advisors at Simple Funds. We never sell your personal data to third parties.",
      "For any privacy queries or data removal requests, call us at +91 8618207185 or visit our office at No.745, 10th Main, 3rd Block, 3rd Stage, Basaveshwara Nagar, Bengaluru, Karnataka, India – 560079."
    ]],
    disclaimer: ["Disclaimer", [
      "Simple Funds is a comparison and facilitation portal and not a direct bank or NBFC. Nothing on this website constitutes a binding offer to lend money.",
      "Interest rates and charges are subject to market conditions and individual borrower eligibility. Please confirm all details with the lender before executing agreements."
    ]],
    cookies: ["Cookie policy", [
      "We use essential cookies to ensure smooth website navigation and calculator functionality."
    ]],
    grievance: ["Grievance redressal", [
      "For queries or complaints regarding Simple Funds services, contact our Grievance Officer at +91 8618207185 (No.745, 10th Main, 3rd Block, 3rd Stage, Basaveshwara Nagar, Bengaluru, Karnataka, India – 560079). We acknowledge all grievances within 48 hours."
    ]],
    fair: ["Fair practices", [
      "We present rates objectively from our verified partners and never charge borrowers comparison fees."
    ]]
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var inr = function (n) { return "₹" + Math.round(n).toLocaleString("en-IN"); };

  function emiOf(P, a, y) {
    var r = a / 1200, n = y * 12;
    return P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  }

  function modal(id) {
    var el = $(id);
    return el ? bootstrap.Modal.getOrCreateInstance(el) : null;
  }

  document.querySelectorAll("[data-logo]").forEach(function (e) {
    e.innerHTML = LOGO;
  });

  // Render 2 Picture Cards on Home Page if #cards exists
  var cardsEl = $("#cards");
  if (cardsEl) {
    cardsEl.innerHTML = HOME_GOAL_CARDS.map(function (c) {
      return (
        '<div class="col-md-6">' +
          '<a class="loan-pic-card tilt" href="' + c.slug + '">' +
            '<div class="loan-pic-wrap">' +
              '<img src="' + c.img + '" alt="' + c.title + '" loading="lazy">' +
              '<span class="loan-pic-badge"><i class="fa-solid ' + c.icon + '"></i> ' + c.badge + '</span>' +
              '<span class="loan-pic-rate-pill">' + c.ratePill + '</span>' +
            '</div>' +
            '<div class="loan-pic-body">' +
              '<div class="loan-pic-title">' +
                '<span class="ico3d"><i class="fa-solid ' + c.icon + '"></i></span>' +
                '<h3>' + c.title + '</h3>' +
              '</div>' +
              '<p class="loan-pic-desc">' + c.desc + '</p>' +
              '<ul class="loan-pic-points">' +
                c.points.map(function (p) { return '<li><i class="fa-solid fa-circle-check"></i> ' + p + '</li>'; }).join("") +
              '</ul>' +
              '<div class="loan-pic-Action">' +
                '<span class="btn btn-3d w-100">' + c.btnText + ' <i class="fa-solid fa-arrow-right ms-1"></i></span>' +
              '</div>' +
            '</div>' +
          '</a>' +
        '</div>'
      );
    }).join("");
  }

  // Render Our Lending Partners (ONLY the 9 listed banks)
  var partnerListEl = $("#partnerList");
  if (partnerListEl) {
    partnerListEl.className = "partners-logo-grid";
    partnerListEl.innerHTML = PARTNERS.map(function (p) {
      return (
        '<a href="' + p.link + '" class="partner-logo-card tilt">' +
          '<img src="' + p.logo + '" alt="' + p.name + ' Logo">' +
          '<span>' + p.name + '</span>' +
        '</a>'
      );
    }).join("");
  }

  // Render FAQs if #faqs exists
  var faqsEl = $("#faqs");
  if (faqsEl) {
    faqsEl.innerHTML = FAQ.map(function (f, i) {
      return (
        '<div class="accordion-item">' +
        '<h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q' + i + '" aria-expanded="false" aria-controls="q' + i + '">' + f[0] + '</button></h3>' +
        '<div id="q' + i + '" class="accordion-collapse collapse" data-bs-parent="#faqs"><div class="accordion-body">' + f[1] + '</div></div>' +
        '</div>'
      );
    }).join("");
  }

  // Populate Loan Type select in Apply Modal
  var fType = $("#f-type");
  if (fType && !fType.children.length) {
    fType.innerHTML = [
      "Business Loan",
      "Home Loan",
      "Loan Against Property",
      "Mortgage Loan"
    ].map(function (n) {
      return '<option value="' + n + '">' + n + '</option>';
    }).join("");
  }

  var yrEl = $("#yr");
  if (yrEl) yrEl.textContent = new Date().getFullYear();

  // 3D Tilt effect on desktop
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function tilt() {
    if (still) return;
    document.querySelectorAll(".tilt").forEach(function (el) {
      if (el.dataset.t) return;
      el.dataset.t = 1;
      el.addEventListener("pointermove", function (e) {
        if (e.pointerType !== "mouse") return;
        var b = el.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
        el.style.transform = "perspective(800px) rotateX(" + (-y * 6).toFixed(1) + "deg) rotateY(" + (x * 8).toFixed(1) + "deg) translateY(-4px)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }
  tilt();

  // EMI Calculator logic (works on calculator.html and index.html if present)
  function calc() {
    var amtEl = $("#amt"), rateEl = $("#rate"), tenEl = $("#ten");
    if (!amtEl || !rateEl || !tenEl) return;
    var P = +amtEl.value, a = +rateEl.value, y = +tenEl.value, e = emiOf(P, a, y), n = y * 12;
    if ($("#amtO")) $("#amtO").textContent = inr(P);
    if ($("#rateO")) $("#rateO").textContent = a + "%";
    if ($("#tenO")) $("#tenO").textContent = y + (y === 1 ? " year" : " years");
    if ($("#emi-v")) $("#emi-v").textContent = inr(e);
    if ($("#int")) $("#int").textContent = inr(e * n - P);
    if ($("#tot")) $("#tot").textContent = inr(e * n);
    if ($("#prin")) $("#prin").textContent = inr(P);
  }

  ["#amt", "#rate", "#ten"].forEach(function (s) {
    var el = $(s);
    if (el) el.addEventListener("input", calc);
  });

  // Preset buttons on calculator page
  document.querySelectorAll("[data-calc-preset]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var amtEl = $("#amt"), rateEl = $("#rate"), tenEl = $("#ten");
      if (!amtEl || !rateEl || !tenEl) return;
      amtEl.value = btn.dataset.amt || 2500000;
      rateEl.value = btn.dataset.rate || 9.5;
      tenEl.value = btn.dataset.ten || 10;
      document.querySelectorAll("[data-calc-preset]").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      calc();
    });
  });

  calc();

  // Global click handlers for Apply Modal and Legal Modal
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-apply]"), g = e.target.closest("[data-legal]");
    if (a) {
      if (a.dataset.loan && $("#f-type")) $("#f-type").value = a.dataset.loan;
      if ($("#f-lender")) $("#f-lender").value = a.dataset.lender || "";
      var m = modal("#applyModal");
      if (m) m.show();
    }
    if (g) {
      var L = LEGAL[g.dataset.legal];
      if (L && $("#legalTitle") && $("#legalBody")) {
        $("#legalTitle").textContent = L[0];
        $("#legalBody").innerHTML = L[1].map(function (p) { return "<p>" + p + "</p>"; }).join("");
        var lm = modal("#legalModal");
        if (lm) lm.show();
      }
    }
  });

  var form = $("#form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(this), v = function (k) { return f.get(k) || "-"; };
      var body = "Name: " + v("name") + "\nMobile: " + v("phone") + "\nLoan type: " + v("type") + "\nLender: " + v("lender") + "\nAmount: ₹" + v("amount") + "\nCity: " + v("city");
      var m = modal("#applyModal");
      if (m) m.hide();
      alert("Thank you, " + v("name") + "! Your loan request with " + (v("lender") !== "-" ? v("lender") : "Simple Funds") + " has been received. Our advisor will call you shortly from +91 " + PHONE + ".");
    });
  }
})();
