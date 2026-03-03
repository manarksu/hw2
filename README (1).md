# 🎙️ Acoustic Adversarial Attack Detection
### نظام ذكاء اصطناعي وكيل لاكتشاف الهجمات الصوتية الخصومية

---

## 📌 وصف المشروع

يُقدّم هذا المشروع نظاماً متعدد الوكلاء لاكتشاف الهجمات الصوتية الخصومية الموجّهة ضد نماذج التعرف على الكلام التلقائي. يعتمد النظام على وكيلين متخصصين: وكيل أمني يحلل إشارات عدم الاستقرار الصوتي ويتخذ القرار بمساعدة نموذج لغوي كبير، ووكيل تفاعلي يعرض النتائج ويستدعي المراجعة البشرية عند الحاجة.

---

## 🗂️ هيكل المشروع

```
├── Detect_DeepSpeech.py              # الكود الأصلي (Baseline)
├── agentic_detection_system.py       # النظام الوكيل المطوّر
├── agentic_detection_system_HHEM.py  # النظام + تقييم الهلوسة
├── memory/
│   ├── history.json                  # ذاكرة القرارات السابقة
│   └── feedback.json                 # ردود المراجع البشري
└── logs/
    ├── audit.jsonl                   # سجل كامل لكل قرار
    └── hhem_scores.jsonl             # درجات FCS
```

---

## ⚙️ المتطلبات

```bash
pip install transformers torch editdistance numpy google-generativeai
```

---

## 🚀 التشغيل

```bash
# النظام الأصلي
python Detect_DeepSpeech.py

# النظام الوكيل
python agentic_detection_system.py

# النظام الوكيل + HHEM
export GEMINI_API_KEY="your_key_here"
python agentic_detection_system_HHEM.py
```

---

## 🔄 مقارنة الأنظمة

| الميزة | الكود الأصلي | النظام الوكيل |
|--------|-------------|---------------|
| عدد التجارب | 4 | 10 |
| العتبة | ثابتة (40.0) | تكيّفية |
| الذاكرة | ❌ | ✅ |
| LLM | ❌ | ✅ Gemini |
| مراجعة بشرية | ❌ | ✅ |
| تقييم الهلوسة | ❌ | ✅ HHEM |

---

## 📚 المراجع

- He et al. (2021) — DeBERTa — arXiv:2006.03654
- Li, Luo & Mendelevitch (2024) — HHEM-2.1-Open — DOI:10.57967/hf/3240
- Gosmar & Dahl (2025) — Hallucination Mitigation — arXiv:2501.13946
