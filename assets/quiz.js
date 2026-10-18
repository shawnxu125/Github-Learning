/*
 * quiz.js — 可复用测验组件
 * 用法：
 *   <div class="quiz" data-quiz='{"options":["错1","对","错2"],"answer":1,"explain":"解释文字"}'></div>
 *   页面底部: <script src="../assets/quiz.js"></script>
 * 注意：设计选项时保持各选项字数一致，正确答案位置随机分布。
 */
(function () {
  function render(el) {
    let cfg;
    try { cfg = JSON.parse(el.dataset.quiz); } catch (e) { return; }
    const title = cfg.title ? `<div class="q-title">${cfg.title}</div>` : "";
    const wrap = document.createElement("div");
    wrap.innerHTML = title;
    const fb = document.createElement("div");
    fb.className = "q-feedback";
    cfg.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "q-opt";
      btn.innerHTML = opt;
      btn.onclick = () => {
        if (el.dataset.done === "1") return;
        if (i === cfg.answer) {
          el.dataset.done = "1";
          btn.classList.add("correct");
          fb.innerHTML = `<span class="ok">✔ 正确。</span> ${cfg.explain || ""}`;
          fb.classList.add("show");
          wrap.querySelectorAll(".q-opt").forEach(b => (b.style.pointerEvents = "none"));
        } else {
          btn.classList.add("wrong");
          fb.innerHTML = `<span class="no">✘ 不对，再想想。</span>`;
          fb.classList.add("show");
        }
      };
      wrap.appendChild(btn);
    });
    wrap.appendChild(fb);
    el.appendChild(wrap);
  }
  document.querySelectorAll(".quiz[data-quiz]").forEach(render);
})();
