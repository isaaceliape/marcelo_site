"use client";

import { useEffect, useRef } from "react";

export default function CarouselClient() {
  const current = useRef(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    /* reveal observer */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => io.observe(el));

    /* check elements already in view */
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 36 && rect.bottom > 0) {
        el.classList.add("visible");
        io.unobserve(el);
      }
    });

    /* carousel */
    const slides = document.querySelectorAll<HTMLElement>(".hero-slide");
    const dots = document.querySelectorAll<HTMLButtonElement>(".hero-carousel-dot");
    if (slides.length) {
      const goTo = (index: number) => {
        const i = ((index % slides.length) + slides.length) % slides.length;
        slides[current.current].classList.remove("active");
        slides[current.current].setAttribute("aria-hidden", "true");
        dots[current.current]?.classList.remove("active");
        current.current = i;
        slides[current.current].classList.add("active");
        slides[current.current].setAttribute("aria-hidden", "false");
        dots[current.current]?.classList.add("active");
      };

      const start = () => {
        stop();
        timer.current = window.setInterval(() => goTo(current.current + 1), 5000);
      };

      const stop = () => {
        if (timer.current) window.clearInterval(timer.current);
      };

      const prev = document.getElementById("hero-prev");
      const next = document.getElementById("hero-next");
      prev?.addEventListener("click", () => { goTo(current.current - 1); start(); });
      next?.addEventListener("click", () => { goTo(current.current + 1); start(); });
      dots.forEach((dot) => {
        const index = Number(dot.getAttribute("data-index"));
        dot.addEventListener("click", () => { goTo(index); start(); });
      });

      const carousel = document.querySelector<HTMLElement>(".hero-carousel");
      let startX = 0;
      carousel?.addEventListener("touchstart", (event) => {
        startX = event.changedTouches[0]?.screenX || 0;
        stop();
      });
      carousel?.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0]?.screenX || 0;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goTo(current.current + 1);
          else goTo(current.current - 1);
        }
        start();
      });

      start();
    }

    /* contact form */
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    const status = document.getElementById("form-status");
    const submit = document.getElementById("contact-submit") as HTMLButtonElement | null;

    const onSubmit = async (event: Event) => {
      event.preventDefault();
      if (!form || !status || !submit) return;

      const data = new FormData(form);
      const payload = {
        name: String(data.get("name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        phone: String(data.get("phone") || "").trim(),
        message: String(data.get("message") || "").trim(),
      };

      submit.disabled = true;
      status.style.color = "";
      status.textContent = "Enviando...";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = (await response.json().catch(() => null)) as { error?: string } | null;

        if (!response.ok) {
          throw new Error(result?.error || "Erro ao enviar. Tente novamente.");
        }

        status.style.color = "";
        status.textContent = "Mensagem enviada. Retornaremos em breve.";
        form.reset();
      } catch (error) {
        status.style.color = "#b3261e";
        status.textContent =
          error instanceof Error ? error.message : "Erro ao enviar. Tente novamente.";
      } finally {
        submit.disabled = false;
      }
    };

    form?.addEventListener("submit", onSubmit);

    return () => {
      io.disconnect();
      if (timer.current) window.clearInterval(timer.current);
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
