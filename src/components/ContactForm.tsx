import { useRef, useState, useEffect } from "react";

export default function ContactForm() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  // auto-clear error/success states after a few seconds
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [success]);

  const onSubmit = async () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (name && email && message) {
      console.log(name, email, message);

      try {
        await fetch("https://api.alexav.gg/v4/contact", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            subject: "Website Contact",
          }),
        });

        // by the time this is hit all of these are defined otherwise the error is shown
        // should be fine. should be? should be.
        nameRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";
        setSuccess(true);
      } catch (e) {
        setError("something went wrong. idk man.");
        console.error("error submitting contact form", e);
      }
    } else {
      setError("define all values. loser.");
    }
  };

  return (
    <div className="bg-zinc-90 border border-solid border-white rounded-lg w-fit mx-auto">
      <div className="my-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="space-y-2 p-2 select-none">
            <div className="block">
              <input
                ref={nameRef}
                data-1p-ignore
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                className="bg-zinc-800 rounded-lg border border-solid border-white p-1 text-white"
                placeholder="name.."
              />
            </div>
            <div className="block">
              <input
                ref={emailRef}
                data-1p-ignore
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                className="bg-zinc-800 rounded-lg border border-solid border-white p-1 text-white"
                placeholder="email.."
              />
            </div>
            <div className="block">
              <textarea
                ref={messageRef}
                data-1p-ignore
                autoComplete="off"
                id="email"
                name="email"
                className="bg-zinc-800 rounded-lg border border-solid border-white p-1 text-white w-full h-40"
                placeholder="message.."
              />
            </div>
          </div>

          <div className="text-center">
            <button
              className="bg-white p-2 rounded-lg text-black font-bold hover:cursor-pointer"
              type="submit"
            >
              submit
            </button>
            <p className="text-red-500 opacity-50 font-bold my-2">{error}</p>
            {success && (
              <p className="text-green-500 opacity-50 font-bold my-2">
                submitted. watch ur email.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
