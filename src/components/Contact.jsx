import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: Yup.string()
    .required("Subject is required")
    .max(100, "Subject must be under 100 characters"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Handle submission (still works with Formspree)
  const onSubmit = async (data) => {
    try {
      await fetch("https://formspree.io/f/movnqkqa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="layout flex flex-col bg-black text-white">
      {/* Main contact section */}
      <section className="flex-1 pt-8 md:pt-24 pb-28 md:pb-32" id="contact">
        <div className="layout flex flex-col md:flex-row justify-between bg-black text-white">
          {/* Left column */}
          <div className="flex flex-col justify-between md:w-5/12 py-16 md:py-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
                Let’s Connect
              </h2>

              <p className="mb-2">
                Say hello at{" "}
                <a
                  href="mailto:gspremierglobaal@gmail.com"
                  className="underline underline-offset-4 hover:text-lime-400"
                >
                  gspremierglobaal@gmail.com
                </a>
              </p>
              <p className="mb-8">
                For more info, here’s my{" "}
                <a
                  href="/resume.pdf"
                  className="underline underline-offset-4 hover:text-lime-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>
              </p>

              {/* Socials */}
              <div className="flex items-center gap-5 text-[#D3E97A] text-2xl">
                <a
                  href="https://www.linkedin.com/in/sikiru-godspower-228394381/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Shaw745"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/godspowershaw?s=21&t=QVLVMIQnW_Y4qTtISA6vdw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/shaw144444/?igsh=Zmdiazl5dTBrZGUy&utm_source=qr#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="mt-auto  text-gray-400 text-sm hidden md:block">
              © 2025 Lisa Shaw
            </div>
          </div>

          {/* Right column (Formspree form + validation) */}
          <div className="md:w-6/12 pb-30 md:py-24">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded normal-case"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded normal-case"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  {...register("subject")}
                  className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded normal-case"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows="5"
                  className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded resize-none normal-cas"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D3E97A] text-black px-8 py-3 rounded-full font-bold hover:bg-lime-300 transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "SUBMIT"}
              </button>

              {isSubmitSuccessful && (
                <p className="text-green-400 text-sm mt-3">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className=" layout mt-auto  text-gray-400 text-sm md:hidden">
          © 2025 Lisa Shaw
        </div>
      </section>
    </div>
  );
};
export default Contact;
