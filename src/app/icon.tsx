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
      <svg
        width="512"
        height="512"
        viewBox="0 0 512 512"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <clipPath id="circleView">
            <circle cx="256" cy="256" r="256" />
          </clipPath>
        </defs>
        <g clipPath="url(#circleView)">
          <image
            href={srcUrl}
            x="0"
            y="0"
            width="512"
            height="512"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
    ),
    {
      ...size,
    }
  );
}
