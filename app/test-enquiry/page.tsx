"use client";

export default function TestEnquiryPage() {
  async function sendTest() {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Scott Test",
        phone: "07123456789",
        email: "test@example.com",
        vehicle: "Ford Fiesta",
        registration: "AB12 CDE",
        location: "Dunbar",
        message: "This is a test enquiry from the website.",
      }),
    });

    const result = await response.json();

    alert(JSON.stringify(result, null, 2));
  }

  return (
    <main className="min-h-screen bg-[#08111F] flex items-center justify-center">
      <button
        onClick={sendTest}
        className="rounded-full bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
      >
        Send Test Enquiry
      </button>
    </main>
  );
}