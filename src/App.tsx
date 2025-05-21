import ContactForm from "./components/ContactForm";
import Layout from "./components/Layout";
import Section from "./components/Section";

export default function App() {
  return (
    <Layout>
      <div className="my-30 text-center">
        <div className="md:w-[515px] md:text-left w-full mx-auto text-center">
          <p className="opacity-50">
            a cliché SaaS website for funzies? hell yeah.
          </p>
        </div>
        <h1 className="text-6xl font-bold mx-auto w-[310px] md:w-full">
          Hi, I'm{" "}
          <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] text-nowrap">
            Alex Frantz
          </span>
        </h1>
        <p className="my-2 text-2xl opacity-80 w-[310px] md:w-full mx-auto">
          Working as QA & mediocre coder @{" "}
          <a href="https://medal.tv" target="_blank">
            Medal
          </a>
        </p>
      </div>
      <Section id="what-i-do">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-2">
            <div className="text-left space-y-2 p-2 lg:w-9/12  mx-auto">
              <h1 className="text-6xl font-bold">what i do</h1>
              <p className="opacity-80">
                i do a whole lot of QA at{" "}
                <a href="https://medal.tv" target="_blank">
                  Medal
                </a>
                , where I've also learned how to be doin' dev stuff. I work with
                some of the best talent in gaming to always ensure the quality
                of the best recorder on the market is consistently as great as
                it can be
              </p>
            </div>
            <div className="w-[900px]">
              <img src="/medal.png" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="about-me">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-2">
            <div className="text-left space-y-2 p-2 lg:w-9/12  mx-auto">
              <h1 className="text-6xl font-bold">about me</h1>
              <p className="opacity-80">
                i was born & raised in rural western new york just outside of
                buffalo. i started playing games i probably shouldn't have been
                playing on the PS2 and it was ALL over from there. i then wanted
                to work in the gaming industry when i was growing up
              </p>

              <p className="opacity-80">
                i have a foundational certification in C# from freeCodeCamp and
                otherwise know javascript, python and java. i spend most of my
                time either doing web dev or writing dumb stuff on express
                servers. or making minecraft mods. idk a lot of stuff.
              </p>
            </div>
            <div className="flex space-x-4">
              <img
                src="https://storage.alexav.gg/content/picture.jpg"
                className="w-[100px] h-[300px] object-cover"
              />
              <img
                src="https://storage.alexav.gg/content/picturev2.jpg"
                className="w-[100px] h-[300px] object-cover"
              />
              <img
                src="https://storage.alexav.gg/content/picturenew.jpeg"
                className="w-[100px] h-[300px] object-cover"
              />
              <img
                src="https://storage.alexav.gg/content/picture4.jpg"
                className="w-[100px] h-[300px] object-cover"
              />
              <img
                src="https://storage.alexav.gg/content/picture6.jpg"
                className="w-[100px] h-[300px] object-cover"
              />
              <img
                src="https://storage.alexav.gg/content/picture7.jpg"
                className="w-[100px] h-[300px] object-cover"
              />
              <img
                src="https://storage.alexav.gg/content/picture8.jpg"
                className="w-[100px] h-[300px] object-cover"
              />
              <img
                src="https://storage.alexav.gg/content/picture9.jpg"
                className="w-[86px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact">
        <div className="flex justify-center items-center">
          <div className="my-4">
            <div className="pb-8">
              <h1 className="text-center text-6xl font-bold">hit me up</h1>
              <p className="opacity-50">fr ong no cap.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
