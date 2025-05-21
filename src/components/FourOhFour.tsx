import Layout from "./Layout";

export default function FourOhFour() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="space-y-2 text-center my-20">
          <h1 className="text-4xl font-bold">well that's not good.</h1>
          <p>
            something went wrong and you landed on a route that doesn't exist.
            why'd you do that.
          </p>
          <a href="/" className="underline">
            get outta here
          </a>
        </div>
      </div>
    </Layout>
  );
}
