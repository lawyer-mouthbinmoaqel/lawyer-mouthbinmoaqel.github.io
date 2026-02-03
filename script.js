function showService(key) {
  document.getElementById("services").style.display = "none";
  document.getElementById("service-details").classList.remove("hidden");

  const data = {
    litigation: {
      title: "التقاضي والترافع",
      text: "تمثيل العملاء أمام الجهات القضائية، إعداد المذكرات، ومتابعة القضايا حتى صدور الأحكام."
    },
    advisory: {
      title: "الاستشارات القانونية",
      text: "تقديم الرأي النظامي المدروس للأفراد والشركات وفق الأنظمة المعمول بها."
    },
    companies: {
      title: "الشركات والخدمات التجارية",
      text: "تأسيس الشركات، الحوكمة، وصياغة القرارات واللوائح الداخلية."
    },
    ip: {
      title: "الملكية الفكرية",
      text: "حماية الحقوق الفكرية وتسجيل العلامات التجارية ومتابعة النزاعات."
    },
    contracts: {
      title: "العقود والصفقات التجارية",
      text: "صياغة ومراجعة العقود لضمان حفظ الحقوق وتقليل المخاطر."
    },
    arbitration: {
      title: "التحكيم والوساطة",
      text: "حل النزاعات بطرق بديلة تحفظ الوقت والحقوق."
    },
    notary: {
      title: "التوثيق",
      text: "توثيق الوكالات والإقرارات والعقود وفق الأنظمة المعتمدة."
    },
    training: {
      title: "التدريب والتطوير",
      text: "برامج توعوية وتدريبية لرفع الثقافة القانونية."
    }
  };

  const s = data[key];
  document.getElementById("service-content").innerHTML = `
    <h3>${s.title}</h3>
    <p>${s.text}</p>
  `;
}

function hideService() {
  document.getElementById("service-details").classList.add("hidden");
  document.getElementById("services").style.display = "block";
}
