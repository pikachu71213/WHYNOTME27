import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default async function Icon() {
  // Read the logo from public folder and convert to base64 for embedding
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const base64Data = logoBuffer.toString("base64");
  const srcUrl = `data:image/png;base64,${base64Data}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={srcUrl}
          alt="WHYNOT27"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
