import ContactGrid from "../_components/contact/contact-grid";
import ContactStatus from "../_components/contact/contact-status";

export default function ContactPage() {
  return (
    <main className="relative z-10">
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              contact
            </h1>
            <p className="mt-2 text-gray-400 font-mono">
              // let’s build something together
            </p>
          </div>

          <ContactGrid />
          <ContactStatus />

          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm">
              // let’s turn codeine into coding together
            </p>
            <p className="text-xs text-gray-600 mt-2 font-mono">
              {"if (message.isInteresting()) { response.send_immediately(); }"}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
