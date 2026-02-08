function showService(key) {
  const services = {
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
        "برامج تدريب قانوني.",
        "رفع الوعي بالأنظمة.",
        "ورش عمل متخصصة."
      ]
    }
  };

  const s = services[key];
  if (!s) return;

  document.getElementById("services").style.display = "none";
  document.getElementById("service-details").classList.remove("hidden");

  document.getElementById("service-content").innerHTML = `
    <h3>${s.title}</h3>
    <ul>
      ${s.points.map(p => `<li>${p}</li>`).join("")}
    </ul>
  `;
}

function hideService() {
  document.getElementById("service-details").classList.add("hidden");
  document.getElementById("services").style.display = "block";
}
