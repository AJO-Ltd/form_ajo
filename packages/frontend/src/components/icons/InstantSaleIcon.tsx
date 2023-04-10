import ColorValue from "types/enums/ColorValue";

type Props = {
  colorValue: ColorValue;
};

export default function InstantSaleIcon({ colorValue }: Props): JSX.Element {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2096_7583)">
        <path
          d="M16.6667 9L5 22.4H15.5L14.3333 31L26 17.6H15.5L16.6667 9Z"
          stroke={colorValue}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.3311 3.92169L17.3311 1.64059C17.3311 1.233 17.1136 0.856483 16.7608 0.652813C16.4079 0.449144 15.9731 0.449144 15.6202 0.652813C15.2674 0.856483 15.05 1.23301 15.05 1.64059L15.05 3.92169C15.05 4.32929 15.2674 4.7058 15.6202 4.90947C15.9731 5.11314 16.4079 5.11314 16.7608 4.90947C17.1136 4.7058 17.3311 4.32927 17.3311 3.92169Z"
          fill={colorValue}
        />
        <path
          d="M22.6997 3.58769C22.9795 3.29797 23.0859 2.88225 22.9795 2.49375C22.8728 2.1055 22.5693 1.80205 22.1811 1.69536C21.7926 1.58894 21.3768 1.69536 21.0871 1.97515L19.9466 3.1157C19.6668 3.40542 19.5604 3.82115 19.6668 4.20965C19.7735 4.59789 20.0769 4.90135 20.4652 5.00804C20.8537 5.11445 21.2694 5.00804 21.5591 4.72824L22.6997 3.58769Z"
          fill={colorValue}
        />
        <path
          d="M12.4346 3.11567L11.294 1.97512C11.0817 1.7549 10.7894 1.62964 10.4836 1.62684C10.1776 1.62429 9.88357 1.74446 9.66719 1.96086C9.4508 2.17726 9.33063 2.4713 9.33318 2.7773C9.33598 3.08305 9.46123 3.37532 9.68146 3.58767L10.822 4.72822C11.1117 5.00801 11.5274 5.11443 11.916 5.00801C12.3042 4.90134 12.6076 4.59787 12.7143 4.20963C12.8208 3.82113 12.7143 3.40538 12.4345 3.11568L12.4346 3.11567Z"
          fill={colorValue}
        />
      </g>
      <defs>
        <clipPath id="clip0_2096_7583">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0 0.500061)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}