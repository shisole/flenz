export function waitlistConfirmationEmail(role: string) {
  const isBusiness = role === "business";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <span style="font-size:28px;font-weight:800;color:#ffffff;">Flenz</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#131318;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:40px 32px;">
              <!-- Checkmark -->
              <div style="text-align:center;margin-bottom:24px;">
                <div style="display:inline-block;width:56px;height:56px;line-height:56px;border-radius:50%;background-color:rgba(52,211,153,0.15);color:#34d399;font-size:28px;">
                  &#10003;
                </div>
              </div>

              <h1 style="margin:0 0 8px;text-align:center;font-size:22px;font-weight:700;color:#ffffff;">
                You're on the list!
              </h1>
              <p style="margin:0 0 24px;text-align:center;font-size:15px;color:#9ca3af;line-height:1.6;">
                Thanks for joining the Flenz waitlist. We're building the Philippines' first influencer marketplace and you'll be among the first to try it.
              </p>

              <div style="background-color:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:12px;padding:20px;margin-bottom:24px;">
                <p style="margin:0 0 4px;font-size:13px;color:#818cf8;font-weight:600;">What's next for you</p>
                <p style="margin:0;font-size:14px;color:#d1d5db;line-height:1.6;">
                  ${
                    isBusiness
                      ? "When we launch, you'll be able to browse influencer portfolios by category and location, unlock profiles, and connect with creators who fit your brand."
                      : "When we launch, you'll be able to create your portfolio, showcase your content, and get discovered by businesses looking for creators just like you."
                  }
                </p>
              </div>

              <p style="margin:0;text-align:center;font-size:13px;color:#6b7280;line-height:1.6;">
                We'll send you an email when Flenz is ready. No spam, we promise.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:24px;">
              <p style="margin:0;font-size:12px;color:#374151;">
                &copy; ${new Date().getFullYear()} Flenz. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
