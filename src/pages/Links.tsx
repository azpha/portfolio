import Layout from "../components/Layout";

export default function Links() {
  const SocialButton = ({
    url,
    platform,
  }: {
    url: string;
    platform: string;
  }) => {
    return (
      <div className="block">
        <a href={url} target="_blank">
          <button
            type="button"
            className="bg-white text-black font-bold w-1/2 rounded-lg p-2"
          >
            {platform}
          </button>
        </a>
      </div>
    );
  };

  return (
    <Layout>
      <div className="my-45">
        <div className="border border-solid border-white rounded-lg w-full md:w-fit text-center p-2 mx-auto">
          <h1 className="text-4xl font-bold">links</h1>
          <p>links to my social media (i don't touch grass)</p>
          <hr className="mt-2" />

          <div className="my-2 space-y-2">
            <SocialButton
              url={"https://twitter.com/carlgrimesdupe"}
              platform={"Twitter"}
            />
            <SocialButton
              url={"https://linkedin.com/in/thatalex"}
              platform={"LinkedIn"}
            />
            <SocialButton
              url={"https://medal.tv/u/alexav"}
              platform={"Medal"}
            />
            <SocialButton
              url={"https://github.com/azpha"}
              platform={"GitHub"}
            />
            <SocialButton
              url={"mailto:alex@vierfrantz.com"}
              platform={"Email"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
