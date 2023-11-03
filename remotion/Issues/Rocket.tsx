import { SVGProps } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  rocketRotation,
  ROCKET_ORIGIN_X,
  ROCKET_ORIGIN_Y,
  TIME_BEFORE_SHOOTING,
  UfoPosition,
} from "./make-ufo-positions";

const HEIGHT = 308;
const WIDTH = 179;

const JUMP_IN_DURATION = 20;

export const Rocket = ({
  positions,
  ...props
}: SVGProps<SVGSVGElement> & {
  positions: UfoPosition[];
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const jumpIn = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    delay: TIME_BEFORE_SHOOTING - 30,
    durationInFrames: JUMP_IN_DURATION,
  });

  const yOffset = interpolate(jumpIn, [0, 1], [400, 0]);

  const normalRocketRotation = rocketRotation(positions, frame) + Math.PI / 2;
  const rotation = interpolate(
    frame,
    [TIME_BEFORE_SHOOTING - 20, TIME_BEFORE_SHOOTING],
    [0, normalRocketRotation],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 179 308"
      {...props}
      style={{
        height: HEIGHT,
        width: WIDTH,
        position: "absolute",
        left: ROCKET_ORIGIN_X - WIDTH / 2,
        top: ROCKET_ORIGIN_Y - HEIGHT / 2 + yOffset,
        transform: `rotate(${rotation}rad)`,
      }}
    >
      <style>{".st4{fill:#707ca5}.st5{fill:#45547f}"}</style>
      <g id="Layer_12">
        <path d="m38.09 166.32-.1.02-.19-.81c.15.23.26.5.29.79z" />
        <linearGradient
          id="SVGID_1_"
          x1={87.961}
          x2={95.97}
          y1={44.63}
          y2={279.039}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#545d9e",
            }}
          />
          <stop
            offset={0.927}
            style={{
              stopColor: "#cee8e5",
            }}
          />
        </linearGradient>
        <path
          d="M152.22 154.64c-1.92 0-3.68.66-5.08 1.77h-.01l-7.66-.88c.17-5.7.24-11.75.14-17.88-.02-1.04-.03-2.08-.06-3.12-.02-.57-.03-1.13-.04-1.7-.02-.52-.03-1.02-.04-1.53-.27-12.52-.43-22.29-4.79-36.09-10.27-32.49-30.41-51.06-32.81-53.83-2.39-2.76-7.62-5.74-12.69-3.11-5.08 2.62-26.28 23.49-35.84 43.64-5.91 12.47-8.6 34.42-9.78 49.36v.01c-.03.42-.07.84-.09 1.26-.13 1.69-.24 3.28-.34 4.75-.32 5.19-.43 8.77-.45 9.57-.01.12-.01.23 0 .34l.3 8.16-5.78 1.31a8.181 8.181 0 0 0-5.41-2.04c-4.54 0-8.21 3.68-8.21 8.21 0 4.22 3.17 7.69 7.26 8.16l4.54 83.67c.05.98.86 1.74 1.85 1.74h3.31c1.06 0 1.91-.89 1.85-1.96l-.09-1.6-.2-3.33-.05-.96 4.33.99.54 15.07c.1 2.82 2.38 5.08 5.2 5.17l10.79.31c.06.34.17.66.33.99l1.69 3.56c.02.02.02.03.02.03l1.99 4.18c.72 1.5 2.24 2.46 3.9 2.46h40.68c1.67 0 3.19-.96 3.9-2.46l1.19-2.49 2.23-4.68 8.92.26c2.92.08 5.36-2.18 5.51-5.09l.9-17.46 4.61-.52-.46 3.88c-.09.84.52 1.58 1.36 1.63l4.09.24c.77.05 1.45-.52 1.53-1.29l9.46-82.68a8.21 8.21 0 0 0 5.69-7.81c-.02-4.54-3.7-8.21-8.23-8.21zM31.9 167.15c-2.38 0-4.3-1.92-4.3-4.3s1.92-4.3 4.3-4.3 4.3 1.92 4.3 4.3-1.92 4.3-4.3 4.3zm9.55 71.65-4.11-69.91c.92-.84 1.64-1.89 2.1-3.08l3.87-.89 1.27 35.41.09 2.39 1.34 37.13-4.56-1.05zm98.45.49-5.26.61 2.53-49.28c.01-.1.02-.2.02-.29.07-.67.39-3.67.77-8.29.06-.74.13-1.53.2-2.35.31-4.07.66-9.12.93-14.76l5.36.62a8.236 8.236 0 0 0 3.69 4.43l-8.24 69.31zm12.43-72.14c-2.38 0-4.3-1.92-4.3-4.3s1.92-4.3 4.3-4.3 4.3 1.92 4.3 4.3-1.92 4.3-4.3 4.3z"
          style={{
            fill: "url(#SVGID_1_)",
          }}
        />
        <path
          d="M139.51 132.83c-41.85 10.85-79.8 3.85-96.04-.29-.13 1.69-.24 3.28-.34 4.75 10.31 2.57 28.16 6 49.88 6 14.23 0 30.11-1.48 46.6-5.64l-.1-4.82z"
          className="st4"
        />
        <path
          d="M116.71 110.7c-.82 6.89-6.89 10.27-9.81 12.62-4.81 3.87-10.18 6.79-17.02 5.92-3.1-.39-12.65-2.36-16.43-7.31-3.6-4.7-7.7-9.12-6.85-16.11.3-2.47.25-16.93 13.13-22.78 20.42-9.28 32.77 7.85 34.1 9.87 1.32 1.99 3.85 9.73 2.88 17.79z"
          className="st5"
        />
        <path
          d="M77.29 116.42c-4.81-3.84-6.51-12-4.03-17.71 3.46-7.99 10.15-12 15.89-11.74 6.31.28 11.58 2.47 16.63 5.66 5.69 3.59 6.94 10.9 3.9 17.13-2.24 4.6-4.78 8.47-9.89 10-13.54 3.81-20.76-1.95-22.5-3.34z"
          style={{
            fill: "#f9f880",
          }}
        />
        <path
          d="M110.33 75.01c-.71-4.06 1.5-5.51 5.36-5.62 3.96-.11 4.93 2.11 4.29 5.39-.59 3.01.01 6.92-5.16 6.85-4.86-.07-5-2.92-4.49-6.62z"
          style={{
            fill: "#fbffff",
          }}
        />
        <path
          d="M59.28 121.96c-1.08 2.18-3.09 2.37-5.17 2.4l-2.3-1.67c-.73-3.3 1.89-4.3 3.92-5.72 3.56-.02 3.38 2.61 3.55 4.99z"
          style={{
            fill: "#f9fafb",
          }}
        />
        <path
          d="M64.37 153.21c.37.85.71 7.31.52 9.7-2.2 3.64-5.39 3.36-8.44 1.65-2.99-1.67-2.37-12.03-.66-12.85 1.43-.68 8.12-1.03 8.58 1.5z"
          style={{
            fill: "#fff",
          }}
        />
        <path
          d="M62.04 174.1c-3.12.48-9.93-2.4-5.71-5.25 2.39-1.61 7.42-1.82 8.52 1.51.56 1.67-1.06 3.47-2.81 3.74z"
          style={{
            fill: "#f8f780",
          }}
        />
        <path
          d="M104.8 239.19c-.21.14-.42.28-.59.47-.84.92-.43 2.51.55 3.28.97.77 2.3.92 3.54.93 2.24.01 4.66-.43 6.21-2.05.55-.57.98-1.4.72-2.15-.46-1.31-3.11-1.7-4.3-1.96-2.02-.45-4.44.42-6.13 1.48z"
          style={{
            fill: "#f7f586",
          }}
        />
        <path
          d="M121.56 237.18c-.14-.19-.35-.31-.57-.4-2.16-.98-4.63-.75-7-.33-.63.11-1.15.6-1.25 1.23-.19 1.25-.28 2.52-.26 3.78 0 .08.01.17.06.23.06.07.17.07.26.07l8.29-.12c.2 0 .42-.01.57-.14.13-.11.18-.29.22-.45.23-.89.13-1.36-.06-2.17-.1-.48.04-1.28-.26-1.7zm-16.27-12.12c-.87-.06-1.79-.11-2.56.3-1.18.62-1.61 2.14-1.5 3.47.12 1.41.79 2.87 2.06 3.5 1.16.58 2.53.37 3.81.19 2.84-.4 5.7-.59 8.56-.57 1.42.01 2.83.07 4.25-.03.55-.04 1.12-.11 1.56-.43.53-.38.8-1.04.85-1.69.05-.65-.1-1.3-.24-1.94-.25-1.12-.64-2.51-1.94-2.59-1.49-.09-3.09.13-4.59.13-3.43-.01-6.85-.12-10.26-.34z"
          style={{
            fill: "#f8f9f8",
          }}
        />
        <path
          d="m118.82 271.7-2.23 4.68-51.66-1.7s-.01-.01-.02-.03l-1.69-3.56c-.16-.32-.27-.65-.33-.99l55.93 1.6z"
          className="st5"
        />
        <path
          d="M84.69 214.07v2.35H59.92l-1.76-11.65-13.49-2.05-.08-2.4 15.64 2.4 1.71 11.35zm53.47-34.37c-.07.82-.13 1.6-.2 2.35h-13.8v-13.11H99.75v-2.35h26.76v13.11h11.65z"
          className="st4"
        />
        <circle cx={85.86} cy={215.25} r={2.74} className="st4" />
      </g>
    </svg>
  );
};
