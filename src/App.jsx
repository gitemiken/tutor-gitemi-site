import React from "react";

export default function App() {
  const whatsappNumber = "254708812714";
  const whatsappMessage = encodeURIComponent(
    "Hello Gitemi, I would like help with tutoring or an assignment."
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tutor Gitemi</h1>
            <p className="text-sm text-slate-300">
              Lets make sure you pass that class!
            </p>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="text-slate-200 hover:text-white">
              Services
            </a>
            <a href="#subjects" className="text-slate-200 hover:text-white">
              Subjects
            </a>
            <a href="#about" className="text-slate-200 hover:text-white">
              About
            </a>
            <a href="#contact" className="text-slate-200 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300">
                Assignment Help and Tutoring • Kenya
              </p>

              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Academic support that helps you understand and pass.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                I help students across different subjects and levels with
                tutoring, assignment guidance, revision support, and exam
                preparation. My goal is simple: help you succeed with clarity
                and confidence.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-emerald-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                    Name
                  </p>
                  <p className="mt-2 text-lg font-semibold">Gitemi Mwangi</p>
                </div>

                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                    Main Service
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Assignment Help & Tutoring
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                    Subjects
                  </p>
                  <p className="mt-2 text-lg font-semibold">All Subjects</p>
                </div>

                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                    Levels
                  </p>
                  <p className="mt-2 text-lg font-semibold">All Levels</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
                <p className="text-sm text-emerald-200">
                  Need help with classwork, homework, revision, or assignments?
                </p>
                <p className="mt-2 text-xl font-bold">
                  Reach out and let us get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-white/10 bg-slate-900">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                Services
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                What I offer
              </h3>
              <p className="mt-4 text-slate-300">
                Flexible academic support tailored to your needs, timeline, and
                level of study.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <h4 className="text-xl font-semibold">One-on-One Tutoring</h4>
                <p className="mt-3 text-slate-300">
                  Personalized tutoring sessions to help you understand difficult
                  topics, complete coursework, and improve performance.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <h4 className="text-xl font-semibold">Assignment Guidance</h4>
                <p className="mt-3 text-slate-300">
                  Structured support with assignments, research, editing, and
                  academic direction so you can submit quality work.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <h4 className="text-xl font-semibold">Exam Preparation</h4>
                <p className="mt-3 text-slate-300">
                  Focused revision plans, topic breakdowns, and guided practice
                  to help you prepare effectively for tests and exams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="subjects" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                Subjects & Levels
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Support across all subjects
              </h3>
              <p className="mt-4 text-slate-300">
                I work with learners from different academic levels and provide
                support in a wide range of subjects.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold">Subjects</h4>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>Mathematics</li>
                  <li>Sciences</li>
                  <li>Humanities</li>
                  <li>Business Studies</li>
                  <li>Research and Writing Support</li>
                  <li>And many more</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold">Levels</h4>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>Primary School</li>
                  <li>Secondary School</li>
                  <li>College</li>
                  <li>University</li>
                  <li>Adult Learners</li>
                  <li>General Academic Support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-slate-900">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                  About
                </p>
                <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                  Why students choose Tutor Gitemi
                </h3>
              </div>

              <div className="space-y-5 text-slate-300">
                <p>
                  I focus on making learning practical, understandable, and
                  results-oriented. Whether you need help catching up, improving
                  your grades, or handling a demanding assignment, I provide
                  patient and reliable support.
                </p>
                <p>
                  My approach is built on clarity, consistency, and encouragement.
                  I believe every student can improve with the right guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                Contact
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Let’s work together
              </h3>
              <p className="mt-4 text-slate-300">
                Reach out through WhatsApp or email and tell me what help you
                need.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg font-semibold hover:text-emerald-300"
                >
                  +254 708 812 714
                </a>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-emerald-300">
                  Email
                </p>
                <a
                  href="mailto:gitemikennedy@gmail.com"
                  className="mt-3 block text-lg font-semibold hover:text-emerald-300"
                >
                  gitemikennedy@gmail.com
                </a>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-emerald-300">
                  Location
                </p>
                <p className="mt-3 text-lg font-semibold">Kenya</p>
              </div>

              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6">
                <h4 className="text-2xl font-bold">Ready to get started?</h4>
                <p className="mt-4 text-slate-200">
                  Send a message with your subject, level, and the kind of help
                  you need. I will get back to you as soon as possible.
                </p>

                <div className="mt-8">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Tutor Gitemi. All rights reserved.</p>
          <p>Lets make sure you pass that class!</p>
        </div>
      </footer>
    </div>
  );
}