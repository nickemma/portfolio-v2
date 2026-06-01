"use server";

interface ContactPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactEmail(
    payload: ContactPayload,
): Promise<{ success: boolean; error?: string }> {
    const { name, email, subject, message } = payload;

    // Basic validation
    if (!name || !email || !message) {
        return { success: false, error: "Please fill in all required fields." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            success: false,
            error: "Please provide a valid email address.",
        };
    }

    // If SMTP credentials aren't configured, log and return success
    // (development / demo mode)
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log(
            "📬 Contact form submission (configure SMTP to enable email delivery):",
        );
        console.log({ name, email, subject, message });
        return { success: true };
    }

    try {
        // Dynamically import nodemailer only when credentials exist
        const nodemailer = await import("nodemailer");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const to = process.env.CONTACT_EMAIL ?? "nicholasemmanuel321@gmail.com";

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to,
            replyTo: email,
            subject: `[Portfolio] ${subject || "New Message"}`,
            html: `
        <div style="font-family:monospace;background:#04080f;color:#e8f0fe;padding:2rem;border:1px solid rgba(0,229,255,0.2)">
          <h2 style="color:#00e5ff;margin-top:0">New message from ${name}</h2>
          <p><strong style="color:#7d8fa4">EMAIL</strong><br>${email}</p>
          <p><strong style="color:#7d8fa4">SUBJECT</strong><br>${subject}</p>
          <p><strong style="color:#7d8fa4">MESSAGE</strong><br>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
        });

        return { success: true };
    } catch (err) {
        console.error("Email send error:", err);
        return {
            success: false,
            error: "Failed to send message. Please try again.",
        };
    }
}
