document.addEventListener("DOMContentLoaded", () => {

  const servicesData = {
    litigation: {
      title: "التقاضي والترافع",
      points: [
        "تمثيل العملاء أمام الجهات القضائية وشبه القضائية.",
        "إعداد ومتابعة المذكرات القانونية.",
        "حضور الجلسات ومتابعة القضايا حتى صدور الأحكام."
      ]
    },
    advisory: {
      title: "الاستشارات القانونية",
      points: [
        "تقديم الرأي القانوني المدروس.",
        "دراسة الأنظمة وتطبيقها على حالة العميل.",
        "اقتراح الحلول النظامية المناسبة."
      ]
    },
    companies: {
      title: "الشركات والخدمات التجارية",
      points: [
        "تأسيس الشركات وصياغة عقود التأسيس.",
        "تنظيم العلاقة بين الشركاء.",
        "تقديم الدعم القانوني للأنشطة التجارية."
      ]
    },
    ip: {
      title: "الملكية الفكرية",
      points: [
        "حماية العلامات التجارية.",
        "تسجيل الحقوق الفكرية.",
        "متابعة التعديات والنزاعات."
      ]
    },
    contracts: {
      title: "العقود والصفقات التجارية",
      points: [
        "صياغة العقود والاتفاقيات.",
        "مراجعة البنود القانونية.",
        "حفظ حقوق الأطراف وتقليل المخاطر."
      ]
    },
    arbitration: {
      title: "التحكيم والوساطة",
      points: [
        "تسوية النزاعات بطرق بديلة.",
        "تمثيل الأطراف في إجراءات التحكيم.",
        "حل النزاعات بشكل أسرع وأكثر مرونة."
      ]
    },
    notary: {
      title: "التوثيق",
      points: [
        "توثيق العقود والإقرارات.",
        "إعداد الصيغ النظامية.",
        "ضمان سلامة الإجراءات."
      ]
    },
    training: {
      title: "التدريب والتطوير",
      points: [
        "برامج تدريب قانوني متخصصة.",
        "رفع الوعي بالأنظمة والتشريعات.",
        "ورش عمل قانونية احترافية."
      ]
    }
  };

  const dropdown = document.getElementById("service-dropdown");
  const titleEl = document.getElementById("service-title");
  const contentEl = document.getElementById("service-content");
  const cards = document.querySelectorAll(".card");

  let currentService = null;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.getAttribute("data-service");
      const service = servicesData[key];
      if (!service) return;

      // إذا ضغط نفس الخدمة → إغلاق
      if (currentService === key) {
        dropdown.classList.add("hidden");
        currentService = null;
        return;
      }

      // عرض الخدمة الجديدة
      currentService = key;

      titleEl.textContent = service.title;
      contentEl.innerHTML = `
        <ul>
          ${service.points.map(point => `<li>${point}</li>`).join("")}
        </ul>
      `;

      dropdown.classList.remove("hidden");

      // سحب ناعم للقائمة
      dropdown.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

});
