import Link from "next/link";
import { DATA } from "@/data/resume";

import CertificateGallery from "@/components/certificate-gallery";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Markdown from "react-markdown";
import { SwapOutlined } from "@ant-design/icons";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none lowercase"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-pretty"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 group flex  justify-center transition-all duration-1000 relative ">
                {DATA.avatarUrl && DATA.avatarUrlCartoon ? (
                  <>
                    <AvatarImage
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                      className="transition-all duration-500 opacity-[1] group-hover:opacity-0 absolute inset-0 group-hover:scale-x-[-1] rounded-full"
                    />
                    <AvatarImage
                      alt={DATA.name}
                      src={DATA.avatarUrlCartoon}
                      className="transition-all duration-500 opacity-0 group-hover:opacity-[1]  absolute inset-0 scale-x-[-1] group-hover:scale-x-[1] rounded-full"
                    />
                  </>
                ) : (
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="transition-all duration-500  absolute inset-0 group-hover:scale-x-[-1] rounded-full"
                  />
                )}
                <SwapOutlined className="z-10 absolute animate-pulse bottom-2 text-white" />

                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-pretty">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={id}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.title}
                subtitle={work.company}
                location={work.location}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill?.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge
                  key={skill?.name}
                  className={`${skill?.className} duration-300 cursor-default`}
                >
                  {skill?.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pretty">
                  My Work as a Software Engineer
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-pretty">
                  I&apos;ve had the opportunity to work on various projects in
                  software development. continually learning, collaborating with
                  great teams, and building solutions that make a positive
                  impact.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  // iframe={project?.iframe}
                  // image={project.image}
                  // video={project.video}
                  links={project.links}
                  listToShow={project.listToShow}
                  thumbnail={project.thumbnail}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="certificates">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certificates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pretty">
                  My Achievements and Qualifications
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-pretty">
                  As a recent graduate of a data analysis course, I&apos;m proud
                  to present the certificates I&apos;ve earned. These
                  certifications represent my dedication to developing skills
                  and knowledge in the field of data analysis.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            <CertificateGallery
              blurFadeDelay={BLUR_FADE_DELAY * 14}
              data={DATA?.certificates}
            />
          </div>
        </div>
      </section> */}

      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
       */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s connect!
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to{" "}
                <Link
                  href={DATA.contact.social.WhatsApp.url}
                  className="text-blue-500 hover:underline"
                  target="__blank"
                >
                  reach out via WhatsApp
                </Link>{" "}
                with any questions or opportunities. I&apos;m always excited to
                explore new possibilities and will get back to you quickly!
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}